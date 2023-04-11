import { Hidden, InputAdornment, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { memo, useEffect, useState } from "react";
import { BsCircleFill, BsFillTriangleFill } from "react-icons/bs";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import {
  MailOutlineIcon,
  PersonOutlineIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from "components/icons";
import { Box, Button, IconButton } from "components/muiComponents";
import { handleApiResponseMessage } from "redux/network/functions";
import { loadScriptByURL } from "utils";
import { phoneRegExp } from "../../components/shared/utils";
import actions from "../../redux/actions";
import loginStyles from "./style";

const SITE_KEY = "6LdlqJglAAAAAMJ5V_JQVOGVT_cPGnk-x07yoFRD";
const { signUp } = actions;
let initialValues = {
  name: "",
  email: "",
  phone: "",
  pasword: "",
  confirmPasword: "",
};

function SignUp() {
  const classes = loginStyles();
  const dispatch = useDispatch();
  const {
    settingsReducer: {
      settings: { authUser },
    },
  } = useSelector((state) => state);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required(Object.translate("WARNING.NAMEREQUIRED")),
    phone: Yup.string()
      .matches(phoneRegExp, Object.translate("WARNING.INVALIDPHONE"))
      .min(10, Object.translate("WARNING.INVALIDPHONE"))
      .required(Object.translate("WARNING.REQUIRED")),
    email: Yup.string()
      .email(Object.translate("WARNING.EMAILFORMAT"))
      .required(Object.translate("WARNING.REQUIRED")),
    pasword: Yup.string()
      .required(Object.translate("WARNING.REQUIRED"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[()"!@#_'+-/=?`|{}~£\$%\^&\*])(?=.{7,})/,
        Object.translate("WARNING.PASSREQUIRMENTS")
      ),
    confirmPasword: Yup.string()
      .oneOf([Yup.ref("pasword"), null], Object.translate("WARNING.MATCHPASS"))
      .required(Object.translate("WARNING.REQUIRED")),
  });

  const onSubmit = async (values) => {
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(SITE_KEY, { action: "signup" })
        .then((reCaptchaToken) => {
          dispatch(
            signUp({
              data: {
                fullName: values.name,
                email: values.email,
                password: values.pasword,
                confirmPassword: values.confirmPasword,
                phoneNumber: values.phone,
                reCaptchaToken,
              },
            })
          );
        })
        .catch(
          async (err) =>
            await handleApiResponseMessage({
              messageArr: ["reCaptch ERROR"],
              success: false,
              disableLoader: true,
            })
        );
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmedPassword = () => {
    setShowConfirmedPassword(!showConfirmedPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const url = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    loadScriptByURL("recaptcha-lilacmeet-key", url);
  }, []);

  useEffect(() => {
    (async () => {
      if (authUser) return window.navigateToDefault();
    })();
  }, [authUser]);

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
            <Typography variant="h2" component="h2" className="signup">
              {Object.translate("BUTTONS.SIGNUP")}
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
          enableReinitialize={false}
        >
          {({
            isValid,
            dirty,
            values,
            submitForm,
            setFieldValue,
            setFieldError,
            errors,
            touched,
          }) => (
            <Form>
              <Box display="flex" flexDirection="column">
                <Field
                  component={TextField}
                  className="input"
                  name="name"
                  variant="standard"
                  type="text"
                  placeholder={Object.translate("LABEL.NAME")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <PersonOutlineIcon />
                      </InputAdornment>
                    ),
                  }}
                  onKeyUp={(e) => {
                    if (e.which === 13) {
                      submitForm();
                    }
                  }}
                />
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
                  onKeyUp={(e) => {
                    if (e.which === 13) {
                      submitForm();
                    }
                  }}
                />
                <Field
                  component={PhoneInput}
                  name="phone"
                  type="text"
                  id="phone"
                  variant="standard"
                  style={{ direction: "ltr" }}
                  className="input"
                  onChange={(e) => {
                    setFieldValue("phone", e);
                    if (e) {
                      if (!isPossiblePhoneNumber(e))
                        setFieldError(
                          "phone",
                          Object.translate("WARNING.ADDPHONE")
                        );
                    }
                  }}
                  placeholder={Object.translate("LABEL.PHONE")}
                  defaultCountry="AE"
                  international
                  value={values.phone}
                  onKeyUp={(e) => {
                    if (e.which === 13) {
                      submitForm();
                    }
                  }}
                />
                {errors?.phone && touched.phone ? (
                  <div className={classes.inputfeedback}>{errors.phone}</div>
                ) : null}

                <Field
                  style={{ marginTop: "30px" }}
                  component={TextField}
                  className="input"
                  name="pasword"
                  variant="standard"
                  autoComplete="new-password"
                  type={showPassword ? "text" : "password"}
                  placeholder={Object.translate("FULL_SENTENCE.ENTER_PASSWORD")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.verticalPadding0}
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <VisibilityIcon className={classes.redColor} />
                          ) : (
                            <VisibilityOffIcon className={classes.redColor} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onKeyUp={(e) => {
                    if (e.which === 13) {
                      submitForm();
                    }
                  }}
                />
                <Field
                  component={TextField}
                  className="input"
                  name="confirmPasword"
                  variant="standard"
                  autoComplete="new-password"
                  type={showConfirmedPassword ? "text" : "password"}
                  placeholder={Object.translate(
                    "FULL_SENTENCE.CONFIRM_PASSWORD"
                  )}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmedPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.verticalPadding0}
                          tabIndex={-1}
                        >
                          {showConfirmedPassword ? (
                            <VisibilityIcon className={classes.redColor} />
                          ) : (
                            <VisibilityOffIcon className={classes.redColor} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  onKeyUp={(e) => {
                    if (e.which === 13) {
                      submitForm();
                    }
                  }}
                />
                <Box marginY={2}>
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={submitForm}
                    disabled={!isValid || !dirty}
                  >
                    {Object.translate("BUTTONS.SIGNUP")}
                  </Button>
                </Box>
              </Box>
              <Box marginY={1}>
                {Object.translate("MAIN.HAVE_ACCOUNT")}&nbsp;
                <Link to="/login" className="link ">
                  {Object.translate("BUTTONS.SIGNIN")}
                </Link>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default memo(SignUp);
