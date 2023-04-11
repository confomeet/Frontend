import { FormikSelect } from "FormikComponents/FormikMui";
import { FormControl, InputLabel, MenuItem } from "components/muiComponents";
import { Field } from "formik";
import { useSelector } from "react-redux";

const FormikCustomSelect = (props) => {
  const {
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel htmlFor="age-simple">{props.label}</InputLabel>
      <Field
        component={FormikSelect}
        defaultValue={props.defaultValue}
        name={props.name}
        variant={props.variant}
        className={props.className}
        multiple={props.multiple}
        disabled={props.disabled}
      >
        {props?.options ? (
          props.options.map((option, index) => {
            return (
              <MenuItem value={option.value} key={index}>
                {isRTL ? option?.arName : option?.enName}
              </MenuItem>
            );
          })
        ) : (
          <></>
        )}
      </Field>
    </FormControl>
  );
};

export default FormikCustomSelect;
