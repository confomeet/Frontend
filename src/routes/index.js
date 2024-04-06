import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { jssPreset, StylesProvider } from "@mui/styles";
import PhraseLoader from "components/Alerts/PhraseLoader";
import { create } from "jss";
import rtl from "jss-rtl";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import actions from "redux/actions";
import { connectSignalR } from "redux/signalR";
import { Box } from "../components/muiComponents";
import Spinner from "../components/shared/Spinner";
import AppVersion from "../pages/appVersion/index";
import Meet from "../pages/meet/Meet";
import ActiveAccount from "../pages/user/ActiveAccount";
import ForgetPassword from "../pages/user/ForgetPassword";
import JoinCall from "../pages/user/JoinCall";
import JoinCallWithToken from "../pages/user/JoinCallWithToken";
import ResetPassword from "../pages/user/ResetPassword";
import { coloredTheme, darkTheme } from "../styles/globalTheme/theme";
import WelcomePage from "./welcomePage";
import Panel from "./panel/Panel";
import Login from "pages/user/Login";
import { disconnect } from "redux/signalR/Connection";
const { getCountries, setHeaderPageTitle } = actions;

const RestrictedRoute = ({ authUser, Component }) =>
  authUser ? <Component /> : <Navigate to="/login" />;

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  window.navigateTo = navigate;
  window.currentLocation = location;
  window.navigateToDefault = () => window.navigateTo("/panel");
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const {
    settingsReducer: { settings },
    loading,
  } = useSelector((state) => state);
  const { isDark, authUser } = settings;

  const theme = isDark ? darkTheme(settings) : coloredTheme(settings);
  const materialTheme = createTheme(theme);

  const getCurrentPageTitle = (pathname) => {
    let pageTitle = ["PAGES"];
    const defaultTitle = "PAGES.DEFAULT";
    if (!pathname) return defaultTitle;
    const paths = pathname
      .toUpperCase()
      .trim()
      .split("/")
      .filter((p) => {
        const re = /^-?\d+$/;
        p = p.trim();
        const hasNumbers = re.test(p);
        return p && !hasNumbers;
      });
    paths.map((p) => pageTitle.push(p));
    return pageTitle.join(".");
  };

  useEffect(() => {
    window.dispatch(getCountries());
  }, []);

  useEffect(() => {
    if (authUser)
      (async () => await connectSignalR(authUser))();
    else
      (async () => await disconnect())();
  }, [authUser]);

  useEffect(() => {
    const pageTitle = getCurrentPageTitle(location.pathname);
    window.dispatch(setHeaderPageTitle({ pageTitle }));
  }, [location]);
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Box
          sx={{ height: "100vh", width: "100vw" }}
        >
          {loading.spinnerToggle ? <Spinner /> : null}
          <PhraseLoader />
          <Routes>
            <Route
              path="/panel/*"
              element={
                <RestrictedRoute
                  authUser={authUser}
                  Component={Panel}
                />
              }
            ></Route>
            <Route path={`/`} element={<WelcomePage />} />
            <Route path={`/login`} element={<Login />} />
            <Route path={`/join`} element={<JoinCall />} />
            <Route
              path={`/join/:id/:uuid`}
              element={<JoinCallWithToken />}
            />
            <Route
              path={`/ActiveAccount`}
              element={<ActiveAccount />}
            />
            <Route
              path={`/ResetPassword`}
              element={<ResetPassword />}
            />
            <Route
              path={`/ForgetPassword`}
              element={<ForgetPassword />}
            />
            <Route path={`/AppVersion`} element={<AppVersion />} />
            <Route path={`/Lilac`} element={<Meet />} />
          </Routes>
          </Box>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Index;
