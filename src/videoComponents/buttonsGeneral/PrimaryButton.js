import Button from "@mui/material/Button";
import useStyles from "./style";

export default function PrimaryButton(props) {
  const classes = useStyles();
  return (
    <Button {...props} className={classes.primaryButton}>
      <span> {props.primaryButton}</span>
    </Button>
  );
}
