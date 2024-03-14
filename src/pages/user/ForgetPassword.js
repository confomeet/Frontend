import { MailOutlineIcon } from "components/icons";
import {
  Box,
  Button,
  InputAdornment,
} from "components/muiComponents";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import actions from "../../redux/actions";
import loginStyles from "./style";
import FormPage from "../templates/form";

const { forgotPassword } = actions;

let initialValues = {
  email: "",
};

function ForgetPassword() {
  const classes = loginStyles();
  const dispatch = useDispatch();
  const { settingsReducer } = useSelector((state) => state);
  let isRTL = settingsReducer.settings.isRTL;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(
        isRTL ? "يرجى إدخال الإيميل بالصيغة الصحيحة" : "Invalid email format"
      )
      .required(isRTL ? "يرجى إدخال الإيميل" : "Email is Required"),
  });

  const onSubmit = async (values) => {
    values.email &&
      dispatch(
        forgotPassword({
          data: {
            email: values.email,
          },
        })
      );
  };

  return (
    <FormPage formName={Object.translate("PAGES.FORGETPASSWORD")}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid, dirty, submitForm }) => (
          <Form className={classes.loginRoot}>
            <Box display="flex" flexDirection="column">
              <Field
                component={TextField}
                className="input"
                name="email"
                type="email"
                variant="standard"
                placeholder={Object.translate("LABEL.EMAIL")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  ),
                  autoComplete: "off",
                }}
              />
              <Box marginY={2}>
                <Button
                  variant="contained"
                  className="submitBtn"
                  onClick={submitForm}
                  disabled={!isValid || !dirty}
                >
                  {Object.translate("LABEL.SUBMIT")}
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </FormPage>
  );
}

export default ForgetPassword;
