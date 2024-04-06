import { makeStyles } from "@mui/styles";

export const Styles = makeStyles((theme) => ({
  statistics: {
    paddingBottom: "100px",
    margin: "0 20px",
    [theme.breakpoints.down("600")]: {
      margin: "0px",
    },
    "& .MuiDivider-root": {
      margin: "40px 0 40px",
      borderStyle: "dashed",
    },
    "& svg": {
      fontSize: theme.globals.fontSize.m,
    },
    "& .subtitle ": {
      minHeight: "62px",
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      marginInlineEnd: "10px",
      color: "#425B73",
      borderBottom: "none",
      whiteSpace: "nowrap",
      fontSize: "17px",
      fontWeight: "bold",
    },
    "& .eventsByApp": {
      border: "1px solid rgba(224, 224, 224, 1)",
      borderRadius: "15px",
      marginBottom: "25px",
      paddingBottom: "8px",
      [theme.breakpoints.down("960")]: {
        marginInlineEnd: "0px",
      },
      "& > div": {
        border: "none!important",
        margin: "0!important",
        "& .MuiTableCell-footer": {
          borderRadius: "15px",
          borderBottom: "none",
        },
        "& .MuiTableHead-root": {
          "& .MuiTableCell-root": {
            backgroundColor: "#DDE2EC",
            justifyContent: "center",
            padding: "10px 16px",
            "& > span": {
              color: "#425B73",
              justifyContent: "center",
            },
          },
        },
        "& .MuiTableBody-root": {
          "& .MuiTableCell-root": {
            textAlign: "center!important",
          },
        },
      },
    },
  },
}));
