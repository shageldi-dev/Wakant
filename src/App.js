import "./App.css";
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { colors } from "./common/theme.mjs";
import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { phoneSizes } from "./common/size.mjs";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./page/Index/Index";
import Home from "./page/Home/Home";
import { useTranslation } from "react-i18next";
import { Fonts } from "./common/fonts.mjs";
import Jobs from "./page/Jobs/Jobs";
import Workers from "./page/Jobs/Workers";
import AddJob from "./page/Jobs/AddJob";
import ViewJob from "./page/Jobs/ViewJob";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Category from "./page/Category/Category";
import { AxiosInstance } from "./api/AxiosInstance.mjs";
import Profile from "./page/Profile/Profile";
import ProfileContent from "./component/Profile/ProfileContent";
import ProfileStepper from "./page/Profile/ProfileStepper";
import Events from "./component/Events/Events";

const lightTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: Fonts.REGULAR,
        color: "custom.textColor",
      },
    },
    MuiButton: {
      defaultProps: {
        color: "button",
        fontFamily: Fonts.REGULAR,
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: colors.PRIMARY,
      light: colors.PRIMARY_LIGHT,
      lighter: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
      darker: colors.PRIMARY_DARK,
    },
    button: {
      main: "rgba(32, 88, 212, 0.7)",
      light: colors.PRIMARY_LIGHT,
      lighter: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY,
      darker: colors.PRIMARY,
    },
    card: {
      main: "rgba(32, 88, 212, 0.05)",
      light: "#FFFFFF",
      lighter: "#FFFFFF",
      dark: "#000000",
      darker: "#000000",
    },
    secondary: {
      main: colors.PRIMARY,
      light: colors.PRIMARY_LIGHT,
      lighter: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
      darker: colors.PRIMARY_DARK,
    },
    info: {
      main: colors.PRIMARY,
      light: colors.PRIMARY_LIGHT,
      lighter: colors.PRIMARY_LIGHT,
      dark: colors.PRIMARY_DARK,
      darker: colors.PRIMARY_DARK,
    },
    success: {
      main: "#54D62C",
      light: "#AAF27F",
      lighter: "#E9FCD4",
      dark: "#229A16",
      darker: "#08660D",
    },
    warning: {
      main: "#FB8200",
      light: "#ffb343",
      lighter: "#ffb343",
      dark: "#c15300",
      darker: "#c15300",
    },
    error: {
      main: "#FF4842",
      light: "#FFA48D",
      lighter: "#FFE7D9",
      dark: "#B72136",
      darker: "#7A0C2E",
    },
    grey: {
      100: "#F9FAFB",
      200: "#F4F6F8",
      300: "#DFE3E8",
      400: "#C4CDD5",
      500: "#919EAB",
      600: "#637381",
      700: "#454F5B",
      800: "#212B36",
      900: "#161C24",
    },
    custom: {
      light: "#FFFFFF",
      main: "#FFFFFF",
      dark: "#000000",
      textColor: "rgba(0, 0, 0, 0.87)",
      notActive: "rgba(0, 0, 0, 0.54)",
      notActiveBlue: "rgba(32, 88, 212, 0.05)",
      alwaysWhite: "#FFFFFF",
      alwaysBlack: "#000000",
      strokeColor: "rgba(0, 0, 0, 0.23)",
    },
    typography: {
      fontFamily: "AppBold",
    },
  },
});

export const AppContext = createContext();

export function useWidth() {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || "xs"
  );
}

function App() {
  // console.log = () => {};
  console.error = () => {};
  console.warning = () => {};
  console.warn = () => {};
  console.info = () => {};
  const wwidth = useWidth();
  const checker = (w) => {
    return phoneSizes.includes(w);
  };
  const [isMobile, setIsMobile] = useState(checker(wwidth));
  const [appLanguage, setLanguage] = useState("tm");
  const [params, setParams] = useState();

  function getParams() {
    AxiosInstance.get(`/public/get-params`)
      .then((response) => {
        setParams(response.data);
      })
      .catch((err) => {});
  }

  useEffect(() => {
    getParams();
  }, []);

  function getNameById() {}

  useEffect(() => {
    // try {
    setIsMobile(checker(wwidth));
    // } catch (err) {
    // }
  }, [wwidth]);

  const { t, i18n } = useTranslation();

  const [isLogin, setIsLogin] = useState(
    window.localStorage.getItem("token") !== null
  );

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const count = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const { addCounter, minusCounter } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <AppContext.Provider
      value={{
        isMobile: isMobile,
        t: t,
        changeLanguage: changeLanguage,
        appLanguage: appLanguage,
        isLogin: isLogin,
        setIsLogin: setIsLogin,
      }}
    >
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Box
          sx={{
            fontFamily: "AppBold",
          }}
        >
          <ToastContainer />
          <BrowserRouter>
            <Routes>
              <Route path={"/"} element={<Index />}>
                <Route index element={<Home />} />
                <Route path={"/jobs"} element={<Jobs />} />
                <Route path={"/workers"} element={<Jobs />} />
                <Route path={"/add-job"} element={<AddJob />} />
                <Route path={"/view-job/:uuid"} element={<ViewJob />} />
                <Route path={"/category"} element={<Category />} />
                <Route path={"/events"} element={<Events />} />
                <Route path={"/profile"} element={<Profile />}>
                  <Route index element={<ProfileContent />} />
                  <Route path="anceta" element={<ProfileStepper />} />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
