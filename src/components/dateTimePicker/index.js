import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Grid, TextField } from "components/muiComponents";
import enLocale from "date-fns/locale/en-US";
import ruLocale from "date-fns/locale/ru";
import { useStyles } from "./style";

const DateTimePickerField = ({ ...props }) => {
  const classes = useStyles();
  const inputFormat = "dd-MM-yyyy";
  return (
    <Grid className={classes.rootMainCalender}>
      <LocalizationProvider
        dateAdapter={AdapterDateFns}
        adapterLocale={window.navigator.language.match("en") ? enLocale : ruLocale}
      >
        <DatePicker
          format={inputFormat}
          {...props}
          onChange={(val) => {
            if (!(val instanceof Date && !isNaN(val))) return;
            props.onChange(val);
          }}
          onKeyDown={(event) => {
            event.preventDefault();
          }}
          label={props?.dateLabel}
          renderInput={(params) => (
            <TextField
              {...params}
              error={props.disabled ? null : props.error}
              helperText={props.disabled ? null : props.helperText}
              onKeyDown={(event) => {
                event.preventDefault();
              }}
            />
          )}
        />
      </LocalizationProvider>
      {!props.showTime && (
        <TextField
          id="time"
          type="time"
          value={props.timeValue}
          style={{ color: "#fff" }}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300,
          }}
          error={props.disabled ? null : props.timeError}
          helperText={props.disabled ? null : props.timeHelperText}
          sx={{ width: 150 }}
          onChange={(st) => {
            props.onChangeTime(st);
          }}
          label={props?.timeLabel}
          disabled={props.disabled}
        />
      )}
    </Grid>
  );
};

export default DateTimePickerField;
