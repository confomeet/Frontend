import { TextField } from "components/muiComponents";
import { Field, Form } from "formik";
import { fieldToTextField } from "formik-mui";
import { FormikAutocomplete } from "../FormikMui";
import useStyles from "./FormikSelectDropdownFeildStyle";

const FormikAutoCompleteFeild = ({
  textFieldProps,
  style,
  label,
  ...props
}) => {
  const {
    form: { setTouched, setFieldValue },
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  return (
    <FormikAutocomplete
      {...props}
      {...field}
      onChange={(_, value) => setFieldValue(name, value)}
      onBlur={() => setTouched({ [name]: true })}
      getOptionSelected={(item, current) => item.value === current.value}
      renderInput={(props) => (
        <TextField
          {...props}
          {...textFieldProps}
          helperText={helperText}
          error={error}
          style={style}
          label={label}
        />
      )}
    />
  );
};

export default function FormikAutoComplete(props) {
  const classes = useStyles();
  return (
    <Form className={classes.rootMultiSelected}>
      <Field
        component={FormikAutoCompleteFeild}
        label={props.label}
        {...props}
        textFieldProps={{
          fullWidth: true,
          margin: "normal",
          variant: "standard",
          required: props?.required,
        }}
        style={props.style}
        multiple={props.multiple}
      />
    </Form>
  );
}
