import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { Fonts } from "../../common/fonts.mjs";
import MaleIcon from "@mui/icons-material/Male";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Resume from "../../page/Profile/Resume.jsx";

const ProfileContent = () => {
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.87)",
            fontFamily: Fonts.REGULAR,
            fontWeight: "700",
            fontSize: { md: "28px", xs: "24px" },
          }}
        >
          Begenc Yazlyyev
        </Typography>
        <Stack direction="row" spacing={8} mt={2} mb={1}>
          <img
            style={{ width: "100px" }}
            src="/images/ef0f7e6e-5a0d-4a74-8607-2709d48614a2 1.png"
            alt="ef0f7e6e-5a0d-4a74-8607-2709d48614a2 1.png"
          />
          <Stack>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.87)",
                fontFamily: Fonts.REGULAR,
                fontSize: "22px",
              }}
            >
              Terjimeci
            </Typography>
            <Stack>
              <Stack direction="row" alignItems="center">
                <IconButton>
                  <MaleIcon sx={{ fontSize: "16px" }} />
                </IconButton>
                <Typography
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontFamily: Fonts.REGULAR,
                  }}
                >
                  Erkek
                </Typography>
              </Stack>
              <Stack alignItems="center" direction="row">
                <IconButton>
                  <LocationOnIcon sx={{ fontSize: "16px" }} />
                </IconButton>
                <Typography
                  sx={{
                    color: "rgba(0, 0, 0, 0.54)",
                    fontFamily: Fonts.REGULAR,
                  }}
                >
                  Asgabat
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <br />
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.54)",
            fontFamily: Fonts.REGULAR,
          }}
        >
          Ukyp basarnykly we is tejribeli
        </Typography>
      </Grid>

      <Grid item md={6} xs={12} sm={12}>
        <Grid container>
          <Grid item md={8} xs={12}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              mt={{ md: "17vh", xs: "5vh" }}
            >
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontFamily: Fonts.REGULAR,
                  color: "#FFFFFF",
                  background: "rgba(32, 88, 212, 0.7)",
                }}
              >
                Duzedis girizmek
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontFamily: Fonts.REGULAR,
                  color: "#FFFFFF",
                  background: "rgba(32, 88, 212, 0.7)",
                }}
              >
                Pozmak
              </Button>
            </Stack>
          </Grid>
          <Grid item md={4} xs={12}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              mt={{ md: 0, xs: 2 }}
            >
              <Typography sx={{ color: "#199F17", fontFamily: Fonts.REGULAR }}>
                Aktiw
              </Typography>
            </Stack>
            <Stack
              direction="row"
              mt={{ md: "22vh", xs: 0 }}
              mb={{ md: 0, xs: 3 }}
              justifyContent="flex-end"
            >
              <Resume />
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileContent;
