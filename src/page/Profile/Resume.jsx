import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Fonts } from "../../common/fonts.mjs";
import { Grid, IconButton, Stack, styled } from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import GridViewIcon from "@mui/icons-material/GridView";
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LanguageIcon from "@mui/icons-material/Language";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  height: "100%",
  display: "block",
};

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "#414141"],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "#414141",
  },
}));

const Resume = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          color: "#2058D4",
          fontFamily: Fonts.REGULAR,
        }}
      >
        Doly gorkezmek
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={5}>
              <Grid item lg={4} md={4} sm={6} xs={12}>
                <Stack alignItems="center">
                  <img
                    style={{ width: "84px" }}
                    src="/images/ef0f7e6e-5a0d-4a74-8607-2709d48614a2 1 (1).png"
                    alt="ef0f7e6e-5a0d-4a74-8607-2709d48614"
                  />
                  <Typography
                    sx={{
                      color: "#414141",
                      fontFamily: Fonts.REGULAR,
                      fontWeight: "300",
                      fontSize: "20px",
                    }}
                  >
                    GUWANC
                  </Typography>
                  <Typography
                    sx={{
                      color: "#414141",
                      fontFamily: Fonts.REGULAR,
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    SAPAROW
                  </Typography>
                  <Stack mt={1} mb={1}>
                    <img src="images/Line 1.png" alt="Line 1" />
                  </Stack>
                  <Typography
                    sx={{
                      textTransform: "uppercase",
                      fontFamily: Fonts.REGULAR,
                      fontWeight: "300",
                    }}
                  >
                    satyjy konsultant
                  </Typography>
                </Stack>
                <Stack alignItems="center" mt={3}>
                  <Box
                    sx={{ background: "#d9d9d9", p: 1, width: "74%", mb: -3 }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontWeight: "700",
                        color: "#414141",
                        textTransform: "uppercase",
                      }}
                    >
                      sahsy maglumat
                    </Typography>
                  </Box>
                </Stack>
                <Box sx={{ background: "#7cb8dd", height: "100%" }}>
                  <Stack pt={7} pl={5} spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <IconButton
                        sx={{
                          background: "#fff",
                          width: "30px",
                          height: "30px",
                          color: "#414141",
                          "&:hover": { background: "#fff" },
                        }}
                      >
                        <MaleIcon />
                      </IconButton>
                      <Typography sx={{ color: "#414141", fontWeight: "400" }}>
                        Erkek
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <IconButton
                        sx={{
                          background: "#fff",
                          width: "30px",
                          height: "30px",
                          color: "#414141",
                          "&:hover": { background: "#fff" },
                        }}
                      >
                        <TwitterIcon />
                      </IconButton>
                      <Typography sx={{ color: "#414141", fontWeight: "400" }}>
                        14.10.2022
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack alignItems="center" mt={4}>
                    <Box
                      sx={{ background: "#d9d9d9", p: 1, width: "74%", mb: -3 }}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontWeight: "700",
                          color: "#414141",
                          textTransform: "uppercase",
                        }}
                      >
                        habarlasmak
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack pt={7} pl={5} spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <IconButton
                        sx={{
                          background: "#fff",
                          width: "30px",
                          height: "30px",
                          color: "#414141",
                          "&:hover": { background: "#fff" },
                        }}
                      >
                        <HomeIcon />
                      </IconButton>
                      <Typography sx={{ color: "#414141", fontWeight: "400" }}>
                        Asgabat
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <IconButton
                        sx={{
                          background: "#fff",
                          width: "30px",
                          height: "30px",
                          color: "#414141",
                          "&:hover": { background: "#fff" },
                        }}
                      >
                        <CallIcon />
                      </IconButton>
                      <Typography sx={{ color: "#414141", fontWeight: "400" }}>
                        +993 00 000000
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <IconButton
                        sx={{
                          background: "#fff",
                          width: "30px",
                          height: "30px",
                          color: "#414141",
                          "&:hover": { background: "#fff" },
                        }}
                      >
                        <MailOutlineOutlinedIcon />
                      </IconButton>
                      <Typography sx={{ color: "#414141", fontWeight: "400" }}>
                        saparow@gmail.com
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    alignItems="center"
                    height={"60vh"}
                    justifyContent="flex-end"
                  >
                    <img
                      src="images/Group (1).png"
                      style={{ width: "80%" }}
                      alt="Group (1)"
                    />
                  </Stack>
                </Box>
              </Grid>
              <Grid item lg={8} md={8} sm={8} xs={12} width="100%">
                <Stack
                  direction="row"
                  spacing={2}
                  width="100%"
                  alignItems="center"
                >
                  <IconButton sx={{ background: "#D9D9D9" }}>
                    <GridViewIcon />
                  </IconButton>
                  <Stack width="100%">
                    <Typography
                      sx={{
                        textTransform: "uppercase",
                        color: "#414141",
                        fontFamily: Fonts.REGULAR,
                        fontWeight: "700",
                        fontSiz: "20px",
                      }}
                    >
                      gosmaca
                    </Typography>
                    <img src="/images/Line 2.png" alt="Line 2" />
                  </Stack>
                </Stack>
                <Stack mt={2}>
                  <Typography
                    sx={{
                      fontWeight: "300",
                      fontFamily: Fonts.REGULAR,
                      fontSize: "14px",
                    }}
                  >
                    Ukyp başarnykly we ýokary bilimli. Hususy awtoulagy bar ,
                    komandirowkalar üçin taýyn.
                  </Typography>
                </Stack>
                <Stack mt={10}>
                  <Stack
                    direction="row"
                    spacing={2}
                    width="100%"
                    alignItems="center"
                  >
                    <IconButton sx={{ background: "#D9D9D9" }}>
                      <SchoolIcon />
                    </IconButton>
                    <Stack width="100%">
                      <Typography
                        sx={{
                          textTransform: "uppercase",
                          color: "#414141",
                          fontFamily: Fonts.REGULAR,
                          fontWeight: "700",
                          fontSiz: "20px",
                        }}
                      >
                        bilim
                      </Typography>
                      <img src="/images/Line 2.png" alt="Line 2" />
                    </Stack>
                  </Stack>
                  <Stack mt={2}>
                    <Typography
                      sx={{
                        color: "#414141",
                        fontFamily: Fonts.REGULAR,
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Ynsanperwer Uniwersiteti
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Halkara gatnaşyklar
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Aşgabat, Türkmenistan
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        Ýokary bilimli
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        2007-2012
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack mt={2}>
                    <Typography
                      sx={{
                        color: "#414141",
                        fontFamily: Fonts.REGULAR,
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Ynsanperwer Uniwersiteti
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Halkara gatnaşyklar
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Aşgabat, Türkmenistan
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        Ýokary bilimli
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        2007-2012
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack mt={3}>
                  <Stack
                    direction="row"
                    spacing={2}
                    width="100%"
                    alignItems="center"
                  >
                    <IconButton sx={{ background: "#D9D9D9" }}>
                      <BusinessCenterIcon />
                    </IconButton>
                    <Stack width="100%">
                      <Typography
                        sx={{
                          textTransform: "uppercase",
                          color: "#414141",
                          fontFamily: Fonts.REGULAR,
                          fontWeight: "700",
                          fontSiz: "20px",
                        }}
                      >
                        iş tejribe
                      </Typography>
                      <img src="/images/Line 2.png" alt="Line 2" />
                    </Stack>
                  </Stack>
                  <Stack mt={2}>
                    <Typography
                      sx={{
                        color: "#414141",
                        fontFamily: Fonts.REGULAR,
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Kassir
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Halk Market
                    </Typography>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        Aşgabat, Türkmenistan
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        2007-2012
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack mt={2}>
                    <Typography
                      sx={{
                        color: "#414141",
                        fontFamily: Fonts.REGULAR,
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Satyjy
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Şerbet Market
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        Aşgabat, Türkmenistan
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        2007-2012
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack mt={5}>
                  <Stack
                    direction="row"
                    spacing={2}
                    width="100%"
                    alignItems="center"
                  >
                    <IconButton sx={{ background: "#D9D9D9" }}>
                      <LanguageIcon />
                    </IconButton>
                    <Stack width="100%">
                      <Typography
                        sx={{
                          textTransform: "uppercase",
                          color: "#414141",
                          fontFamily: Fonts.REGULAR,
                          fontWeight: "700",
                          fontSiz: "20px",
                        }}
                      >
                        Daşary ýurt dilleri
                      </Typography>
                      <img src="/images/Line 2.png" alt="Line 2" />
                    </Stack>
                  </Stack>
                </Stack>
                <Grid mt={3} container alignItems="center">
                  <Grid item md={2}>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Fransuz dili
                    </Typography>
                  </Grid>
                  <Grid item md={5}>
                    <Stack direction="row" justifyContent="flex-start">
                      <Box sx={{ width: "100%" }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                        />
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item md={5}>
                    <Stack direction="row" justifyContent="flex-end">
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        Kanagatlanarly
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item md={2} mt={2}>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Ispan dili
                    </Typography>
                  </Grid>
                  <Grid item md={5} mt={2}>
                    <Stack direction="row" justifyContent="flex-start">
                      <Box sx={{ width: "100%" }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={70}
                        />
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item md={5} mt={2}>
                    <Stack direction="row" justifyContent="flex-end">
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        Oran gowy
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item md={2} mt={2}>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Inlis dili
                    </Typography>
                  </Grid>
                  <Grid item md={5} mt={2}>
                    <Stack direction="row" justifyContent="flex-start">
                      <Box sx={{ width: "100%" }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={50}
                        />
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item md={5} mt={2}>
                    <Stack direction="row" justifyContent="flex-end">
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        Kanagatlanarly
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item md={2} mt={2}>
                    <Typography
                      sx={{
                        fontWeight: "300",
                        fontFamily: Fonts.REGULAR,
                        fontSize: "14px",
                      }}
                    >
                      Rus dili
                    </Typography>
                  </Grid>
                  <Grid item md={5} mt={2}>
                    <Stack direction="row" justifyContent="flex-start">
                      <Box sx={{ width: "100%" }}>
                        <BorderLinearProgress
                          variant="determinate"
                          value={100}
                        />
                      </Box>
                    </Stack>
                  </Grid>
                  <Grid item md={5} mt={2}>
                    <Stack direction="row" justifyContent="flex-end">
                      <Typography
                        sx={{
                          fontWeight: "300",
                          fontFamily: Fonts.REGULAR,
                          fontSize: "14px",
                        }}
                      >
                        Ene dilim
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
                <Stack direction="row" mt={5} justifyContent="flex-end">
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      fontWeight: "600",
                      fontFamily: Fonts.REGULAR,
                      color: "#414141",
                      border: "1px solid #414141",
                      borderRadius: "90px",
                    }}
                  >
                    Ýüklemek
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Resume;
