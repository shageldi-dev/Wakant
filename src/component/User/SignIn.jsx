import React, { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropsTypes from "prop-types";
import PersonIcon from "@mui/icons-material/Person";
import {
  BoldTypography,
  FontSizes,
  RegularTypography,
} from "../Common/MuiComponent";
import { useTranslation } from "react-i18next";
import CloseIcon from "@mui/icons-material/Close";
import { LoadingButton } from "@mui/lab";
import { Fonts } from "../../common/fonts.mjs";
import LockIcon from "@mui/icons-material/Lock";
import CountdownTimer from "./CountdownTimer";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import { showError, showSuccess } from "../Common/Alert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  height: "90vh",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: "5px",
};

const SignIn = (props) => {
  const { t } = useTranslation();

  const [page, setPage] = useState(0);

  const [gPhone, setGPhone] = useState("");

  function FirstPage() {
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
    const [phone, setPhone] = useState("+9936");
    const [l, setL] = useState(false);
    function checkPhoneNumber(next) {
      if (!phone.startsWith("+9936")) {
        setError(true);
        setHelperText(t("phone_error_1"));
      } else if (phone.length > 12) {
        setError(true);
        setHelperText(t("phone_error_2"));
      } else {
        next();
      }
    }

    useEffect(() => {
      checkPhoneNumber(() => {
        setError(false);
        setHelperText("");
      });
    }, [phone]);

    function login() {
      let p = phone.substring(4);
      setL(true);
      AxiosInstance.post("/users/post-code", {
        phone_number: p,
      })
        .then((response) => {
          if (response.data.success) {
            setPage(page + 1);
            setGPhone(p);
            showSuccess(t("confirm_desc"));
          } else {
            showError(t("error"));
          }
          setL(false);
        })
        .catch((err) => {
          showError(t("error"));
          setL(false);
        });
    }

    const next = () => {
      checkPhoneNumber(() => {
        if (phone.length !== 12) {
          setError(true);
          setHelperText(t("phone_error_2"));
        } else {
          login();
        }
      });
    };

    return (
      <Stack
        alignItems={"center"}
        sx={{ width: "100%" }}
        spacing={2}
      >
        <Stack
          direction={"row"}
          sx={{ width: "100%" }}
          justifyContent={"flex-end"}
        >
          <IconButton onClick={props.onClose}>
            <CloseIcon color={"primary"} />
          </IconButton>
        </Stack>
        <PersonIcon
          color={"primary"}
          sx={{ fontSize: 80 }}
        />
        <BoldTypography sx={{ fontSize: FontSizes.title }}>
          {t("sign_in_to")}
        </BoldTypography>

        <RegularTypography
          sx={{ fontSize: FontSizes.body, textAlign: "center" }}
        >
          {t("sign_in_desc")}
        </RegularTypography>

        <TextField
          label={t("your_phone")}
          type={"phone"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          helperText={helperText}
          variant={"filled"}
          error={error}
          fullWidth
          sx={{ m: 2 }}
        />

        <FormControlLabel
          control={<Checkbox defaultChecked={false} />}
          label={t("accept_sign_in")}
        />

        <LoadingButton
          onClick={next}
          loading={l}
          variant={"contained"}
          sx={{
            fontSize: FontSizes.button,
            color: "custom.light",
            fontFamily: Fonts.REGULAR,
            textTransform: "none",
            width: "120px",
            mt: 2,
            mb: 2,
          }}
        >
          {t("next")}
        </LoadingButton>
      </Stack>
    );
  }

  function ConfirmPage() {
    const [code, setCode] = useState("");
    const [errorCode, setErrorCode] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [l, setL] = useState(false);

    useEffect(() => {
      setDisabled(code.length !== 5);
    }, [code]);

    const SECONDS_IN_MS = 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + SECONDS_IN_MS;

    function reSend() {
      AxiosInstance.post("/users/post-code", {
        phone_number: gPhone,
      })
        .then((response) => {
          if (response.data.success) {
            showSuccess(t("confirm_desc"));
          } else {
            showError(t("error"));
          }
        })
        .catch((err) => {
          showError(t("error"));
        });
    }

    function signIn() {
      AxiosInstance.post("/users/login/", {
        phone_number: gPhone,
        fcm_token: "fcm_token",
      })
        .then((response) => {
          if (response.data.token) {
            showSuccess(t("success"));
            props.onClose();
            window.location.reload();
            window.localStorage.setItem("token", response.data.token);
            window.localStorage.setItem(
              "user",
              JSON.stringify(response.data.data.user),
            );
          } else {
            showError(t("error"));
          }
          setL(false);
        })
        .catch((err) => {
          showError(t("error"));
          setL(false);
        });
    }

    function checkCode() {
      if (code.length === 5) {
        setL(true);
        AxiosInstance.post("/users/verify-code", {
          phone_number: gPhone,
          code: code,
        })
          .then((response) => {
            if (response.data.success) {
              signIn();
            } else {
              setL(false);
              showError(t("error"));
            }
          })
          .catch((err) => {
            setL(false);
            showError(t("error"));
          });
      }
    }

    return (
      <Stack
        alignItems={"center"}
        sx={{ width: "100%" }}
        spacing={2}
      >
        <Stack
          direction={"row"}
          sx={{ width: "100%" }}
          justifyContent={"flex-end"}
        >
          <IconButton onClick={props.onClose}>
            <CloseIcon color={"primary"} />
          </IconButton>
        </Stack>
        <LockIcon
          color={"primary"}
          sx={{ fontSize: 80 }}
        />
        <BoldTypography sx={{ fontSize: FontSizes.title }}>
          {t("confirm_code")}
        </BoldTypography>

        <RegularTypography
          sx={{ fontSize: FontSizes.body, textAlign: "center" }}
        >
          {t("confirm_desc")}
        </RegularTypography>

        <TextField
          label={t("code")}
          type={"number"}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          helperText={errorMessage}
          variant={"filled"}
          error={errorCode}
          fullWidth
          inputProps={{ maxLength: 5 }}
          sx={{ m: 2 }}
        />

        <CountdownTimer
          targetDate={dateTimeAfterThreeDays}
          click={reSend}
        />

        <LoadingButton
          variant={"contained"}
          disabled={disabled}
          onClick={checkCode}
          loading={l}
          sx={{
            fontSize: FontSizes.button,
            color: "custom.light",
            fontFamily: Fonts.REGULAR,
            textTransform: "none",
            width: "120px",
            mt: 2,
            mb: 2,
          }}
        >
          {t("next")}
        </LoadingButton>
      </Stack>
    );
  }

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock={true}
    >
      <Box sx={style}>{page === 0 ? <FirstPage /> : <ConfirmPage />}</Box>
    </Modal>
  );
};

SignIn.propTypes = {
  open: PropsTypes.bool.isRequired,
  onClose: PropsTypes.func.isRequired,
};

export default SignIn;
