import { TextField } from "components/muiComponents";
import SelectDropdownFeild from "components/select/SelectDropdownFeild";
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
    <SelectDropdownFeild
      {...props}
      {...field}
      defaultValue={props.defaultValue || props.form?.values[name]}
      items={props.options}
      onChange={handleSelectChange}
      handleClear={() => setFieldValue(name, null)}
      onBlur={() => setTouched({ [name]: true })}
      getOptionSelected={(item, current) => { return item.value === current.value;}}
      renderInput={(props) => (
        <TextField {...props} {...textFieldProps} style={style} />
      )}
    />
  );
};

export default function FormikSelectDropdownFeild({label, ...props}) {
  const classes = useStyles();
  return (
    <Form className={classes.rootMultiSelected}>
      <Field
        component={FormikAutoCompleteFeild}
        {...props}
        textFieldProps={{
          label,
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
