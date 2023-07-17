import "../../style/Navbar/navbar.css";
import Divider from "@mui/material/Divider";
import Image from "mui-image";
import ImageLoading from "../State/Loading/ImageLoading";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "../Icon/MenuIcon";
import MobileDrawer from "./MobileDrawer";
import React, { useContext, useEffect, useState } from "react";
import SignIn from "../User/SignIn";
import Text from "../App/Text";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import { Fonts } from "../../common/fonts.mjs";
import { colors, regularButton } from "../../common/theme.mjs";

import {
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  Drawer,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const activeNavStyle = {
  fontFamily: Fonts.BOLD,
  fontSize: "16px",
  textDecoration: "underline",
  textUnderlineOffset: "27px",
  cursor: "pointer",
  textDecorationThickness: "2px",
};

export const passiveNavStyle = {
  fontFamily: Fonts.REGULAR,
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    color: colors.PRIMARY,
  },
};

export const navs = [
  {
    id: 0,
    link: "/",
    title: "home_page",
  },
  {
    id: 2,
    link: "/jobs",
    title: "find_jobs",
  },
  {
    id: 3,
    link: "/category",
    title: "categories",
  },
];

const Navbar = (props) => {
  const { t, changeLanguage, isLogin } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [signInState, setSignInState] = React.useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const { isMobile } = useContext(AppContext);

  const matches = useMediaQuery("(min-width:1100px)");

  const location = useLocation();

  useEffect(() => {}, [location]);

  function getStyle(link) {
    return link === location.pathname ? activeNavStyle : passiveNavStyle;
  }

  const navigate = useNavigate();

  function changeRouter(path) {
    navigate(path);
  }

  function changeLang(lng) {
    changeLanguage(lng);
    handleClose();
  }

  function showSignIn() {
    setSignInState(true);
    handleClose2();
  }

  function More() {
    return <div></div>;
  }

  return (
    <Paper
      elevation={4}
      sx={{ position: "fixed", top: 0, width: "100%", zIndex: 5 }}
    >
      <Container sx={{ paddingTop: "16px" }}>
        {isMobile ? (
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ width: "100%", paddingBottom: "12px", paddingTop: "12px" }}
            justifyContent={"space-between"}
            spacing={4}
          >
            <Image
              src="/images/logo.svg"
              style={{ width: matches ? "137px" : "100px" }}
              wrapperStyle={{
                width: "auto",
                height: "auto",
                marginBottom: "10px",
              }}
              showLoading={
                <ImageLoading
                  sx={{ height: "50px", width: matches ? "137px" : "100px" }}
                />
              }
            />

            <Stack
              direction={"row"}
              alignItems={"center"}
              spacing={2}
              justifyContent={"flex-end"}
            >
              <Button
                onClick={() => {
                  if (isLogin) {
                    changeRouter("/profile");
                  } else {
                    showSignIn();
                  }
                }}
                variant={"contained"}
                color={"button"}
                sx={{
                  color: "custom.alwaysWhite",
                  fontSize: matches ? "16px" : "12px",
                  padding: "6px 20px",
                  fontFamily: Fonts.REGULAR,
                  textTransform: "none",
                  height: "40px",
                  width: "auto",
                }}
              >
                {isLogin ? t("anceta") : t("sign_in")}
              </Button>

              <MobileDrawer more={<More />} click={showSignIn} />
            </Stack>
          </Stack>
        ) : (
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ width: "100%" }}
            spacing={4}
          >
            <Image
              src="/images/logo.svg"
              style={{ width: matches ? "137px" : "100px" }}
              wrapperStyle={{
                width: "auto",
                height: "auto",
                marginBottom: "10px",
              }}
              showLoading={
                <ImageLoading
                  sx={{ height: "50px", width: matches ? "137px" : "100px" }}
                />
              }
            />

            <div style={{ whiteSpace: "nowrap", width: "100%" }}>
              <Stack
                direction={"row"}
                spacing={4}
                sx={{
                  lineClamp: 1,
                  WebkitLineClamp: 1,
                  my: 1,
                  width: "100%",
                }}
                alignItems={"flex-end"}
                justifyContent={"space-evenly"}
              >
                {navs.map((item, i) => {
                  return (
                    <Text
                      key={`nav-item-${i}`}
                      onClick={() => changeRouter(item.link)}
                      value={t(item.title)}
                      color={item.link === location.pathname ? "primary" : ""}
                      sx={{
                        ...getStyle(item.link),
                        fontSize: matches ? "16px" : "12px",
                        textUnderlineOffset: matches ? "27px" : "20px",
                      }}
                      className={`nav-item`}
                    />
                  );
                })}
              </Stack>
            </div>

            <Divider
              orientation={"vertical"}
              color={colors.PRIMARY}
              flexItem
              style={{ marginBottom: "12px", marginTop: "12px" }}
            />

            <Stack
              direction={"row"}
              spacing={6}
              sx={{ width: "auto" }}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {isLogin ? (
                <Text
                  onClick={() => changeRouter("/add-job")}
                  value={t("add_job")}
                  color={"/add-job" === location.pathname ? "primary" : ""}
                  sx={{
                    ...getStyle("/add-job"),
                    fontSize: matches ? "16px" : "12px",
                    textUnderlineOffset: matches ? "27px" : "20px",
                    width: "100%",
                  }}
                  className={`nav-item`}
                />
              ) : null}

              <Button
                onClick={() => {
                  if (isLogin) {
                    changeRouter("/profile");
                  } else {
                    showSignIn();
                  }
                }}
                variant={"contained"}
                color={"button"}
                sx={{
                  color: "custom.alwaysWhite",
                  fontSize: matches ? "16px" : "12px",
                  padding: "6px 30px",
                  fontFamily: Fonts.REGULAR,
                  textTransform: "none",
                  height: "40px",
                  width: "auto",
                }}
              >
                {isLogin ? t("anceta") : t("sign_in_2")}
              </Button>

              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{ ...regularButton, fontSize: matches ? "16px" : "12px" }}
                endIcon={<KeyboardArrowDownIcon />}
              >
                {/* {changeLang === "tm" ? t("ru") : t("tm")} */}
                {t('lng')}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                disableRipple={true}
                disableScrollLock={true}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  sx={{ ...regularButton }}
                  onClick={() => changeLang("tm")}
                >
                  {t("tm")}
                </MenuItem>
                <MenuItem
                  sx={{ ...regularButton }}
                  onClick={() => changeLang("ru")}
                >
                  {t("ru")}
                </MenuItem>
              </Menu>

              <IconButton
                id="basic-button2"
                aria-controls={open2 ? "basic-menu2" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClick2}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="basic-menu2"
                anchorEl={anchorEl2}
                open={open2}
                disableRipple={true}
                disableScrollLock={true}
                onClose={handleClose2}
                MenuListProps={{
                  "aria-labelledby": "basic-button2",
                }}
              >
                {isLogin ? null : (
                  <MenuItem onClick={showSignIn}>{t("sign_in")}</MenuItem>
                )}
                <MenuItem onClick={() => changeRouter("/events")}>
                  {t("events")}
                </MenuItem>
                <MenuItem onClick={handleClose2}>{t("favs")}</MenuItem>
                <MenuItem onClick={handleClose2}>
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "red",
                      fontFamily: Fonts.REGULAR,
                    }}
                    startIcon={<LogoutIcon />}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </Menu>
            </Stack>
          </Stack>
        )}
      </Container>

      <SignIn open={signInState} onClose={() => setSignInState(false)} />
    </Paper>
  );
};

export default Navbar;
