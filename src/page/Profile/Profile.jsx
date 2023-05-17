import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Fonts } from "../../common/fonts.mjs";

import ProfileContent from "../../component/Profile/ProfileContent.jsx";
import { Outlet, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  function changeRoute(path) {
    navigate(path);
  }
  return (
    <>
      <Box pt={6}>
        <img
          style={{ width: "100%" }}
          src="/images/Frame 3183495.png"
          alt="Frame 3183495.png"
        />
        <Stack mt={-6} ml={7} mb={3}>
          <img
            style={{ width: "90px" }}
            src="/images/Frame 3183604.png"
            alt="Frame 3183604.png"
          />
          <Typography
            sx={{ color: "rgba(0, 0, 0, 0.87)", fontFamily: Fonts.REGULAR }}
          >
            ALH377
          </Typography>
        </Stack>
        <Divider color={"rgba(32, 88, 212, 0.7"} />
        <br />
        <Grid container spacing={2}>
          <Grid item md={3} xs={12} sm={12}>
            <Stack spacing={2}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontFamily: Fonts.REGULAR,
                  color: "#FFFFFF",
                  background: "rgba(32, 88, 212, 0.7)",
                }}
              >
                Profil
              </Button>
              <Button
                variant="contained"
                onClick={() => changeRoute("anceta")}
                sx={{
                  textTransform: "none",
                  fontFamily: Fonts.REGULAR,
                  color: "#2058D4",
                  background: "rgba(32, 88, 212, 0.05)",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",

                  "&:hover": { background: "rgba(32, 88, 212, 0.05)" },
                }}
              >
                Anketam
              </Button>
              <Divider color={"rgba(32, 88, 212, 0.7)"} />
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontFamily: Fonts.REGULAR,
                  color: "#FFFFFF",
                  background: "rgba(0, 0, 0, 0.54)",

                  "&:hover": { background: "rgba(0, 0, 0, 0.54)" },
                }}
              >
                Ulgamdan cykmak
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  fontFamily: Fonts.REGULAR,
                  color: "#FFFFFF",
                  background: "rgba(211, 51, 51, 0.7)",

                  "&:hover": { background: "rgba(211, 51, 51, 0.7)" },
                }}
              >
                Pozmak
              </Button>
            </Stack>
          </Grid>

          <Grid item sm={12} md={9}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
