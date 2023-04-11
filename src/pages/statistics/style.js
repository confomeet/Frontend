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
    "& .selectDropdownFeild": {
      "& > div": {
        width: "100%",
        border: "1px solid #c4c4c4",
        borderRadius: "10px",
        height: "42px",
        marginBottom: "10px",
        marginTop: "10px",
      },
      "& .MuiFormControl-root": {
        "& > div": {
          minHeight: "inherit!important",
        },
      },
    },
    "& .eventTypo": {
      whiteSpace: "nowrap",
      margin: "-5px 10px 00px 20px",
      alignSelf: "center",
    },
    "& .subtitle ": {
      minHeight: "62px",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      marginInlineEnd: "10px",
      color: `${theme.globals.colors.primary}!important`,
      borderBottom: "none",
      whiteSpace: "nowrap",
      "& p": {
        margin: "0 10px",
        color: "#425B73",
        fontSize: "17px",
        fontWeight: "bold",
      },
    },
    "& .eventsByApp": {
      border: "1px solid rgba(224, 224, 224, 1)",
      marginInlineEnd: "25px",
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

  statisticsBox: {
    [theme.breakpoints.down("960")]: {
      flexDirection: "column",
    },
  },
  statisDateRange: {
    display: "flex",
    padding: "0 10px",
    margin: "0 10px",
    borderBottom: "1px solid #D9D9D9",
    backgroundColor: "#fff",
    height: "44px",
    width: "300px",
    marginTop: "10px",
    marginInlineEnd: "25px",
    [theme.breakpoints.down("600")]: {
      marginTop: "16px",
      marginBottom: "16px",
    },
    "& svg": {
      color: "#19BE96",
    },
  },
  statisticsTypo: {
    color: "#425B73",
    fontSize: "26px!important",
    fontWeight: "600!important",
  },
}));
