import { makeStyles } from "@mui/styles";

const drawerStyle = makeStyles((theme) => ({
  root: {
    "& .MuiAppBar-root": {
      zIndex: 1200,
      height: 64,
      boxShadow: "none",
      backgroundColor: theme.palette.background.default,
    },
  },
}));
export default drawerStyle;
