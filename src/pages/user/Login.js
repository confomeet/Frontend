import CheckboxWithLabel from "FormikComponents/checkbox/CheckboxWithLabel";
import TextField from "FormikComponents/textFields/TextField";
import {
  MailOutlineIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from "components/icons";
import {
  Box,
  Button,
  Hidden,
  IconButton,
  InputAdornment,
  Typography,
} from "components/muiComponents";
import { Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { AiTwotoneLock } from "react-icons/ai";
import { BsCircleFill, BsFillTriangleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserIP } from "redux/network/functions";
import { UAParser } from "ua-parser-js";
import * as Yup from "yup";
import actions from "../../redux/actions";
import loginStyles from "./style";
import FormPage from "../templates/form";

const { logIn, getAuthProviders, logInWithProvider, verifyOtp } = actions;

function Login() {
  const classes = loginStyles();
  const {
    settingsReducer: { settings },
    users,
  } = useSelector((state) => state);

  const authProviders = users.getAuthProvidersComplete;
  const { isRTL, authUser } = settings;
  const [showPassword, setShowPassword] = useState(false);
  const [ip, setIP] = useState("0");
  const [isVerified, setIsVerified] = useState(false);
  var parser = UAParser();
  const profile = JSON.parse(localStorage.getItem("profile"));

  const initialValues = !isVerified
    ? {
        email: "",
        pasword: "",
        remember: false,
      }
    : {
        verifyCode: "",
      };

  const validationSchema = !isVerified
    ? Yup.object({
        email: Yup
          .string()
          .required(Object.translate("WARNING.EMAIL_REQUIRED"))
          .email(Object.translate("WARNING.EMAILFORMAT")),
        pasword: Yup.string().required(Object.translate("WARNING.PASSWORD_REQUIRED"))
      })
    : Yup.object({
        verifyCode: Yup.string().required(
          isRTL ? "يرجى إدخال رمز التحقق" : " Verification Code is Required"
        ),
      });

  const onSubmit = async (values) => {
    const currentIp = ip.IPv4;

    if (!isVerified) {
      if (!values.email || !values.pasword) return;
      window.dispatch(
        logIn({
          body: {
            email: values.email,
            password: values.pasword,
            ua: {
              browserName: parser.browser.name,
              browserVersion: parser.browser.version,
              device:
                parser.device.vendore +
                "-" +
                parser.device.type +
                "-" +
                parser.device.model,
              os: parser.os.name + "-" + parser.os.version,
              ip: currentIp,
            },
          },
        })
      );
    }
    if (isVerified)
      window.dispatch(
        verifyOtp({
          body: {
            userId: JSON.parse(sessionStorage.getItem("OTP_INFO"))?.userId,
            number: values.verifyCode,
            ua: {
              browserName: parser.browser.name,
              browserVersion: parser.browser.version,
              device:
                parser.device.vendore +
                "-" +
                parser.device.type +
                "-" +
                parser.device.model,
              os: parser.os.name + "-" + parser.os.version,
              ip: currentIp,
            },
          },
        })
      );
  };

  const handleResendVerificationCode = () => {
    let otpUserInfo = JSON.parse(sessionStorage.getItem("OTP_INFO"));
    if (!otpUserInfo?.email || !otpUserInfo?.password) return;
    const currentIp = ip.IPv4;
    window.dispatch(
      logIn({
        body: {
          email: otpUserInfo?.email,
          password: otpUserInfo?.password,
          ua: {
            browserName: parser.browser.name,
            browserVersion: parser.browser.version,
            device:
              parser.device.vendore +
              "-" +
              parser.device.type +
              "-" +
              parser.device.model,
            os: parser.os.name + "-" + parser.os.version,
            ip: currentIp,
          },
        },
      })
    );
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSignInWithProvder = (provider) => {
    window.dispatch(logInWithProvider({
      body: {provider}
    }));
  };

  useEffect(() => {
    (async () => {
      var res = await getCurrentUserIP();
      setIP(res);
      if (profile) window.navigateTo("/panel");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (authUser) return window.navigateToDefault();
    })();
  }, [authUser]);

  useEffect(() => {
    (async () => {
      if (sessionStorage.getItem("OTP_INFO")) return setIsVerified(true);
      setIsVerified(false);
    })();
  }, [sessionStorage.getItem("OTP_INFO")]);

  useEffect(() => {
    if (!authProviders)
      window.dispatch(getAuthProviders());
  }, [authProviders]);

  return (
    <FormPage formName={Object.translate("PAGES.SIGNIN")}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {(formik) => (
          <Form className={classes.loginRoot}>
              {!isVerified ? (
                <>
                  <TextField
                    placeholder={Object.translate("LABEL.EMAIL")}
                    className="input"
                    name="email"
                    type="email"
                    variant="standard"
                    InputProps={{
                      autoComplete: "new-password",
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailOutlineIcon />
                        </InputAdornment>
                      ),
                    }}
                    autoComplete="new-password"
                    onKeyUp={(e) => {
                      if (e.which === 13) {
                        formik?.submitForm();
                      }
                    }}
                  />
                  <TextField
                    placeholder={Object.translate("LABEL.PASSWORD")}
                    className="input"
                    name="pasword"
                    variant="standard"
                    autoComplete="new-password"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      autoComplete: "new-password",
                      startAdornment: (
                        <InputAdornment position="start" tabIndex={-1}>
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
                              <VisibilityOffIcon
                                className={classes.redColor}
                              />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    onKeyUp={(e) => {
                      if (e.which === 13) {
                        formik?.submitForm();
                      }
                    }}
                  />
                  <Box
                    display="flex "
                    justifyContent="space-between"
                    className=" align-center"
                  >
                    {/* <CheckboxWithLabel
                      name="remember"
                      type="checkbox"
                      Label={{ label: Object.translate("LABEL.REMEMBER") }}
                    /> */}
                    <Link to="/ForgetPassword" className="link ">
                      {Object.translate("FULL_SENTENCE.FORGET_PASSWORD")}
                    </Link>
                  </Box>
                </>
              ) : (
                <Box display="flex" flexDirection="column">
                  <TextField
                    placeholder={Object.translate("LABEL.VERIFICATION_CODE")}
                    className="input"
                    name="verifyCode"
                    type="text"
                    variant="standard"
                    InputProps={{
                      autoComplete: "new-password",
                      startAdornment: (
                        <InputAdornment position="start">
                          <AiTwotoneLock />
                        </InputAdornment>
                      ),
                    }}
                    autoComplete="new-password"
                    onKeyUp={(e) => {
                      if (e.which === 13) {
                        formik?.submitForm();
                      }
                    }}
                  />
                </Box>
              )}
              <Box marginY="4em">
                <Button
                  variant="contained"
                  className="submitBtn"
                  onClick={formik?.submitForm}
                  disabled={!formik?.isValid || !formik?.dirty}
                >
                  {Object.translate("BUTTONS.SIGNIN")}
                </Button>
                {!isVerified && authProviders && authProviders.map(
                  provider => <Button
                    variant="contained"
                    className="submitBtn"
                    key={provider.name}
                    sx={{ marginTop: "1em" }}
                    onClick={() => handleSignInWithProvder(provider)}>
                      {Object.translate("BUTTONS.SIGN_IN_WITH") + provider.name}
                  </Button>
                )}
              </Box>
              {isVerified && (
                <Box marginY={1}>
                  <Typography
                    className="link"
                    sx={{ cursor: "pointer", width: "fit-content" }}
                    onClick={handleResendVerificationCode}
                  >
                    {Object.translate("LABEL.RESEND_VERIFICATION_CODE")}
                  </Typography>
                </Box>
              )}
          </Form>
        )}
      </Formik>
    </FormPage>
  );
}

export default Login;
