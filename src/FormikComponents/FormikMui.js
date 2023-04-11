import React from "react";
import {
  Autocomplete,
  TextField,
  Select,
  Switch,
  ToggleButtonGroup,
  CheckboxWithLabel,
  RadioGroup,
} from "formik-mui";

const FormikAutocomplete = (props) => <Autocomplete {...props} />;
const FormikTextField = (props) => <TextField {...props} />;
const FormikSelect = ({ children, ...props }) => (
  <Select {...props}>{children}</Select>
);
const FormikSwitch = (props) => <Switch {...props} />;
const FormikToggleButtonGroup = ({ children, ...props }) => (
  <ToggleButtonGroup {...props}>{children}</ToggleButtonGroup>
);

const FormikCheckboxWithLabel = (props) => <CheckboxWithLabel {...props} />;
const FormikRadioGroup = ({ children, ...props }) => (
  <RadioGroup {...props}>{children}</RadioGroup>
);
export {
  FormikAutocomplete,
  FormikTextField,
  FormikSelect,
  FormikSwitch,
  FormikToggleButtonGroup,
  FormikCheckboxWithLabel,
  FormikRadioGroup,
};
