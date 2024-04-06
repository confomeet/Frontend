import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  tagBox: {
    minWidth: 180,
    minHeight: 60,
    display: "flex",
    alignItems: "center",

    margin: "4px",
    padding: "0 8px",
    borderBottom: "0.5px dashed #DCDCDC",
    "&:hover": {
      background: theme.globals.colors.secondary,
      borderBottomColor: `${theme.globals.colors.secondary}!important`,
      borderRadius: "2px",
    },
    "& svg": {
      fontSize: theme.globals.fontSize.xs * 2,
      margin: "0 4px",
      cursor: "pointer",
    },
    "& .delete": {
      fontSize: `${theme.globals.fontSize.m}px!important`,
      color: theme.globals.colors.textGrey,
      margin: 0,
      color: "#F67676",
      border: "1px solid #F67676",
      borderRadius: "2px",
    },
    "& p": {
      flex: "auto",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("sm")]: {
        padding: "4px 0px",
        width: "240px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: `${theme.globals.fontSize.xs}px!important`,
      },
      "& +svg": {
        color: "#FC2E53 !important",
      },
    },
    "& .MuiDivider-root": {
      margin: "18px 8px",
    },
    "& .emailText": {
      color: "#A8A8A8",
      fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
    },
    "& .mainText": {
      color: "#2D313E",
      fontSize: `${theme.globals.fontSize.s}px!important`,
    },
    "& button": {
      width: "66px!important",
      height: "31px!important",
      margin: "3px",
      background: "#bf9e66",
      boxShadow: "none",
      minHeight: "31px!important",
    },
  },
  tagBox2: {
    minWidth: 180,
    maxWidth: "fit-content",
    height: 35,
    display: "flex",
    alignItems: "center",
    borderRadius: "50px",
    margin: "4px",
    "& svg": {
      fontSize: theme.globals.fontSize.xs * 2,
      margin: "0 4px",
      cursor: "pointer",
    },
    "& .delete": {
      fontSize: `${theme.globals.fontSize.s * 2 - 6}px!important`,
      color: theme.globals.colors.textGrey,
      margin: 0,
    },
    "& p": {
      padding: "4px 9px",
      flex: "auto",
      "& +svg": {
        color: "#FC2E53 !important",
      },
    },
    "& .PartyName": {
      fontSize: theme.globals.fontSize.xs + 1,
      color: "#1F2945",
    },
    "& .sectionParty": {
      display: "flex",
      flexDirection: "row",
      margin: "0 0 10px 0",
      "& svg": {
        backgroundColor: "#DEE3F1",
        padding: "6px",
        width: "35px",
        height: "35px",
        margin: "0 10px 0 0",
        borderRadius: "5px",
        color: "#99a6b2",
      },
    },
    "& button": {
      width: "66px!important",
      height: "31px!important",
      margin: "3px",
      background: "#bf9e66",
      boxShadow: "none",
      minHeight: "31px!important",
    },
  },
  tag: {
    padding: "8px",
    width: "353px",
    background: "white",
    height: "fit-content",
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    border: "1px solid #bf9e6661 !important",
    margin: "16px 8px",
    "& p": {
      padding: "4px 15px",
      "& > div > div ": {
        fontSize: theme.globals.fontSize.xs + 2,
      },
    },
  },
}));
export default useStyles;
