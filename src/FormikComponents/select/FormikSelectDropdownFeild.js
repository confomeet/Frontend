import { TextField } from "components/muiComponents";
import StandardSelectDropdown from "components/select/StandardSelectDropdown";
import { Field, Form } from "formik";
import { fieldToTextField } from "formik-mui";
import useStyles from "./FormikSelectDropdownFeildStyle";

const FormikAutoCompleteFeild = ({ textFieldProps, style, ...props }) => {
  const {
    form: { setTouched, setFieldValue },
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;

  const handleSelectChange = (obj) => {
    if (props.onChange) {
      return props.onChange(obj);
    }
    return setFieldValue(name, obj.id);
  };
  return (
    <StandardSelectDropdown
      {...props}
      {...field}
      defaultValue={props.defaultValue || props.form?.values[name]}
      items={props.options}
      onChange={handleSelectChange}
      onBlur={() => setTouched({ [name]: true })}
      getOptionSelected={(item, current) => item.value === current.value}
      renderInput={(props) => (
        <TextField {...props} {...textFieldProps} style={style} />
      )}
    />
  );
};

export default function FormikSelectDropdownFeild(props) {
  const classes = useStyles();
  return (
    <Form className={classes.root}>
      <Field
        component={FormikAutoCompleteFeild}
        {...props}
        textFieldProps={{
          fullWidth: true,
          margin: "normal",
          variant: "standard",
        }}
        style={props.style}
        multiple={props.multiple}
      />
    </Form>
  );
}
