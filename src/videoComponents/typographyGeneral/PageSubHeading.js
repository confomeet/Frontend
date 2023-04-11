import Typography from "@mui/material/Typography";
import useStyles from "./style";
export default function PageSubHeading(props) {
  const classes = useStyles();
  return (
    <Typography gutterBottom className={classes.pageSubHeading}>
      {props.subHeading}
    </Typography>
  );
}
