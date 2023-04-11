import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const DatePickerField = ({ ...props }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        inputFormat=" dd-MM-yyyy"
        {...props}
        onChange={(val) => {
          if (!(val instanceof Date && !isNaN(val))) return;
          props.onChange(val);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            error={props.error}
            helperText={props.helperText}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerField;
