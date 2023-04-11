import * as React from "react";
import { Field } from "formik";
import {
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "components/muiComponents";
import { FormikRadioGroup } from "FormikComponents/FormikMui";
export default function FormikRadioButtonGroup(props) {
  return (
    <FormControl>
      {props?.formLabel && (
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{ color: "#000!important", fontSize: "14px!important" }}
        >
          {props?.formLabel}
        </FormLabel>
      )}
      <Field
        component={FormikRadioGroup}
        {...props}
        name={props.name}
        className={props.className}
        defaultValue={props.value}
      >
        {Array.isFullArray(props?.allRadios) &&
          props?.allRadios?.map((radio, index) => (
            <FormControlLabel
              // {...props}
              control={<Radio />}
              label={radio?.name}
              key={index}
              value={radio.value}
            />
          ))}
      </Field>
    </FormControl>
  );
}
