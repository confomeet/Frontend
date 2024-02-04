import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { jssPreset, StylesProvider } from "@mui/styles";
import Header from "common/Header";
import MiniSideMenu from "common/MiniSideMenu";
import SubHeader from "common/SubHeader";
import PhraseLoader from "components/Alerts/PhraseLoader";
import { create } from "jss";
import rtl from "jss-rtl";
import { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import actions from "redux/actions";
import { connectSignalR } from "redux/signalR";
import { getModifiedCountries } from "utils";
import { Box, Container, Paper } from "../components/muiComponents";
import Spinner from "../components/shared/Spinner";
import AppVersion from "../pages/appVersion/index";
import Meet from "../pages/meet/Meet";
import ActiveAccount from "../pages/user/ActiveAccount";
import ForgetPassword from "../pages/user/ForgetPassword";
import JoinCall from "../pages/user/JoinCall";
import JoinCallWithToken from "../pages/user/JoinCallWithToken";
import Login from "../pages/user/Login";
import ResetPassword from "../pages/user/ResetPassword";
import { coloredTheme, darkTheme } from "../styles/globalTheme/theme";
import ConnectPage from "./connectPage/ConnectPage";
import Panel from "./panel/Panel";
import OtpLogin from "pages/user/OtpLogin";
const { closeSideMenu, setHeaderPageTitle, getCountries, getCountriesDone } =
  actions;

const RestrictedRoute = ({ authUser, Component }) =>
  authUser ? <Component /> : <Navigate to="/login" />;

const testJoinPage = (path = "") =>
  /join\/[0-9]+\/[a-z A-Z 0-9 \-]+/.test(path.toLowerCase());

const Index = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  window.navigateTo = navigate;
  window.currentLocation = location;
  window.navigateToDefault = () => window.navigateTo("/panel");
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const {
    settingsReducer: { settings },
    loading,
    common,
  } = useSelector((state) => state);
  const { isRTL, isDark, authUser } = settings;

  const theme = isDark ? darkTheme(settings) : coloredTheme(settings);
  const materialTheme = createTheme(theme);
  const [isExternal, switchExternal] = useState(true);

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
    const data = getModifiedCountries(common.AllCountries, isRTL);
    window.dispatch(getCountriesDone({ data }));
  }, [isRTL]);

  useEffect(() => {
    (async () => await connectSignalR(authUser))();
  }, [authUser]);

  useEffect(() => {
    if (authUser) return;
    dispatch(closeSideMenu());
  }, [authUser]);

  useEffect(() => {
    const pageTitle = getCurrentPageTitle(location.pathname);
    window.dispatch(setHeaderPageTitle({ pageTitle }));
    switchExternal(testJoinPage(location.pathname));
  }, [location]);
  let widthStyle;
  var userAgent = navigator.userAgent;
  var isFirefox = userAgent.indexOf("Firefox") > -1;
  var isWebKit = userAgent.indexOf("AppleWebKit") > -1;
  var isOpera = userAgent.indexOf("OPR") > -1;
  if (authUser && window.innerWidth >= 700 && window.innerWidth <= 880) {
    widthStyle = { width: "calc(100% - 85px)" };
  } else {
    widthStyle = {
      width: authUser
        ? isFirefox
          ? "-moz-available"
          : isWebKit
          ? "-webkit-fill-available"
          : isOpera
          ? "-o-fill-available"
          : "-webkit-fill-available"
        : "100vw",
    };
  }
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />
        <Container sx={{ height: "100%" }} disableGutters maxWidth="false">
          <Paper
            className="main-content-wrap d-flex-column"
            elevation={0}
            dir={isRTL ? "rtl" : "ltr"}
            sx={{ height: "100%" }}
          >
            <Suspense
              fallback={<div className="loading" />}
              sx={{ height: "100%" }}
            >
              {loading.spinnerToggle ? <Spinner /> : null}
              <Box display="flex" sx={{ height: "100%" }}>
                <PhraseLoader />
                {authUser && !isExternal && <MiniSideMenu />}
                <Box style={widthStyle} className="blueBox">
                  {!isExternal && <Header />}
                  <Box
                    style={{
                      width: "-webkit-fill-available!important",
                      maxWidth: "-webkit-fill-available!important",
                      height: "100%",
                    }}
                  >
                    {!isExternal && <SubHeader />}
                    <Box
                      className="seperateBox"
                      style={{
                        flex: "auto",
                        display: "flex",
                        height: "100%",
                        // padding: authUser ? "0 20px" : "0!important",
                        maxWidth: authUser
                          ? "-webkit-fill-available!important"
                          : "false",
                      }}
                    >
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
                        <Route path={`/`} element={<ConnectPage />} />
                        <Route path={`/oldLogin`} element={<Login />} />
                        <Route path={`/login`} element={<OtpLogin />} />
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
                  </Box>
                </Box>
              </Box>
            </Suspense>
          </Paper>
        </Container>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Index;
