import { makeStyles } from "@mui/styles";

export const pProfileStyles = makeStyles((theme) => ({
  personalProfileRoot: {
    margin: "0 20px !important",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    minHeight: "460px",
    height: "fit-content",
    "& .MuiInputAdornment-root": {
      margin: "0!important",
      "& svg": {
        color: "#c7c7c7",
      },
    },
    "& .MuiFormHelperText-root": {
      textAlign: "inherit",
    },

    [theme.breakpoints.down("485")]: {
      padding: "6px",
    },
    [theme.breakpoints.between("485", "768")]: {
      padding: "50px 20px",
    },
    [theme.breakpoints.down("600")]: {
      margin: "0 10px !important",
    },
  },
  avatarBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& svg": {
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      backgroundColor: "#F5F6FA!important",
      padding: "10px",
      marginBottom: "-16px",
      zIndex: "3",
    },
    "& .MuiIconButton-root": {
      padding: "0!important",
    },
    "& .MuiDivider-root": {
      borderStyle: "dashed",
      borderRightWidth: "unset",
      width: "1px",
      margin: "0 10px",
    },
  },
  headerButtonsGrid: {
    justifyContent: "end",
    gap: "4px",
    [theme.breakpoints.down("485")]: {
      justifyContent: "start",
    },
  },
  headerButtons: {
    borderRadius: "10px!important",
    margin: "0 10px!important",
    whiteSpace: "nowrap",
    "& svg": {
      color: "#fff!important",
    },
  },
  avatar: {
    borderRadius: "50% !important",
    width: "170px!important",
    height: "170px!important",
    fontSize: "75px!important",
    backgroundColor: "#DEE3EF!important",
  },
  fullNameTypo: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0 0!important",
    width: "174px!important",
    fontWeight: "bold!important",
  },
  avatarContainer: {
    rowGap: "8px",
    flexFlow: "row!important",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column!important",
    },
  },
  upLoad: {
    padding: "0!important",
  },
  infoBox: {
    display: "flex",
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    borderRadius: "6px",
    minHeight: "60px!important",
    height: "fit-content",
    width: "86%",
    marginTop: "15px",
    [theme.breakpoints.down("1344")]: {
      width: "90%",
      minWidth: "90%",
    },
    [theme.breakpoints.down("485")]: {
      width: "100%",
      minWidth: "100%",
      marginTop: "10px",
      flexWrap: "nowrap",
      maxWidth: "197px",
    },
    [theme.breakpoints.between("485", "768")]: {
      width: "100%",
      minWidth: "100%",
      marginTop: "10px",
      flexWrap: "nowrap",
    },
  },
  infoIcon: {
    fontSize: theme.globals.fontSize.s + 4,
    margin: "0 22px",
    color: "#A3A3A3!important",
    [theme.breakpoints.down("485")]: {
      display: "none",
    },
  },
  infoHolder: {
    display: "flex",
    justifyContent: "flex-start",
    margin: "0 8px !important",
    whiteSpace: "nowrap",
    color: "#A3A3A3",
    minWidth: "150px",
    fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
    [theme.breakpoints.down("485")]: {
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
      minWidth: "80px",
    },
  },
  inHolder: {
    [theme.breakpoints.down("485")]: {
      fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  },
  infoMainGrid: {
    gap: "0 20px",
    display: "flex",
    flexWrap: "wrap",
    maxHeight: "225px!important",
  },
}));
