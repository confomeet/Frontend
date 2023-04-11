import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  edit: {
    margin: "8px 0",
    "& .cke_rtl .cke_combo_text": {
      fontFamily: "Droid Kufi!important",
      minWidth: "77px!important",
    },
    "& .cke_chrome": {
      border: "unset",
      boxShadow: "none!important",
    },
    "& .cke_combo_button": {
      borderRadius: "5px",
      border: "1px solid #cccccc80",
    },
    "& .cke_inner": {
      border: "1px solid #E8E8E8",
      borderRadius: "10px",
      background: "#e8e8e8",
    },
    "& .cke_top": {
      background: "#E8E8E8",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
      border: "#E8E8E8",
    },
    "& .cke_bottom": {
      background: "#E8E8E8",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
      border: "none",
    },
    "& .cke_contents": {
      borderRadius: "10px",
      margin: "-1px 2px",
      height: "500px !important",
    },
    "& .ck-editor__editable": {
      width: "inherit",
      height: "500px !important",
    },
    "& .ck.ck-dropdown__panel": {
      "max-height": "160px",
      "overflow-y": "auto",
      "font-size": "50px",
    },
    "& .ck.ck-content.ck-editor__editable": {
      fontFamily: "Droid Kufi , Raleway",
      lineHeight: 2.5,
    },

    "& .ck.ck-editor__editable_inline": {
      width: "inherit",
      height: "350px",
      minHeight: "100px",
      borderBottomLeftRadius: "15px !important",
      borderBottomRightRadius: "15px !important",
    },
    "& .ck-toolbar": {
      borderTopLeftRadius: "15px !important",
      borderTopRightRadius: "15px !important",
      // width: "calc( 210mm + 5px )",
    },
  },
}));
export default useStyles;
