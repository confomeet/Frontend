import { Field } from "formik";
import { FormikTextField } from "FormikComponents/FormikMui";
export default function TextField(props) {
  return <Field component={FormikTextField} {...props} />;
}
