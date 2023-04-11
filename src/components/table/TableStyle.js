import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  fullTableContainer: {
    position: "relative",
    width: "auto",
    backgroundColor: "#fff",

    borderRadius: 4,

    border: "1px solid #e0e0e0",
    borderBottom: "none!important",
    marginBottom: "50px",
    "& *": {
      fontFamily: theme.direction === "rtl" ? "Cairo" : "Poppins",
      whiteSpace: "nowrap",
    },
    "& .MuiTableBody-root": {
      textAlign: "center",
    },
    "& tr": {
      height: "50px",
      "& th": {
        backgroundColor: "#dde2ec",
      },
      "& td": {
        padding: "20px",
      },
    },
    "& .MuiPaginationItem-previousNext": {
      border: "0.703226px solid #E4E4E4",
      width: "35px",
      height: "35px",
      [theme.breakpoints.down("600")]: {
        width: "30px!important",
        height: "30px!important",
      },
      "& svg": {
        color: "#999999",
      },
    },
    "& .MuiTableRow-footer": {
      backgroundColor: "inherit!important",
    },
    "& .MuiGrid-grid-xs-12": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& .MuiFab-root": {
      margin: "5px",
      width: "30px",
      height: "30px",
      minWidth: "30px",
      minHeight: "30px",
      borderRadius: "50%",
      paddingRight: 0,
      margin: 0,
    },
    "& button": {
      boxShadow: "none",
      borderRadius: "50%",
      margin: "0 8px",
      fontSize: `${theme.globals.fontSize.s}px!important`,
      backgroundColor: "inherit!important",
    },
    "& .MuiButton-containedPrimary": {
      margin: "0 12px 0 0",
      minWidth: "40px",
      // borderColor: theme.globals.colors.primary,

      color: theme.globals.colors.primary,
      border: "1px solid #e2e2e2",
      borderRadius: "4px",
      backgroundColor: "#fff",
      "&:hover": {
        color: "#fff",
        backgroundColor: `${theme.palette.primary.main}!important`,
        boxShadow: "none!important",
      },
    },
    "& .MuiInput-underline": {
      // margin: "0 0 0 35px!important",
      [theme.breakpoints.up("600px")]: { margin: "0 0 0 35px!important" },
    },
    "& .MuiCheckbox-root": {
      color: " #cccccc!important",
    },
    "& .MuiFab-root ": {
      // borderRadius: "33%",
      color: "white!important",
      backgroundColor: theme.globals.colors.primary,
      zIndex: "1!important",

      [theme.breakpoints.up("600")]: {
        width: "58px!important",
        height: "40px",
        margin: "0",
        minWidth: "30px",
        minHeight: "30px",
        borderRadius: "4px!important",
        paddingRight: "0",
      },
    },
    "& .MuiTableCell-footer": {
      padding: "15px  8px !important",
      "& .MuiButtonBase-root": {
        width: "32px",
        "&:hover": {
          border: "1px solid",
          borderColor: theme.globals.colors.primary,
          backgroundColor: "#fff!important",
          color: theme.globals.colors.primary,

          "& svg": {
            color: theme.globals.colors.primary,
          },
        },
      },
    },
    "& .MuiPaginationItem-previousNext": {
      "& svg": {
        color: `${theme.palette.primary.main}!important`,
      },
    },
    "& .MuiPaginationItem-root.Mui-disabled": {
      opacity: "3!important",
    },
    "& .MuiPaginationItem-root": {
      minWidth: "0!important",
      padding: "0 3px!important",
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      width: "35px!important",
      height: "35px!important",
      backgroundColor: `${theme.palette.primary.main}!important`,
      [theme.breakpoints.down("600")]: {
        width: "30px!important",
        height: "30px!important",
      },
    },
    "& .MuiPaginationItem-sizeMedium": {
      minWidth: "0!important",
    },
    // "& svg": {
    //   backgroundColor: "#2c9ad4",
    //   height: "100%",
    //   width: "31px",

    //   borderRadius: "10px",
    //   color: "white",
    // },
    "& .MuiTable-root": {
      tableLayout: "auto",
    },
    "& .MuiToolbar-root": {
      border: `1px solid ${theme.globals.colors.borderGrey}`,
      borderRadius: 10,
    },
    "& .MuiTableCell-head ": {
      color: "#425B73",
      whiteSpace: "nowrap",
      textTransform: "capitalize",
      fontSize: theme.globals.fontSize.m - 3,
      paddingLeft: "0!important",
    },
    "& .MuiTableCell-root ": {
      position: "relative",
      textAlign: "center",
      "& span": {
        justifyContent: "center",
      },
    },
    "& .MuiPaper-root": {
      boxShadow: "none",
      borderRadius: "10px",
      zIndex: 100,
    },
    "& .tss-1cdcmys-MUIDataTable-responsiveBase": {
      position: "inherit!important",
    },
    add: {
      position: "absolute",
      left: 0,
      display: "flex",
    },

    "& .MUIDataTableHeadCell-contentWrapper": {
      "& .MUIDataTableHeadCell-toolButton": { fontFamily: "inherit" },
    },
    Add: {
      backgroundColor: `${theme.palette.primary.main}!important`,

      color: "#fff",
      width: "144px !important",
      boxShadow: "none !important",
      margin: theme.spacing(2, 2, 0),
      padding: "0 8px 0 16px",
      transition: "all 0.2s linear 0s",
      [theme.breakpoints.down("576px")]: { margin: theme.spacing(2, 0, 0) },
      "&:hover": {
        backgroundColor: "#fff !important",
        border: "1px solid",
        borderColor: `${theme.palette.primary.main}!important`,
        color: `${theme.palette.primary.main}!important`,
        "& .MuiSvgIcon-root": {
          color: `${theme.palette.primary.main}!important`,
        },
      },
      [theme.breakpoints.down("576px")]: { marginLeft: 6 },
      "& .MuiFab-label": {
        whiteSpace: "nowrap",
        textTransform: "lowercase !important",
        fontSize: `${theme.globals.fontSize.xs}px!important`,
      },
      "& .MuiSvgIcon-root": {
        "&:hover": {
          color: `${theme.palette.primary.main}!important`,
        },
      },
    },
  },
}));
export default useStyles;
