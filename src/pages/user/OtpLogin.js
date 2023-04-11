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

const { verifyUserCredentials, verifyOtp } = actions;

function OtpLogin() {
  const classes = loginStyles();
  const {
    settingsReducer: { settings },
  } = useSelector((state) => state);

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
        email: Yup.string().required(
          isRTL
            ? "يرجى إدخال الإيميل أو اسم المستخدم"
            : "Email or Username is Required"
        ),
        pasword: Yup.string().required(
          isRTL ? "يرجى إدخال كلمة المرور" : "Password Is Required"
        ),
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
        verifyUserCredentials({
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
      verifyUserCredentials({
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
              {Object.translate("BUTTONS.SIGNIN")}
            </Typography>
          </Box>
        </Box>
      </Hidden>

      <Box
        sx={{ width: "100%" }}
        className="loginContent d-flex-column center-content"
      >
        <Box className="lilacLogo d-flex center-content">
          <img src={window.officialLogo} alt="lilacLogo" />
        </Box>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {(formik) => (
            <Form>
              <Box display="flex" flexDirection="column">
                {!isVerified ? (
                  <>
                    <TextField
                      placeholder={Object.translate("LABEL.EMAIL_USERNAME")}
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
                <Box marginY={2}>
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={formik?.submitForm}
                    disabled={!formik?.isValid || !formik?.dirty}
                  >
                    {Object.translate("BUTTONS.SIGNIN")}
                  </Button>
                </Box>
                {!isVerified ? (
                  <Box marginY={1}>
                    {Object.translate("MAIN.NO_ACCOUNT")}&nbsp;
                    <Link to="/signup" className="link ">
                      {Object.translate("BUTTONS.SIGNUP")}
                    </Link>
                  </Box>
                ) : (
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
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default OtpLogin;
