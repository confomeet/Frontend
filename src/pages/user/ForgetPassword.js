import { MailOutlineIcon } from "components/icons";
import {
  Box,
  Button,
  Hidden,
  InputAdornment,
  Typography,
} from "components/muiComponents";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { BsCircleFill, BsFillTriangleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import actions from "../../redux/actions";
import loginStyles from "./style";

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
    <Box className={classes.loginRoot}>
      <Hidden mdDown>
        <Box className="connect-bg">
          <Box className="gradient"></Box>
          <Box className="bordered"></Box>
          <Box className="image">
            <span className="corner"></span>
            <span className="circle">
              <BsCircleFill />
            </span>
            <span className="circle-small">
              <BsCircleFill />
            </span>
            <span className="triangle">
              <BsFillTriangleFill />
            </span>
            <span className="triangle-small">
              <BsFillTriangleFill />
            </span>
            <Typography variant="h2" component="h2">
              {Object.translate("FULL_SENTENCE.RESET_PASSWORD")}
            </Typography>
          </Box>
        </Box>
      </Hidden>
      <Box
        sx={{ width: "100%" }}
        className="loginContent d-flex-column center-content"
      >
        <Box className="lilacLogo d-flex center-content">
          <img src={`${window.officialLogo}`} alt="lilacLogo" />
        </Box>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isValid, dirty, submitForm }) => (
            <Form>
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
      </Box>
    </Box>
  );
}

export default ForgetPassword;
