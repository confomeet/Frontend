import { makeStyles } from "@mui/styles";

const style = makeStyles((theme) => ({
  horizontalCard: {
    borderRadius: 10,
    marginBottom: 16,

    width: "100%",
    cursor: "pointer",
    [theme.breakpoints.up("600")]: {
      border: `1px solid ${theme.globals.colors.borderGrey}`,
    },
    "& .MuiCardHeader-root ": {
      padding: "8px 10px 10px",

      flexDirection: "row-reverse",
    },
    "& .MuiCardHeader-content": {
      width: "100%",
    },
    "& .MuiCardHeader-title": {
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
      lineHeight: "21px!important",
      textAlign: "start",
      width: "100%!important",
    },
    "& .MuiTypography-caption ": {
      whiteSpace: "nowrap",
    },
    "& .MuiCardHeader-subheader": {
      "& .MuiTypography-body2 ": {
        color: theme.globals.colors.textDark,
        fontSize: `${theme.globals.fontSize.xs}px!important`,
        textAlign: "start",
      },
    },
    "& .MuiCardHeader-action": {
      marginTop: 6,
      marginRight: 20,
    },
    "& .badge": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: theme.globals.colors.primary,
      display: "block",
    },
    "& .calendarIcon": {
      backgroundColor: "#f5f6fa",
      width: "25px",
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      margin: "0 5px 0 0px",
      borderRadius: "3px",
    },
    "& .calendarNum": {
      color: "#000",
      width: "39px",
      margin: "0 5px 0 0px",
      display: "flex",
      alignItems: "center",
      fontWeight: "bold",
      borderRadius: "10px",
      justifyContent: "center",
      backgroundColor: "#f5f6fa",
      height: "37px",
    },
    "& .tringle": {
      display: "none",
    },
    "& .date": {
      marginTop: 8,
    },
  },
}));
export default style;
