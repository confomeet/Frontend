import mask from "assets/images/mask.png";
import { HomeIcon, Login, Logout, Notificatios } from "components/icons";
import LanguageSwitch from "components/languageSwitch";
import ListComponent from "components/list/List";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "components/muiComponents";
import AppBar from "components/muiComponents/CustomAppBar";
import { useOutsideClick } from "hooks";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import style from "./style";
import ToolTip from "../components/toolTip/ToolTip";

const { getNotifications, clearAuthUser } = actions;

const Header = () => {
  const classes = style();
  const notificationRef = useRef();
  const {
    settingsReducer: {
      settings: {
        authUser,
        isRTL,
        sideMenuToggle,
        drawerWidth,
        pageTitle,
        appRowsPerPage,
      },
    },

    notifications,
  } = useSelector((state) => state);
  const [notificationsToggle, switchNotificationToggle] = useState(false);
  const [myNtifications, setMyNotifications] = useState([]);

  useOutsideClick(notificationRef, () => switchNotificationToggle(false));

  const handleGetNotificatios = async () => {
    window.dispatch(
      getNotifications({
        body: {
          text: null,
          name: null,
          email: null,
          pageSize: appRowsPerPage,
          pageIndex: 1,
        },
        isAdmin: authUser?.rolesId?.includes(1) ? true : false,
      })
    );
  };
  useEffect(() => {
    if (!notifications.getNotificationsComplete) return;
    if (!Array.isArray(notifications.getNotificationsComplete?.items)) return;
    setMyNotifications(notifications.getNotificationsComplete?.items);
  }, [notifications.getNotificationsComplete]);

  return (
    <AppBar
      className={
        authUser ? classes.rootMainAppBar : classes.rootMainAppBarWithoutAuth
      }
      open={sideMenuToggle}
      isRTL={isRTL}
      drawerWidth={drawerWidth}
      sx={{ boxShadow: "none" }}
    >
      <Container maxWidth="false">
        <Toolbar
          className={
            authUser && window.currentLocation.pathname !== "/"
              ? classes.videoHeader
              : classes.inheader
          }
        >
          <Box className={classes.userIconHeader}>
            {authUser && window.currentLocation.pathname !== "/" && (
              <Button
                variant="text"
                disableRipple
                onClick={() => window.navigateTo("/panel/personalProfile")}
              >
                <Avatar src={`${mask}`} className="avatar">
                  {authUser?.fullName?.charAt(0)}
                </Avatar>
                <div>
                  <Typography className={classes.userTypoHeader}>
                    {authUser?.fullName}
                  </Typography>
                  <Typography variant="caption" className="userName">
                    {authUser?.jobTitle || ""}
                  </Typography>
                </div>
              </Button>
            )}
          </Box>

          <Box
            className={
              authUser
                ? classes.headerMainIcons
                : classes.headerMainIconsWithoutAuth
            }
          >
            {!authUser && window.currentLocation.pathname !== "/" && (
              <ToolTip
                title={Object.translate("PAGES.DEFAULT")}
                placement="top"
              >
                <IconButton
                  className="home"
                  size="large"
                  onClick={() => {
                    window.navigateTo("/");
                    sessionStorage.removeItem("OTP_INFO");
                  }}
                >
                  <HomeIcon />
                </IconButton>
              </ToolTip>
            )}
            {authUser && window.currentLocation.pathname !== "/" && (
              <div ref={notificationRef}>
                <ToolTip
                  title={Object.translate("SIDE_BAR.NOTIFICATIONS")}
                  placement="top"
                >
                  <IconButton
                    size="large"
                    onClick={(e) => {
                      !notificationsToggle && handleGetNotificatios();
                      switchNotificationToggle(!notificationsToggle);
                    }}
                    className={classes.notificationIcon}
                  >
                    <Notificatios />
                  </IconButton>
                </ToolTip>
              </div>
            )}
            {authUser && window.currentLocation.pathname !== "/" && (
              <Divider orientation="vertical" flexItem variant="middle" />
            )}
            {authUser &&
              notificationsToggle &&
              window.currentLocation.pathname !== "/" && (
                <div ref={notificationRef}>
                  <ListComponent items={myNtifications} />
                </div>
              )}
            {window.currentLocation.pathname !== "/" &&
              (authUser ? (
                <ToolTip
                  title={Object.translate("HEADER.LOG_OUT")}
                  placement="top"
                >
                  <IconButton
                    size="large"
                    onClick={() => {
                      window.dispatch(clearAuthUser());
                    }}
                  >
                    <Logout />
                  </IconButton>
                </ToolTip>
              ) : (
                <ToolTip
                  title={Object.translate("HEADER.LOG_IN")}
                  placement="top"
                >
                  <IconButton
                    size="large"
                    className="login"
                    onClick={() => window.navigateTo("/login")}
                  >
                    <Login />
                  </IconButton>
                </ToolTip>
              ))}
            {/* {authUser && window.currentLocation.pathname !== "/" && (
              <Divider orientation="vertical" flexItem variant="middle" />
            )} */}
            {/* <ToolTip
              title={Object.translate("BUTTONS.SWITCH_LANG")}
              placement="top"
            >
              <LanguageSwitch />
            </ToolTip> */}
          </Box>
          <Box className="logo d-flex center-content">
            <img alt="logo" src={`${window.officialLogo}`} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
