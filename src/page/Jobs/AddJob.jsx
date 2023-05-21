import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  Stack,
  Typography,
  Box,
  Button,
  Slider,
  TextField,
} from "@mui/material";
import {
  AppSelect,
  AppTextArea,
  AppTextField,
} from "../../component/Common/AppComponent";
import { useTranslation } from "react-i18next";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { LoadingButton } from "@mui/lab";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Fonts } from "../../common/fonts.mjs";
import * as Yup from "yup";
import { useFormik } from "formik";
import { colors } from "../../common/theme.mjs";
import AddJobCard from "./AddJobCard";

export const yupStyle = {
  width: "100%",
  backgroundColor: `${colors.NOT_ACTIVE_BLUE}`,
  color: `${colors.TEXT_COLOR}`,
  outline: "none",
  fontSize: "18px",
  borderRadius: "5px",
  fontfamily: `${Fonts.REGULAR}`,
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const JobTimeType = {
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  OTHER: "OTHER",
};

function valuetext(value) {
  return `${value} age`;
}

const AddJob = (props) => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true);
  };
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = (type) => {
    setOpen(true);
    setJobTimeType(type);
  };
  const handleClose = () => setOpen(false);

  const [jobTimeType, setJobTimeType] = useState(JobTimeType.OTHER);

  function getJobTimeTitle() {
    if (jobTimeType === JobTimeType.OTHER) {
      return "job_hours";
    } else if (jobTimeType === JobTimeType.SATURDAY) {
      return "job_times_saturday";
    } else if (jobTimeType === JobTimeType.SUNDAY) {
      return "job_times_sunday";
    }
  }

  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //   Yup form
  const validationSchema = Yup.object({
    email: Yup.string().required("required"),
    password: Yup.string().required("required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema, // shorthand used here
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  return (
    <div>
      <Stack sx={{ mt: 12, mb: 4 }}></Stack>
      <AddJobCard />
      <Stack direction="row" mt={3} justifyContent="flex-end">
        <Button
          onClick={handleClick}
          sx={{ textTransform: "none", fontFamily: Fonts.BOLD }}
          startIcon={<AddCircleOutlineIcon />}
        >
          Add job
        </Button>
      </Stack>
      {showComponent && (
        <>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <AppSelect>
                  <option>{t("job_category")}</option>
                  <option>{t("job_category")}</option>
                </AppSelect>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextField
                  placeholder={t("job_times_saturday")}
                  onClick={() => {
                    handleOpen(JobTimeType.SATURDAY);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextField placeholder={t("job_mail")} type={"email"} />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  sx={{ ...yupStyle, "& fieldset": { border: "none" } }}
                  name="email"
                  label={t("job_name_add")}
                  id="login"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder={t("job_name_add")}
                  type={"text"}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextField
                  placeholder={t("job_times_sunday")}
                  onClick={() => {
                    handleOpen(JobTimeType.SUNDAY);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppSelect>
                  <option>{t("job_expreience")}</option>
                  <option>{t("job_expreience")}</option>
                </AppSelect>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Typography>{t("job_age")}</Typography>
                <Slider
                  getAriaLabel={() => t("job_age")}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextField placeholder={t("job_phone")} type={"phone"} />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppSelect>
                  <option>{t("job_place_document")}</option>
                  <option>{t("job_place_document")}</option>
                </AppSelect>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextField
                  placeholder={t("job_hours")}
                  onClick={() => {
                    handleOpen(JobTimeType.OTHER);
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextField placeholder={t("job_address")} type={"text"} />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextField placeholder={t("job_salary")} type={"number"} />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControl>
                  <FormLabel
                    id="demo-radio-buttons-group-label"
                    sx={{ color: "primary.main" }}
                  >
                    {t("job_gender_add")}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextArea
                  style={{
                    maxWidth: "100%",
                    minWidth: "100%",
                    height: "150px",
                  }}
                  placeholder={t("job_condition")}
                  type={"number"}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <AppTextArea
                  style={{
                    maxWidth: "100%",
                    minWidth: "100%",
                    height: "150px",
                  }}
                  placeholder={t("job_about")}
                  type={"number"}
                />
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label={t("job_read_1")}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label={t("job_read_2")}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label={t("job_read_3")}
                />
              </Grid>
            </Grid>
            <LoadingButton
              fullWidth
              variant={"contained"}
              sx={{ color: "white", mt: 2, mb: 2 }}
            >
              {t("add_job_button")}
            </LoadingButton>

            <Stack sx={{ mb: 4 }}></Stack>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {t(getJobTimeTitle())}
                </Typography>
                <Stack spacing={1} sx={{ mt: 2 }}>
                  <Typography>{t("start_date")}</Typography>
                  <AppTextField type={"time"} />
                  <Typography>{t("end_date")}</Typography>
                  <AppTextField type={"time"} />
                </Stack>
                <FormControlLabel
                  control={<Checkbox defaultChecked={false} />}
                  label={t("no_job")}
                />
                <Button
                  fullWidth
                  onClick={handleClose}
                  variant={"contained"}
                  sx={{ mt: 2, color: "white" }}
                >
                  {t("ok")}
                </Button>
              </Box>
            </Modal>
          </form>
        </>
      )}
    </div>
  );
};

export default AddJob;
