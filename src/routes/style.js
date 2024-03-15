import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  ContentColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    overflow: "scroll",
  }
}));

export default useStyles;