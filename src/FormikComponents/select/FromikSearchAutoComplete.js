import { TextField, Box } from "components/muiComponents";
import { Field, Form } from "formik";
import { fieldToTextField } from "formik-mui";
import { FormikAutocomplete } from "../FormikMui";
import useStyles from "./FormikSelectDropdownFeildStyle";
import { Chip } from "components/muiComponents";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

const FormikAutoCompleteFeild = ({
  textFieldProps,
  style,
  label,
  ...props
}) => {
  const classes = useStyles();
  const {
    form: { setTouched, setFieldValue },
  } = props;
  const { error, helperText, ...field } = fieldToTextField(props);
  const { name } = field;
  return (
    <FormikAutocomplete
      {...props}
      {...field}
      onInputChange={props?.onInputChange && props?.onInputChange}
      onChange={(_, value) => {
        setFieldValue(
          name,
          props?.filterMultiById
            ? [...new Map(value.map((item) => [item.id, item])).values()]
            : value
        );
      }}
      onBlur={() => setTouched({ [name]: true })}
      getOptionSelected={(item, current) => item.value === current.value}
      getOptionLabel={(item, i) =>
        item?.label || item?.text || item?.fullName || item?.description || ``
      }
      disableClearable={props.disableClearable}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={index}
            variant="outlined"
            label={
              option?.label ||
              option?.text ||
              option?.fullName ||
              option?.description ||
              ``
            }
            clickable={true}
            deleteIcon={
              <Box sx={{ display: "flex" }}>
                <HighlightOffTwoToneIcon
                  sx={{ marginInline: "0 7px !important" }}
                  onClick={() =>
                    props?.handleChipClear && props?.handleChipClear(option)
                  }
                />
              </Box>
            }
            disabled={props.chipDisabled}
          />
        ))
      }
      renderOption={(props, item) => (
        <Box {...props} display="flex">
          <Box className={classes.optionsStyle}>
            {item?.text || item?.label || item?.fullName}&nbsp;
            {(item?.description || item?.email) &&
              `(${item?.description || item?.email})`}
          </Box>
        </Box>
      )}
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

export default function FromikSearchAutoComplete(props) {
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
