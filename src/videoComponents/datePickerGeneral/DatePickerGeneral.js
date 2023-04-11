import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import useStyles from "./style";

export default function DatePickerGeneral(props) {
  const classes = useStyles();
  const today = new Date().toISOString().substr(0, 16);

  return (
    <Box className={classes.datePickerGeneral}>
      <TextField
        variant="standard"
        id="datetime-local"
        label={props.label}
        type="datetime-local"
        defaultValue={today}
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  );
}
