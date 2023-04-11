import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { Field } from "formik";
import { Select } from "formik-material-ui";
import { useSelector } from "react-redux";

export default function CustomSelect(props) {
  const reducers = useSelector((state) => state);
  let isRtl = reducers?.settings;
  return (
    <FormControl>
      <InputLabel>{props.label}</InputLabel>
      <Field
        component={Select}
        name={props.name}
        variant={props.variant}
        value={props.value}
        className={props.className}
        multiple={props.multiple}
        onChange={props.onChange}
        input={props.input}
        native={props.native}
        inputProps={props.inputProps}
        renderValue={props.renderValue}
        disabled={props.disabled}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: isRtl ? "right" : "right",
          },
          getContentAnchorEl: null,
        }}
      >
        {props.menuItems &&
          props.menuItems.map((selectedValue, index) => {
            return (
              <MenuItem value={props.selectingValues[index]} key={index}>
                {selectedValue}
              </MenuItem>
            );
          })}
      </Field>
    </FormControl>
  );
}
