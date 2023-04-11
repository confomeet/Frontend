import { makeStyles } from "@mui/styles";

export const alertStyle = makeStyles((theme) => ({
  message: {
    "& .MuiDialog-paper": {
      minWidth: 420,
      borderRadius: 20,
      overflow: "visible",
    },
    "& button": {
      borderRadius: 12,
    },
    "& .MuiTypography-root": {
      direction: "ltr",
    },
    " &  .MuiDialogActions-root": {
      direction: "ltr",
    },
    "& .icon": {
      position: "absolute",
      fontSize: 75,
      right: 10,
      top: -18,
      opacity: "0.3!important",
      animationDelay: 500,
      "& svg": {
        animationDelay: 1000,
      },
    },
  },
  directCall: {
    "& .MuiDialog-paper": {
      overflow: "visible",
      borderRadius: "20px",
      width: "80vh",
    },
    "& button": {
      borderRadius: 12,
    },
    "& .MuiTypography-root": {
      direction: "ltr",
    },
    " &  .MuiDialogActions-root": {
      direction: "ltr",
    },
    "& .icon": {
      position: "absolute",
      fontSize: 75,
      right: 10,
      top: -18,
      opacity: "0.3!important",
      animationDelay: 500,
      "& svg": {
        animationDelay: 1000,
      },
    },
    "& .contentBox": {
      backgroundColor: "#F2F5FC",
      borderRadius: "13px",
      minWidth: "100%",
      minHeight: "565px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .MuiDialogActions-root": {
      padding: "18px 29px",
      display: "flex",
      justifyContent: "center !important",
      alignItems: "center",
    },
    "& .actionsBox": {
      backgroundColor: "#F2F5FC",
    },
    "& .avatar": {
      width: "100px",
      height: "100px",
      fontSize: "50px",
      backgroundColor: "#19BE96",
      "&:hover": {
        backgroundColor: "#fff",
        border: "1px solid #19BE96",
      },
    },
    "& .declineButton": {
      height: "47px",
      fontSize: "xx-large",
      backgroundColor: "#FC2E53",
      marginBottom: "12px",
      "&:hover": {
        backgroundColor: "#fff",
        border: "1px solid #FC2E53",
        "& svg": {
          color: "#FC2E53",
        },
      },
    },
    "& .answerButton": {
      height: "47px",
      fontSize: "xx-large",
      backgroundColor: "#19BE96",
      marginBottom: "12px",
      "&:hover": {
        backgroundColor: "#fff",
        border: "1px solid #19BE96",
        "& svg": {
          color: "#19BE96",
        },
      },
    },
    "& .busyButton": {
      height: "47px",
      fontSize: "xx-large",
      backgroundColor: "#808080",
      marginBottom: "12px",
      "&:hover": {
        backgroundColor: "#fff",
        border: "1px solid #808080",
        "& svg": {
          color: "#808080",
        },
      },
    },
    "& .btnBox": {
      gap: "25px",
      display: "flex",
    },
    "& .callerName": {
      position: "absolute",
      top: "17px",
      fontSize: "x-large",
      color: "#808080",
    },
  },
  contentCenter: {
    height: "63vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
    position: "relative",
  },
  pulse: {
    height: "100px",
    width: "100px",
    backgroundColor: "orange",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      border: `20px solid #19BE96`,

      width: "calc(100% + 22px)",
      height: "calc(100% + 22px)",
      borderRadius: "50%",
      animation: "$pulse 2s linear infinite",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      border: "20px solid rgba(25, 190, 150, 0.2)",
      width: "calc(100% + 68px)",
      height: "calc(100% + 68px)",
      borderRadius: "50%",
      animation: "$pulse 2s linear infinite",
      animationDelay: "0.3s",
    },
  },
  rejected: {
    height: "100px",
    width: "100px",
    backgroundColor: "#808080",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    color: "#1F2945",
    fontSize: "xxx-large",
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.5)",
      opacity: "0",
    },

    "50%": {
      transform: "scale(1)",
      opacity: "1",
    },

    "100%": {
      transform: "scale(1.3)",
      opacity: "0",
    },
  },
}));
