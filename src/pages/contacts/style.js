import { makeStyles } from "@mui/styles";

export const contactsStyles = makeStyles((theme) => ({
  myContacts: {
    flexWrap: "wrap",
    position: "relative",
    paddingBottom: "150px",
    margin: "0 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },

    "& h6": {
      marginBottom: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      color: "#2D313E",
      fontWeight: "400",
      fontSize: `${theme.globals.fontSize.s}px!important`,
      width: "210px",
      fontWeight: "bold",
    },
    "& .contentSection": {
      marginTop: "0!important",
      justifyContent: "start",
      [theme.breakpoints.down("1024")]: {
        justifyContent: "center",
      },
    },
  },
  contactGroup: {
    display: "flex",

    [theme.breakpoints.down("600")]: {
      flexDirection: "column!important",
    },
    [theme.breakpoints.up("600")]: {
      alignItems: "center",
    },
  },
  UsersGroupsMainBox: {
    margin: "0 20px",
    [theme.breakpoints.down("600")]: {
      margin: "0",
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-20px",
    },
    "& > div": {
      "& > div": {
        "& > label": {
          transition: "all 0.3s ease-in-out",

          left: theme.direction === "rtl" ? "-0px" : "inherit !important",
          right:
            theme.direction === "rtl"
              ? "unset !important"
              : "inherit !important",
        },
        "& > .MuiInputLabel-shrink": {
          transition: "all 0.3s ease-in-out!important",

          left: theme.direction === "rtl" ? "-34px" : "inherit !important",
          right:
            theme.direction === "rtl"
              ? "unset !important"
              : "inherit !important",
        },
      },
    },
  },
  contactSearch: {
    marginInlineEnd: "8px",
    [theme.breakpoints.down("600")]: {
      marginTop: "12px!important",
    },
    "& .MuiFormControl-root": {
      width: "96%",
      borderBottom: "0.6px solid #A4A4A4",
    },
    "& > div": {
      "& > label": {
        fontSize: "14px!important",
        transition: "all 0.3s ease-in-out",
        color: "#797C85!important",
        transform: "translate(0, 20px) scale(1)!important",
        left:
          theme.direction === "rtl" ? "0px !important" : "inherit !important",
        right:
          theme.direction === "rtl" ? "0 !important" : "inherit !important",
        "& .MuiFormLabel-asterisk": {
          color: theme.globals.colors.delete,
        },
      },
    },
    "& .MuiInputLabel-shrink": {
      transition: "all 0.3s ease-in-out!important",
      color: `${theme.globals.colors.primary}!important`,
      fontSize: "12.5px!important",
      zIndex: 2,
      transform: "translate(0, 0px) scale(1)!important",
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
  },
  managerLabel: {
    "& .MuiFormControlLabel-root": {
      margin: "0!important",
    },
  },
  contactFld: {
    marginBottom: "8px!important",
    "& .MuiFormHelperText-root": {
      textAlign: "inherit",
      fontSize: "10px",
    },
    "& .MuiInput-root": {
      width: "100%!important",
      borderBottom: "1px solid",
      borderBottomColor: "#A4A4A4!important",
    },
    "& .MuiAutocomplete-endAdornment": {
      right: "0!important",
      left: "inherit",
    },
    "& .MuiFormControl-root": {
      width: "95%!important",
      marginTop: "11px!important",
    },
    "& > form": {
      "& > div": {
        "& > div": {
          "& > div": {
            marginTop: "14px!important",
            "& > label": {
              fontSize: "14px!important",
              transition: "all 0.3s ease-in-out",
              marginTop: "0!important",
              transform: "translate(0, 20px) scale(1)!important",
              bottom: "0",
              height: "fit-content",
              left:
                theme.direction === "rtl"
                  ? "0px !important"
                  : "inherit !important",
              right:
                theme.direction === "rtl"
                  ? "0 !important"
                  : "inherit !important",
            },
            "&:before": {
              borderBottom: "none!important",
              "&:focus-visible": {
                borderBottomColor: "none!important",
              },
              "&:hover": {
                borderBottomColor: "none!important",
              },
            },
            "&:after": {
              borderBottom: "none!important",
              "&:focus-visible": {
                borderBottomColor: "none!important",
              },
              "&:hover": {
                borderBottomColor: "none!important",
              },
            },
          },
        },
      },
    },
    "& > div": {
      "& > label": {
        fontSize: "14px!important",
        transition: "all 0.3s ease-in-out",

        transform: "translate(0, 20px) scale(1)!important",
        left:
          theme.direction === "rtl" ? "0px !important" : "inherit !important",
        right:
          theme.direction === "rtl" ? "0 !important" : "inherit !important",
        "& .MuiFormLabel-asterisk": {
          color: theme.globals.colors.delete,
        },
      },
    },
    "& .MuiInputLabel-shrink": {
      transition: "all 0.3s ease-in-out!important",
      color: `${theme.globals.colors.primary}!important`,
      fontSize: "12.5px!important",
      zIndex: 2,
      transform: "translate(0, 0px) scale(1)!important",
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
  },
  contactGroupFld: {
    marginBottom: "8px!important",
    "& .MuiFormHelperText-root": {
      textAlign: "inherit",
      fontSize: "10px",
    },
    "& .MuiInput-root": {
      width: "100%!important",
      borderBottom: "1px solid",
      borderBottomColor: "#A4A4A4!important",
    },
    "& .MuiAutocomplete-endAdornment": {
      right: "0!important",
      left: "inherit",
    },
    "& .MuiFormControl-root": {
      marginTop: "11px!important",
    },
    "& > form": {
      "& > div": {
        "& > div": {
          "& > div": {
            marginTop: "14px!important",
            "& > label": {
              fontSize: "14px!important",
              transition: "all 0.3s ease-in-out",
              marginTop: "0!important",
              transform: "translate(0, 20px) scale(1)!important",
              bottom: "0",
              height: "fit-content",
              left:
                theme.direction === "rtl"
                  ? "0px !important"
                  : "inherit !important",
              right:
                theme.direction === "rtl"
                  ? "0 !important"
                  : "inherit !important",
            },
            "&:before": {
              borderBottom: "none!important",
              "&:focus-visible": {
                borderBottomColor: "none!important",
              },
              "&:hover": {
                borderBottomColor: "none!important",
              },
            },
            "&:after": {
              borderBottom: "none!important",
              "&:focus-visible": {
                borderBottomColor: "none!important",
              },
              "&:hover": {
                borderBottomColor: "none!important",
              },
            },
          },
        },
      },
    },
    "& > div": {
      "& > label": {
        fontSize: "14px!important",
        transition: "all 0.3s ease-in-out",

        transform: "translate(0, 20px) scale(1)!important",
        left:
          theme.direction === "rtl" ? "0px !important" : "inherit !important",
        right:
          theme.direction === "rtl" ? "0 !important" : "inherit !important",
        "& .MuiFormLabel-asterisk": {
          color: theme.globals.colors.delete,
        },
      },
    },
    "& .MuiInputLabel-shrink": {
      transition: "all 0.3s ease-in-out!important",
      color: `${theme.globals.colors.primary}!important`,
      fontSize: "12.5px!important",
      zIndex: 2,
      transform: "translate(0, 0px) scale(1)!important",
      left: theme.direction === "rtl" ? "0px !important" : "inherit !important",
      right:
        theme.direction === "rtl" ? "unset !important" : "inherit !important",
    },
  },
  addNewUserButton: {
    width: "45px!important",
    minWidth: "45px!important",
    height: "45px!important",
    borderRadius: "4px!important",
    fontSize: theme.globals.fontSize.s + 2,
    color: `${theme.globals.colors.primary}!important`,
    marginTop: "4px!important",
    transition: "all 0.3s ease-in-out!important",
    "&:hover": {
      backgroundColor: "#F6FAFF",
      cursor: "pointer",
      "& svg": {
        transform: "scale(1.10)",
      },
    },
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      height: "38px!important",
      width: "37px!important",
      minWidth: "37px!important",
      marginBottom: "0px",

      marginLeft: "8px",
      marginRight: "4px",
    },
  },
  boxPagination: {
    "& .MuiGrid-item": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    "& button": {
      height: "35px!important",
      width: "35px!important",

      border: "0.972001px solid #E4E4E4",
      borderRadius: "50%",
    },
    "& p": {
      fontSize: theme.globals.fontSize.xs + 1,
    },
  },
  SearchToggleButtons: {
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
    [theme.breakpoints.up("900")]: {
      display: "none",
    },
  },
  myContactsMainHeader: {},
  myContactsAltHeader: {
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
    [theme.breakpoints.up("900")]: {
      display: "none",
    },
  },

  notifiHeader: {
    position: "relative",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    backgroundColor: "#fff",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      marginTop: "45px",
      flexWrap: "wrap",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.between("720", "900")]: {
      padding: "10px 5px",
      justifyContent: "space - between",
    },
    "& .MuiCard-root": {},
    "& h6": {
      marginBottom: 0,
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiButtonGroup-root ": {
      height: "50px!important",
      border: `1px solid ${theme.globals.colors.borderGrey}`,
      borderRadius: " 16px!important",
      marginInlineEnd: "8px!important",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: theme.spacing(0, 1, 1, 0),
        marginInlineEnd: "0px!important",
      },
      [theme.breakpoints.between("720", "900")]: {
        margin: theme.spacing(0, 1, 1, 0),
        width: "34 %",
      },
      "& button": {
        border: "none!important",
        color: theme.globals.colors.primaryPlus,
        textTransform: "capitalize!important",

        minWidth: "60px!important",
        height: "50px!important",
        marginInline: "2px!important",
        fontWeight: " 600!important",
      },

      "& .warning": {
        color: theme.globals.colors.warning,
      },
      "& .success": { color: theme.globals.colors.success },
      "& .danger": { color: theme.globals.colors.danger },
      "& .active": {
        height: "52px!important",
        boxShadow: "0px 2px 20px rgb(181, 181 ,181 ,0.6)",
        backgroundColor: theme.palette.background.default,
        borderRadius: "15px!important",
        marginLeft: " -1px!important",
      },
    },

    "& .contentSection": {
      marginTop: "0!important",
      justifyContent: "start",
      [theme.breakpoints.down("1024")]: {
        justifyContent: "center",
      },
    },

    "& .contentSection": {
      marginTop: "0!important",
      justifyContent: "start",
      [theme.breakpoints.down("1024")]: {
        justifyContent: "center",
      },
    },

    "& button": {
      height: "45px",
      minWidth: "42px!important",
    },
  },
  addContactButton: {
    width: "45px!important",
    minWidth: "45px!important",
    height: "45px!important",
    borderRadius: "4px!important",
    fontSize: theme.globals.fontSize.s + 2,
    color: `${theme.globals.colors.primary}!important`,
    transition: "all 0.3s ease-in-out!important",
    "& svg": {
      fontSize: "24px!important",
    },
    "&:hover": {
      backgroundColor: "#F6FAFF",
      cursor: "pointer",
      "& svg": {
        transform: "scale(1.10)",
      },
    },
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      height: "38px!important",
      width: "37px!important",
      minWidth: "37px!important",
      marginBottom: "0px",

      marginLeft: "8px",
      marginRight: "4px",
    },
  },
  SearchBox: {
    display: "contents",
  },
  myContactsHeader: {
    position: "relative",
    borderRadius: "4px",
    backgroundColor: "#fff",
    alignItems: "center",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingInlineEnd: "0px",
    },
    "& .MuiCard-root": {},
    "& h6": {
      marginBottom: 0,
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiButtonGroup-root ": {
      height: "50px!important",
      border: `1px solid ${theme.globals.colors.borderGrey}`,
      borderRadius: " 16px!important",
      marginInlineEnd: "8px!important",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: theme.spacing(0, 1, 1, 0),
        marginInlineEnd: "0px!important",
      },
      [theme.breakpoints.between("720", "900")]: {
        margin: theme.spacing(0, 1, 1, 0),
        width: "34 %",
      },
      "& button": {
        border: "none!important",
        color: theme.globals.colors.primaryPlus,
        textTransform: "capitalize!important",
        borderRadius: "15px!important",
        minWidth: "60px!important",
        height: "50px!important",
        marginInline: "2px!important",
        fontWeight: " 600!important",
      },

      "& .warning": {
        color: theme.globals.colors.warning,
      },
      "& .success": { color: theme.globals.colors.success },
      "& .danger": { color: theme.globals.colors.danger },
      "& .active": {
        height: "52px!important",
        boxShadow: "0px 2px 20px rgb(181, 181 ,181 ,0.6)",
        backgroundColor: theme.palette.background.default,
        borderRadius: "15px!important",
        marginLeft: " -1px!important",
      },
    },
    "& .MuiToggleButtonGroup-root ": {
      "& .MuiToggleButton-root": {
        marginRight: "6px!important",
        border: "none!important",
        width: "45px!important",
        height: "45px!important",
        borderRadius: "4px!important",
        fontSize: theme.globals.fontSize.s + 2,
        transition: "all 0.3s ease-in-out",
        "&:before": {
          width: "1px",
          height: "20px",
          content: '""',
          position: "absolute",
          backgroundColor: "#CDCDCD",
          right: "-4px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: theme.globals.fontSize.s,
        },
        "& svg": {
          color: `${theme.globals.colors.primary}!important`,
        },
        "&:hover": {
          cursor: "pointer",
          "& svg": {
            color: `${theme.globals.colors.primary}!important`,
            transform: "scale(1.10)",
          },
        },
        [theme.breakpoints.down("sm")]: {
          height: "34px!important",
        },
        [theme.breakpoints.between("sm", "md")]: {
          backgroundColor: " #fff",
        },
      },
      "& .Mui-selected": {
        color: theme.globals.colors.primary,
        backgroundColor: " #fff",
        "&:hover": {
          backgroundColor: "#F6FAFF",
        },
        "& svg": {
          color: theme.globals.colors.primary,
        },
      },
    },
    "& .contentSection": {
      marginTop: "0!important",
      justifyContent: "start",
      [theme.breakpoints.down("1024")]: {
        justifyContent: "center",
      },
    },

    "& .contentSection": {
      marginTop: "0!important",
      justifyContent: "start",
      [theme.breakpoints.down("1024")]: {
        justifyContent: "center",
      },
    },
    "& .search": {
      width: "100%",
      height: " 50px!important",
      border: `1px solid ${theme.globals.colors.borderGrey}`,
      borderRadius: "4px!important",
      paddingInlineStart: "16px",
      margin: theme.spacing(0, 1, 0, 0),
      flex: "auto!important",
      minWidth: "160px!important",
      [theme.breakpoints.down("md")]: {
        margin: theme.spacing(0, 1, 1, 0),
      },
      "& .MuiSelect-select ": {
        padding: "0!important",
        backgroundColor: "inherit!important",
      },

      "& .MuiInput-root ": {
        fontSize: theme.globals.fontSize.s - 2,
        color: `${theme.globals.colors.textDarkGrey}!important`,
      },
      "& input ": {
        fontSize: theme.globals.fontSize.s - 2,
        WebkitTextFillColor: `${theme.globals.colors.textDarkGrey}!important`,
        color: `${theme.globals.colors.textDarkGrey}!important`,
        textOverflow: "ellipsis!important",
        minWidth: "80px!important",
      },
      "& .MuiDivider-root ": {
        marginInline: "4px!important",
      },
      "&  .MuiInput-underline:before": {
        display: "none!important",
      },
      "&  .MuiInput-underline:after": {
        display: "none!important",
      },
      "& svg": {
        fontSize: theme.globals.fontSize.xs * 2,
        color: "#A3A3A3!important",
        cursor: "pointer!important",
      },
    },
  },
  toggleBox: {
    [theme.breakpoints.between("720", "900")]: {
      justifyContent: "flex-end",
      display: "flex",
      width: "67%",
    },
    [theme.breakpoints.down("600")]: {
      width: "100%",
      justifyContent: "end",
    },
  },
  searchItem: {
    paddingInlineEnd: "8px",
    marginInlineEnd: "8px",
    [theme.breakpoints.down("1200")]: {
      marginBottom: "8px!important",
    },
    [theme.breakpoints.down("600")]: {
      paddingInlineEnd: "0px",
    },
    "& .MuiFormControl-root": {
      width: "100%",
      border: "1px solid #e0e0e0",
      borderRadius: "2px",
      padding: "6px 8px",
    },
  },
  searchButtons: {
    justifyContent: "flex-end",
    display: "flex",
    margin: "30px 20px!important",
    [theme.breakpoints.down("600")]: {
      margin: "30px 8px!important",
    },
  },
  contactTabs: {
    "& button": {
      borderBottom: "1px solid #DCDCDC!important",
      borderTopRightRadius: "10px",
      borderTopLeftRadius: "10px",
    },
  },
  titleButton: {
    maxWidth: "50%",
    minWidth: "118px !important",
    backgroundColor: `${theme.globals.colors.primary}!important`,
    color: "#fff!important",
    "&:hover": {
      borderColor: `${theme.globals.colors.primary}!important`,
      border: "1px solid",
      color: `${theme.globals.colors.primary}!important`,
      backgroundColor: "#fff!important",
    },
  },
  searchContact: {
    maxWidth: "50%",
    minWidth: "118px !important",
    margin: "0 10px!important",
    backgroundColor: `${theme.globals.colors.primary}!important`,
    color: "#fff!important",
    "&:hover": {
      borderColor: `${theme.globals.colors.primary}!important`,
      border: "1px solid",
      color: `${theme.globals.colors.primary}!important`,
      backgroundColor: "#fff!important",
    },
  },
  titleButtonCancel: {
    maxWidth: "50%",
    minWidth: "118px !important",
    "&:hover": {
      backgroundColor: `${theme.globals.colors.primary}!important`,
      color: "#fff",
    },
  },
  addPhoto: {
    border: "1px solid!important",
    borderColor: `${theme.globals.colors.primary}54!important`,
    borderRadius: "2px!important",
    marginTop: "2px",
    width: "160px",
  },
  photo: {
    backgroundColor: "#F1F4FC",
    borderRadius: "4px!important",
    width: "160px",
    height: "150px",
    marginBottom: "10px",
  },
  photoGrid: {
    display: "flex",
    flexDirection: "column!important",
    justifyContent: "center",
    alignItems: "center",
    "& span": {
      textTransform: "capitalize",
    },
  },
  titleButton: {
    maxWidth: "50%",
    minWidth: "118px !important",
    backgroundColor: `${theme.globals.colors.primary}!important`,
    color: "#fff!important",
    "&:hover": {
      borderColor: `${theme.globals.colors.primary}!important`,
      border: "1px solid",
      color: `${theme.globals.colors.primary}!important`,
      backgroundColor: "#fff!important",
    },
  },
  searchContact: {
    maxWidth: "50%",
    minWidth: "118px !important",
    margin: "0 10px!important",
    backgroundColor: `${theme.globals.colors.primary}!important`,
    color: "#fff!important",
    "&:hover": {
      borderColor: `${theme.globals.colors.primary}!important`,
      border: "1px solid",
      color: `${theme.globals.colors.primary}!important`,
      backgroundColor: "#fff!important",
    },
  },
  titleButtonCancel: {
    maxWidth: "50%",
    minWidth: "118px !important",
    "&:hover": {
      backgroundColor: `${theme.globals.colors.primary}!important`,
      color: "#fff",
    },
  },
  contactButtons: {
    padding: "30px 0 0!important",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },

  addContactBox: {
    backgroundColor: "#fff!important",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 5px 0px 5px",
    },
    "& .lgContainer": {
      borderRight: "1px dashed #DCDCDC",
      [theme.breakpoints.down("sm")]: {
        padding: "20px 0 0px 0px",
      },
      [theme.breakpoints.down("lg")]: {
        borderRight: "none",
      },
    },
    "& .MuiBox-root": {
      borderBottom: "none!important",
    },
    "& .contactNameBox": {
      "& .MuiOutlinedInput-root": {
        width: "95%",
        height: "43px",
        margin: "5px 0px 15px",
        borderRadius: "10px!important",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#DCDCDC!important",
      },
      "& label": {
        color: "#1F2945",
        fontWeight: "bold",
        fontSize: theme.globals.fontSize.xs + 1,
      },
    },
    "& .contactFeildBox": {
      "& .MuiAutocomplete-root": {
        width: "95%",
        height: "43px",
        border: "1px solid #DCDCDC!important",
        borderRadius: "10px!important",
        marginTop: "5px",
        marginBottom: "8px",
        display: "flex",
      },

      "& button": {
        border: "none!important",
      },
      "& .MuiOutlinedInput-root": {
        width: "95%",
        height: "43px",
        margin: "5px 0px 15px",
        borderRadius: "10px!important",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#DCDCDC!important",
      },
      "& label": {
        color: "#1F2945",
        fontWeight: "bold",
        fontSize: theme.globals.fontSize.xs + 1,
      },
    },
    "& .formikContactFeildBox": {
      "& .MuiAutocomplete-root": {
        width: "95%",
        height: "43px",
        marginTop: "5px",
        marginBottom: "8px",
        display: "flex",
        padding: "10px 10px 5px!important",
      },
      "& .MuiAutocomplete-endAdornment": {
        left: "auto!important",
        right: "0",
        top: "calc(50% - 21px)",
      },

      "& button": {
        border: "none!important",
      },
      "& .MuiOutlinedInput-root": {
        width: "95%",
        height: "43px",
        margin: "5px 0px 15px",
        borderRadius: "10px!important",
      },
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#DCDCDC!important",
      },
      "& label": {
        color: "#1F2945",
        fontWeight: "bold",
        fontSize: theme.globals.fontSize.xs + 1,
      },
    },
    "& .contactFeild": {
      "& > .MuiInputLabel-asterisk": {
        color: `${theme.globals.colors.delete}!important`,
      },
    },
  },
  tabpanel: {
    padding: "0!important",
    paddingBottom: "24px!important",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 5px!important",
    },
  },

  addContact: {
    position: "relative",
    color: "red",
  },

  headerSearchFieldsBox: {
    width: "100%",
    position: "relative!important",
    height: "fit-content",
    marginBottom: "16px",
    marginTop: "8px",
    marginInlineEnd: "20px",
    paddingInlineStart: "20px",
    border: "0.6px solid #DCDCDC",
    borderRadius: "4px",
    paddingTop: "12px",
    [theme.breakpoints.down("sm")]: {
      marginInlineEnd: "4px",
      paddingInlineStart: "8px",
    },
    "& .events-wrap": {
      flex: "auto!important",
    },
    "& .MuiCard-root": {
      "& .MuiCardHeader-title ": {
        color: theme.globals.colors.textDark,
        fontSize: theme.globals.fontSize.m - 3,
        fontWeight: 600,
        lineHeight: "33px",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
      },
      "& .MuiTypography-body1": {
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        overflow: "hidden",
        width: "312px",
      },
    },
    "& .MuiSvgIcon-root": {
      color: theme.globals.colors.primary,
    },
    "& .search": {
      borderBottom: "0.6px solid #A4A4A4",
      marginTop: "16px",
      width: "96%",
      "& .MuiFormControl-root": {
        width: "inherit",
      },
    },
  },
  noContactsPhrase: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  noContactsPara: {
    padding: "11px",
    backgroundColor: theme.globals.colors.primary,
    borderRadius: "4px",
    color: theme.globals.colors.textWhite,
  },
  tabsFiltersMainBox: {
    width: "100%",
    marginBottom: "30px",
    "& .MuiTabs-scroller": {
      overflowX: "auto!important",
    },
  },
}));
