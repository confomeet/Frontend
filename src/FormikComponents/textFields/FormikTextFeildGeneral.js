import { Box } from "components/muiComponents";
import { TextField } from "formik-material-ui";
import { Field } from "formik";
import FormikTextFeildGeneralStyles from "./FormikTextFeildGeneralStyles";

export default function FormikTextFeildGeneral(props) {
  const classes = FormikTextFeildGeneralStyles();

  return (
    <Box className={classes.textFeildGeneral}>
      <Field
        component={TextField}
        {...props}
        label={props.label}
        variant="standard"
        type={props.type || "text"}
        fullWidth
      />
    </Box>
  );
}
