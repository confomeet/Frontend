import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  root: {},
  input: {
    display: "none",
  },
  saveButton: {
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: theme.globals.fontSize.s,
  },
}));
