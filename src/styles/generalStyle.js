import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    fontFamily: theme.globals.fontFamily,
    "& .MuiTypography-body2": {
      fontFamily: theme.globals.fontFamily,
    },
  },
  rootNotifications: {
    margin: "0 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  passFld: {
    marginBottom: "80px!important",
    "& .MuiFormHelperText-root": {
      whiteSpace: "unset!important",
      top: "48px!important",
    },
  },
  sideMenuBox: {
    margin: "0 20px",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  Textcontainer: {
    backgroundColor: "#fff",
    padding: "0 10px",
    borderRadius: "15px",
    "& .MuiAutocomplete-root": {
      "&:before": {
        borderBottom: "none!important",
        width: "0!important",
      },
      "&:after": {
        borderBottom: "none!important",
        width: "0!important",
      },
    },
    "& .MuiChip-deleteIcon": {
      margin: "0 5px!important",
    },
    "& .MuiAutocomplete-endAdornment": {
      right: theme.direction === "rtl" ? "0px !important" : "",
      left: theme.direction === "rtl" ? "unset !important" : "",
    },
  },
  numberFeild: {
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
  HandleEventsContainer: {
    padding: "20px",
    backgroundColor: "#fff",
    width: "100%!important",

    [theme.breakpoints.down("485")]: {
      margin: "auto",
    },

    "& button": {
      [theme.breakpoints.down("485")]: {
        minWidth: "110px !important",
      },
    },
    "&  .MuiGrid-grid-xs-12": {
      [theme.breakpoints.down("900")]: {
        marginBottom: "20px",
      },
    },
    "& .MuiGrid-item ": {
      maxWidth: "48%",
      marginInlineEnd: "1%",
      // backgroundColor: "#ffffff",
    },
    "& .MuiBox-root": {
      display: "flex",
      width: "100%",
    },
  },
  infoBox: {
    display: "flex",
    alignItems: "center",
    borderRadius: "6px",
    minHeight: "60px!important",
    height: "fit-content",
    marginTop: "15px",
    "& form": {
      width: "100%",
    },
    "&  .MuiInput-root:before": {
      display: "none!important",
    },
    "&  .MuiInput-root:after": {
      display: "none!important",
    },
    "& .MuiAutocomplete-inputRoot": {
      paddingRight: "0px",
    },
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
  infoBoxPhone: {
    display: "flex",
    flexDirection: "column!important",
  },
  infoIcon: {
    fontSize: theme.globals.fontSize.s + 4,
    margin: "0 22px",
    color: "#A3A3A3!important",
    [theme.breakpoints.down("485")]: {
      fontSize: theme.globals.fontSize.s + 1,
      margin: "0 8px",
      display: "none",
    },
  },
  infoHolder: {
    display: "flex",
    justifyContent: "flex-start",
    marginInlineEnd: "6px !important",
    whiteSpace: "nowrap",
    color: "#A3A3A3",
    minWidth: "150px",
    fontSize: `${theme.globals.fontSize.xs + 2}px!important`,
    [theme.breakpoints.down("485")]: {
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
      minWidth: "64px",

      margin: "0 6px!important",
    },
  },
  inHolder: {
    [theme.breakpoints.down("485")]: {
      fontSize: "14px!important",
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
      flexFlow: "column",
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
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
  clickHere: {
    color: theme.globals.colors.primary,
    whiteSpace: "nowrap",
  },
  secondHeader: {
    fontFamily: theme.globals.fontFamily,
    fontWeight: "500!important",
    fontSize: "16px!important",
    lineHeight: "19px",
    color: "#666666!important",
  },
  gray: {
    fontFamily: theme.globals.fontFamily,
    color: "#666666!important",
  },
  moveToTop: {
    paddingTop: "0px",
    marginTop: "-27px",
  },
  form: {
    fontFamily: theme.globals.fontFamily,
    width: "100%",
    "& .MuiInputLabel-asterisk": { color: "red" },
  },
  label: {
    fontFamily: theme.globals.fontFamily,
    fontSize: "0.9em",
    fontStyle: "normal",
    fontWeight: "400",
    paddingTop: "10px",
    color: "#666666",
    paddingBottom: "10px",
  },
  blueLabel: {
    color: "#146A99!important",
  },
  dragImg: {
    "& .MuiDropzoneArea-root": {
      width: "389px",
      minHeight: "45px",
      height: "auto",
      border: "0.5px solid #989898",
      borderRadius: "8px",
      "& .MuiDropzoneArea-textContainer": {
        textAlign: "left",
        padding: "9px",
      },
      "& .MuiDropzoneArea-text": {
        marginTop: "0px",
        marginBottom: "0px",
        fontSize: theme.globals.fontSize.s,
        fontWeight: "400",
        color: "#9C9C9C",
      },
      "& .MuiDropzoneArea-icon": {
        right: "2%",
        height: "26px",
        top: "5px",
        color: "#9C9C9C",
        position: "absolute",
        marginRight: "0px",
      },
      "& .MuiGrid-spacing-xs-8 > .MuiGrid-item": {
        padding: "0px",
        "&:hover": {
          "& .MuiDropzonePreviewList-removeButton": {
            top: "12px",
            right: "46px",
          },
          "& .MuiSvgIcon-root": {
            marginRight: "5px",
          },
        },
        "& .MuiDropzonePreviewList-image": {
          height: "70px",
          width: "110px",
        },
      },
      "& .MuiGrid-spacing-xs-8": {
        width: "100%",
        margin: "0px",
      },
      "&:focus": {
        outline: "none!important",
        border: "0.5px solid #1f627f!important",
      },
    },
  },
  input: {
    fontFamily: theme.globals.fontFamily,
    borderRadius: "10px",
    background: "#FFFFFF",
    height: "41px",
    width: "389px",
    "& .MuiInputBase-input.Mui-disabled": {
      color: "#666666",
    },
    "& .MuiInputBase-root .MuiInputBase-input:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 1000px white inset",
      padding: "11px",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0.5px solid #989898",
      borderRadius: "8px",
    },
    "& .MuiInputLabel-formControl": {
      top: "-12%",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      height: "98%",
      width: "389px",
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: "0px",
      marginRight: "0px",
      fontFamily: theme.globals.fontFamily,
      width: "205%",
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: "0px!important",
    },
    "&:focus": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "0.5px solid #1f627f!important",
      },
    },
  },
  widtherInput: {
    width: "508px!important",
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      height: "98%",
      width: "508px",
    },
  },
  smallerInput: {
    width: "306px!important",
    "& .MuiOutlinedInput-root": {
      width: "306px",
    },
  },
  bolderInput: {
    "& .MuiInputBase-input.Mui-disabled": {
      fontWeight: "bold",
    },
  },
  tab: {
    fontFamily: theme.globals.fontFamily,
    position: "fixed",
    top: "14%",
    backgroundColor: "#fafafa",
    paddingLeft: "3%",
    color: "#989898",
    zIndex: 2000,
    fontSize: theme.globals.fontSize.s + 4,
    "& .MuiTab-root": {
      textTransform: "none",
      marginLeft: "-50px",
      fontSize: theme.globals.fontSize.s + 4,
      fontWeight: "500",
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      color: "#146A99",
    },
    "& .MuiTouchRipple-root": {
      width: "0px",
    },
  },

  column: {
    flexDirection: "column",
    marginTop: "-15px",
    marginBottom: "50px",
  },
  row: {
    flexDirection: "row",
    marginTop: "-15px",
    marginBottom: "50px",
  },
  marginTop15: {
    marginTop: "-15px",
  },
  marginTop10: {
    marginTop: "10px",
  },
  marginTop20: {
    marginTop: "20px",
  },
  marginTop30: {
    marginTop: "30px",
  },
  marginTop225: {
    marginTop: "225px",
  },
  paddingTop30: {
    paddingTop: "30px",
  },
  marginBottom20: {
    marginBottom: "20px",
  },
  marginBottom10: {
    marginBottom: "10px",
  },
  marginBottom75: {
    marginBottom: "75px",
  },
  marginBottom30: {
    marginBottom: "30px",
  },
  marginBottom50: {
    marginBottom: "50px",
  },
  fixMargin: {
    marginTop: "-63px",
    marginBottom: "0px",
  },
  select: {
    fontFamily: theme.globals.fontFamily,
    background: "#ffffff",
    height: "41px",
    width: "389px",
    "& .MuiSelect-icon": {
      color: "#989898",
    },
    "& .MuiSelect-nativeInput": {
      backgroundColor: "#ffffff",
      opacity: 1,
      left: "10px",
      width: "90%",
      bottom: "10px",
      border: "none",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: theme.globals.fontSize.s,
      lineHeight: "19px",
      color: "#666666",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0.5px solid #989898!important",
      borderRadius: "8px",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
  },
  smallerSelect: {
    width: "306px!important",
  },
  rowDirection: {
    flexDirection: "row",
  },
  radioBtn: {
    "& .MuiTypography-body1": {
      marginLeft: '"10px"',

      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: theme.globals.fontSize.s,
      lineHeight: "19px",
      color: "#666666",
    },
    "& .MuiFormControlLabel-root": {
      marginRight: "31px",
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: "#146A99",
    },
  },
  ckeckbox: {
    "& .MuiFormControlLabel-root .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#146A99!important",
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "#146A99!important",
    },
    "& .MuiTypography-body1": {
      marginLeft: "-15px",
      fontSize: theme.globals.fontSize.s,
      fontWeight: "500",
    },
  },
  switch: {
    "& .MuiSwitch-switchBase": {
      color: "#989898",
    },

    "& .MuiSwitch-track": {
      backgroundColor: "#E5E5E5",
      border: "1px solid #c4c4c4",
    },
    "& .Mui-checked": {
      color: "#146A99",
    },
    "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track ": {
      backgroundColor: "#E5E5E5",
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      opacity: "1",
      border: "1px solid C4C4C4",
    },
  },
  tags: {
    fontFamily: theme.globals.fontFamily,
    backgroundColor: "#ffffff",
    marginTop: "0px",
    border: "0.5px solid #989898",
    borderRadius: "8px",
    minHeight: "41px",
    height: "auto",
    width: "306px",
    paddingLeft: "9px",
    fontWeight: "300",
    "& div": {
      marginTop: "0px!important",
    },
    "& div:before": {
      borderBottom: "none!important",
      transition: "none!important",
    },
    "& div:after": {
      borderBottom: "none!important",
      transition: "none!important",
    },
    "& .MuiChip-root": {
      height: "26px",
      width: "20%",
      borderRadius: "5px",
      border: "1px solid #146A99",
      background: "#FFFFFF",
      marginTop: "7px!important",
    },
    "& .MuiChip-deleteIcon": {
      left: "93%",
      position: "absolute",
      top: "-17%",
      color: "#FFFFFF",
      width: "17px",
      border: "1px solid #146A99",
      height: "17px",
      backgroundColor: "#C4C4C4",
      borderRadius: "9px",
    },
    "& .MuiFormHelperText-root": {
      marginLeft: "-7px",
      fontFamily: theme.globals.fontFamily,
    },
    "&:focus": {
      border: "0.5px solid #1f627f !important",
    },
    "& .MuiInputBase-input": {
      padding: "6px",
    },
  },
  widtherTags: {
    width: "389px",
  },
  tinymceContainer: {
    "& .tox-tinymce": {
      borderRadius: "13px",
      height: "200px!important",
    },
    "& .tox .tox-menubar": {
      backgroundColor: "#F0F8FF",
    },
    "& .tox .tox-toolbar, .tox .tox-toolbar__overflow, .tox .tox-toolbar__primary":
      {
        backgroundColor: "#F0F8FF",
      },
  },
  upload: {
    fontFamily: theme.globals.fontFamily,
    backgroundColor: "#ffffff",
    height: "41px",
    width: "389px",
    border: "0.5px solid #989898",
    borderRadius: "8px",
    padding: "10px",
    textTransform: "none",
    "& .MuiSvgIcon-root": {
      marginRight: "25px",
    },
    "& .MuiButton-label": {
      justifyContent: "flex-start",
      fontSize: theme.globals.fontSize.s,
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "19px",
      color: "#9C9C9C",
    },
  },
  btnIcon: { position: "absolute", right: "5px" },
  hidden: { display: "none" },
  btn: {
    cursor: "pointer",
    fontFamily: theme.globals.fontFamily,
    height: "41px",
    width: "158px",
    fontWeight: "700",
    fontSize: theme.globals.fontSize.s - 1,
    lineHeight: "19px",
    textAlign: "center",
    boxShadow: "0px 0px 4px rgb(0 0 0 / 25%)",
    borderRadius: "8px",
  },
  blueBtn: {
    color: "#FFFFFF",
    background: theme.globals.colors.primaryPlus,
    padding: "5px 20px",
    borderRadius: 5,
    textDecoration: "none",
    "&:hover": {
      color: theme.globals.colors.primaryPlus,
      backgroundColor: "#FFFFFF",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 30%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%)",
    },
  },
  whiteBtn: {
    background: "#FFFFFF",
    color: "#989898",
    marginLeft: "20%",
    border: "0.5px solid #146A99",
    "&:hover": {
      color: "#FFFFFF",
      backgroundColor: "#146A99",
      boxShadow:
        "0px 2px 4px -1px rgb(0 0 0 / 30%), 0px 4px 5px 0px rgb(0 0 0 / 20%), 0px 1px 10px 0px rgb(0 0 0 / 15%)",
    },
  },
  datePicker: {
    fontFamily: theme.globals.fontFamily,
    paddingLeft: "10px",
    height: "41px",
    borderRadius: "8px",
    paddingTop: "2px",
  },
  userProfileImg: {
    width: "45%",
    border: "5px solid #ffffff",
    background: "#FFFFFF",
    boxShadow: "0px 2px 15px rgb(0 0 0 / 15%)",
    borderRadius: "49%",
    marginLeft: "50%",
  },
  error: {
    height: "160px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "inherit",
    width: "176px",
    position: "fixed",
    bottom: "17%",
    left: "42%",
  },
  search: {
    fontFamily: theme.globals.fontFamily,
    background: "#FFFFFF",
    height: "41px",
    width: "389px",
    border: "0.5px solid #989898!important",
    borderRadius: "8px",
  },
  formikTextFieldsTitles: {
    color: "#1F2945!important",
    fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
    fontWeight: "600!important",
    paddingBottom: "8px!important",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "0px!important",
    },
    "& > .MuiInputLabel-asterisk": {
      color: `${theme.globals.colors.delete}!important`,
    },
  },
  formikTextFields: {
    minWidth: "97%",
    "& .MuiOutlinedInput-notchedOutline": {
      borderTop: "none",
      borderLeft: "none",
      borderRight: "none",
      borderRadius: "0px",
    },
  },
  linkFieldAlign: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      direction: theme.direction === "rtl" ? "rtl" : "",

      textAlign: theme.direction === "rtl" ? "left" : "",
    },
  },
  buttonsHandlerGrid: {
    padding: "16px 0",
    gap: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  inputWhiteBackground: {
    "& .MuiInputBase-input": {
      padding: "5px 10px",
    },
    "& .MuiGrid-root": {
      marginBottom: "35px",
    },
    "& .medium-btn": {
      minWidth: "120px!important",
      [theme.breakpoints.down("sm")]: {
        minWidth: "110px!important",
      },
    },
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-20px",
      whiteSpace: "nowrap",
    },
    "& .MuiGrid-root": {
      "& > div": {
        width: "97%",
      },
    },
  },
  inputBackground: {
    "& .MuiInputBase-input": {
      padding: "5px 0px",
      fontSize: `${theme.globals.fontSize.xs + 1}px!important`,
      textOverflow: "ellipsis",
    },
    "& > .MuiGrid-root": {
      marginTop: "10px",
      maxWidth: "80%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "100%",
      },
    },
    "& .medium-btn": {
      minWidth: "120px!important",
    },
  },
}));
