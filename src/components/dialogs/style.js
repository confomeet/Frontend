import { makeStyles } from "@mui/styles";
export const dialogStyle = makeStyles((theme) => {
  return {
    resizable: {
      position: "relative",
      "& .react-resizable-handle": {
        position: "absolute",
        width: 20,
        height: 20,
        bottom: 0,
        right: 0,
        background:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+')",
        "background-position": "bottom right",
        padding: "0 3px 3px 0",
        "background-repeat": "no-repeat",
        "background-origin": "content-box",
        "box-sizing": "border-box",
        cursor: "se-resize",
      },
    },
    paper: {
      position: "absolute",
      zIndex: 1800,
      backgroundColor: "transparent!important",
      boxShadow: " none!important",
      border: "2px solid",
      borderColor: "#80808047",
      "& h2": {
        padding: 0,
        overflow: "visible",
        backgroundColor: "#fff",
      },
      "& .icons": {
        flexDirection: "row-reverse",
        padding: "0 8px",
        "& button": {
          cursor: "pointer!important",
        },
        "& svg": {
          cursor: "pointer!important",
        },
      },

      "& > div": {
        display: "flex",
        flexDirection: "column",
        boxShadow: " 0px 28px 36px -8px #ccc!important",
        height: "100%",
        backgroundColor: "#fff",
      },
      "& button": {
        marginLeft: 8,
        marginTop: 8,
        backgroundColor: "#bf9e66",
        color: "#bf9e66s}!important",
      },
      "& .MuiDialogContent-root": {
        height: "90%",
        width: "100%",
        padding: 0,
        overflow: "visible",
      },
    },
    jitsiIfram: {
      "& .MuiDialogContent-root": {
        height: "88%",
        "& >div": {
          height: "100%",
          width: "100%",
          "& #jitsiConferenceFrame0": {
            width: "100% !important",
            height: "100% !important",
          },
        },
      },
    },
  };
});
