import * as React from "react";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "components/muiComponents";
export default function RadioButtonGroup(props) {
  return (
    <FormControl>
      {props?.formLabel && (
        <FormLabel id="demo-row-radio-buttons-group-label">
          {props?.formLabel}
        </FormLabel>
      )}
      <RadioGroup
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        {...props}
      >
        {Array.isFullArray(props?.items) &&
          props?.items?.map((item, index) => (
            <FormControlLabel
              value={item?.value}
              control={<Radio />}
              label={item?.name}
              key={index}
            />
          ))}
      </RadioGroup>
    </FormControl>
  );
}
