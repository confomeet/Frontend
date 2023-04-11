import useStyles from "./style";
import { Box, TextField } from "components/muiComponents";
export default function TextFeildGeneral(props) {
  const classes = useStyles();

  return (
    <Box className={classes.textFeildGeneral}>
      <TextField
        {...props}
        id="standard-basic"
        InputProps={{ disableUnderline: true }}
        label={props.label}
        variant="standard"
        type="text"
        fullWidth
        value={props.value}
      />
    </Box>
  );
}
