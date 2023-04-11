import { TextField } from "formik-material-ui";
import { Field } from "formik";

export default function CustomTextField(props) {
  return (
    <Field
      component={TextField}
      {...props}
      autoComplete="new-password"
      inputProps={{ autoComplete: "off" }}
    />
  );
}
