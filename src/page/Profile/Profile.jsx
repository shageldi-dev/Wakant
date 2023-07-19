import ProfileContent from "../../component/Profile/ProfileContent.jsx";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Fonts } from "../../common/fonts.mjs";

import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { AxiosInstance } from "../../api/AxiosInstance.mjs";
import Loading from "../../component/State/Loading/Loading.jsx";

const Profile = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState();
  const [loading, setLoding] = useState(true);
  function changeRoute(path) {
    navigate(path);
  }

  function getData() {
    AxiosInstance.get("users/my-accaunt/")
      .then((respone) => {
        setdata(respone.data);
        setLoding(false);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Box pt={6}>
          <img
            style={{ width: "100%" }}
            src="/images/Frame 3183495.png"
            alt="Frame 3183495.png"
          />
          <Stack
            mt={-6}
            ml={{ md: 7, xs: 3 }}
            mb={3}
          >
            <Box sx={{ width: { md: "90px", sm: "60px", xs: "60px" } }}>
              <img
                style={{ width: "100%" }}
                src="/images/Frame 3183604.png"
                alt="Frame 3183604.png"
              />
            </Box>

            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.87)",
                fontFamily: Fonts.REGULAR,
                fontSize: { md: "16px", xs: "12px" },
              }}
            >
              {data.username}
            </Typography>
          </Stack>
          <Divider color={"rgba(32, 88, 212, 0.7"} />
          <br />
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={3}
            >
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  onClick={() => changeRoute("/profile")}
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

            <Grid
              item
              sm={12}
              md={9}
            >
              <Outlet />
            </Grid>
          </Grid>

          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      )}
    </>
  );
};

export default Profile;
