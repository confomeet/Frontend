import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar } from "./index";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => !["isRTL", "open", "drawerWidth"].includes(prop),
})(({ theme, open }) => {
  let styleObj = {
    backgroundColor: theme.palette.background.default,
    marginLeft: 0,
    marginRight: 0,
  };

  let connectPageStyle = {
    borderBottom: "none!important",
    backdropFilter: "unset!important",
    "& .language ": {
      width: 150,
      height: 50,
      borderRadius: 80,
      backgroundColor: "#fff2",
      marginInlineEnd: "40px",
    },

    "& .MuiContainer-root": {
      maxWidth: 1536,
    },
    "& .pageTitle": {
      display: "none!important",
    },
    "& .login ": {
      display: "none",
    },
    "& .home ": {
      display: "none",
    },

    "& .MuiToolbar-root": {
      justifyContent: "flex-end!important",
      padding: "0!important",

      "& button": {
        color: "#fff!important",
      },
      "& .logo ": {
        display: "none",
      },
    },
  };
  let outerPageStyle = {
    backdropFilter: "unset!important",
    borderBottom: "none!important",
    "& .logo ": {
      display: "none",
    },

    "& .MuiToolbar-root": {
      [theme.breakpoints.down(600)]: {
        padding: 0,
      },

      "& button": {
        color: "#fff!important",
      },
    },
  };

  if (window.currentLocation.pathname === "/") {
    styleObj = { ...styleObj, ...connectPageStyle };
  }

  if (
    [
      "/login",
      "/signup",
      "/join",
      "/forgetpassword",
      "/resetpassword",
    ].includes(window.currentLocation.pathname.toLowerCase())
  ) {
    styleObj = { ...styleObj, ...outerPageStyle };
  }

  return styleObj;
});

export default AppBar;
