import Button from "@mui/material/Button";
import useStyles from "./style";

export default function SecondaryButton({ secondaryButton, ...props }) {
  const classes = useStyles();

  return (
    <Button {...props} className={classes.secondaryButton}>
      <span> {secondaryButton}</span>
    </Button>
  );
}
