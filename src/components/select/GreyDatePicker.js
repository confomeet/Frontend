import { Box, TextField } from "components/muiComponents";
import moment from "moment";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import useStyles from "./SelectDropdownFeildStyle";
export default function GreyDatePicker({
  label,
  defaultValue,
  onChange,
  error,
  helperText,
  maxDate,
  minDate,
  disabled,
  required,
  InputLabelProps,
}) {
  const classes = useStyles();
  const dbdateChange = (date) => {
    return date
      ? new Date(new Date(date).toString().split("GMT")[0] + " UTC")
      : null;
  };

  return (
    <Box className={classes.GreyBoxPicker}>
      <p className={classes.labelPicker}>{label}</p>
      <DatePicker
        selected={defaultValue ? new Date(defaultValue) : null}
        isClearable
        placeholderText="dd-MM-yyyy"
        dateFormat="dd-MM-yyyy"
        required={required}
        disabled={disabled}
        maxDate={maxDate}
        minDate={minDate}
        error={error}
        helperText={helperText}
        minDateMessage={helperText}
        maxDateMessage={helperText}
        value={moment(defaultValue)}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        scrollableYearDropdown
        onChange={(date) => {
          onChange && onChange(dbdateChange(date));
        }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        InputLabelProps={InputLabelProps}
        TextFieldComponent={(props) => (
          <TextField
            disabled
            {...props}
            inputProps={{
              ...props.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
      />
    </Box>
  );
}
