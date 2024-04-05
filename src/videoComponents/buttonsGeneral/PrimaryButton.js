import Button from "@mui/material/Button";
import useStyles from "./style";

export default function PrimaryButton({ primaryButton, ...props }) {
  const classes = useStyles();
  return (
    <Button {...props} className={classes.primaryButton}>
      <span> {primaryButton}</span>
    </Button>
  );
}
