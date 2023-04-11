import Typography from "@mui/material/Typography";
import useStyles from "./style";
import { useSelector } from "react-redux";
export default function PageHeading() {
  const classes = useStyles();
  const {
    settingsReducer: {
      settings: { pageTitle },
    },
  } = useSelector((state) => state);
  return (
    <Typography gutterBottom className={classes.pageHeading}>
      {Object.translate(pageTitle)}
    </Typography>
  );
}
