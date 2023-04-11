import { Hidden, InputAdornment } from "@mui/material";
import { VisibilityIcon, VisibilityOffIcon } from "components/icons";
import { Box, Button, IconButton, Typography } from "components/muiComponents";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useEffect, useState } from "react";
import { BsCircleFill, BsFillTriangleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import actions from "../../redux/actions";
import { getSearchQueries } from "../../redux/network/functions";
import loginStyles from "./style";

const { resetPassword } = actions;

let initialValues = {
  password: "",
  passwordConfirmation: "",
};

function ResetPassword() {
  const classes = loginStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const { settingsReducer, users } = useSelector((state) => state);
  let isRTL = settingsReducer.settings.isRTL;

  const validationSchema = Yup.object({
    password: Yup.string().required(
      isRTL ? "يرجى إدخال كلمة المرور" : "Password Is Required"
    ),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      isRTL ? "يرجى إدخال كلمة مرور مطابقة" : "Password must match"
    ),
  });

  const onSubmit = async (values) => {
    const { token, email } = getSearchQueries();

    values.passwordConfirmation &&
      values.password &&
      dispatch(
        resetPassword({
          data: {
            email: email,
            token: token,
            password: values.password,
            confirmPassword: values.passwordConfirmation,
          },
        })
      );
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    (async () => {
      if (users.resetPasswordDone.code) {
        if (users.resetPasswordDone.code === 200) {
          window.navigateTo("/login");
        }
      }
    })();
  }, [users.resetPasswordDone]);

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
          {({ isValid, dirty, values, submitForm }) => (
            <Form>
              <Box display="flex" flexDirection="column">
                <Field
                  component={TextField}
                  className="input"
                  name="password"
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
                />

                <Field
                  component={TextField}
                  className="input"
                  name="passwordConfirmation"
                  variant="standard"
                  autoComplete="new-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={Object.translate(
                    "FULL_SENTENCE.CONFIRM_PASSWORD"
                  )}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.verticalPadding0}
                        >
                          {showConfirmPassword ? (
                            <VisibilityIcon className={classes.redColor} />
                          ) : (
                            <VisibilityOffIcon className={classes.redColor} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box marginY={2}>
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={submitForm}
                    disabled={!isValid || !dirty}
                  >
                    {"Reset Password"}
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

export default ResetPassword;
