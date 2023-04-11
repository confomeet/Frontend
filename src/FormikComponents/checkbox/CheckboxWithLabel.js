import { Field } from "formik";
import { FormikCheckboxWithLabel } from "FormikComponents/FormikMui";
export default function CheckboxWithLabel(props) {
  return <Field component={FormikCheckboxWithLabel} {...props} />;
}
