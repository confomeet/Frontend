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
import { Field, Form, Formik } from "formik";
import { CheckboxWithLabel, TextField } from "formik-mui";
import { useEffect, useState } from "react";
import { BsCircleFill, BsFillTriangleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentUserIP } from "redux/network/functions";
import { UAParser } from "ua-parser-js";
import * as Yup from "yup";
import actions from "../../redux/actions";
import loginStyles from "./style";

const { logIn, logInDone } = actions;

let initialValues = {
  email: "",
  pasword: "",
  remember: false,
};

function Login() {
  const classes = loginStyles();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const {
    settingsReducer: { settings },
    users,
  } = useSelector((state) => state);

  const { isRTL, authUser } = settings;

  const [ip, setIP] = useState("0");

  var parser = UAParser();

  const profile = JSON.parse(localStorage.getItem("profile"));

  const validationSchema = Yup.object({
    email: Yup.string().required(
      isRTL
        ? "يرجى إدخال الإيميل أو اسم المستخدم"
        : "Email or Username is Required"
    ),
    pasword: Yup.string().required(
      isRTL ? "يرجى إدخال كلمة المرور" : "Password Is Required"
    ),
  });

  const onSubmit = async (values) => {
    const lang = isRTL ? "ar" : "en";
    const remember = values.remember;

    const currentIp = ip.IPv4;

    values.email &&
      values.pasword &&
      dispatch(
        logIn({
          data: {
            email: values.email,
            password: values.pasword,
            UA: {
              BrowserName: parser.browser.name,
              BrowserVersion: parser.browser.version,
              Device:
                parser.device.vendore +
                "-" +
                parser.device.type +
                "-" +
                parser.device.model,
              OS: parser.os.name + "-" + parser.os.version,
            },
          },
          remember,
          lang,
          IP: currentIp,
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
      let res = await getCurrentUserIP();
      setIP(res);
    })();
  }, []);

  useEffect(() => {
    if (profile) window.navigateTo("/panel");
  }, []);

  useEffect(() => {
    (async () => {
      if (!Object.keys(users.logInDone).length) return;

      if (users.logInDone.errors || users.logInDone.error) {
        let msg = "";
        if (users.logInDone.error) {
          if (Array.isArray(users.logInDone.error))
            users.logInDone.error.map((err) => (msg += `${err}`));
          else msg = users.logInDone.error;
        } else if (users.logInDone.errors) {
          for (let err in users.logInDone.errors) {
            users.logInDone.errors[err].map((er) => (msg += `${er}`));
          }
        }
      } else if (users.logInDone.statusCode) {
        if (users.logInDone.statusCode.id < 0) {
          dispatch(
            logInDone({
              data: {},
            })
          );
        } else {
          dispatch(
            logInDone({
              data: {},
            })
          );
          window.navigateTo("/panel");
        }
      }
    })();
  }, [users.logInDone]);

  useEffect(() => {
    (async () => {
      if (authUser) window.navigateToDefault();
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
        >
          {({ isValid, dirty, values, submitForm }) => (
            <Form>
              <Box display="flex" flexDirection="column">
                <Field
                  placeholder={Object.translate("LABEL.EMAIL_USERNAME")}
                  component={TextField}
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
                      submitForm();
                    }
                  }}
                />
                <Field
                  component={TextField}
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
                <Box
                  display="flex "
                  justifyContent="space-between"
                  className=" align-center"
                >
                  {/* <Field
                    name="remember"
                    type="checkbox"
                    component={CheckboxWithLabel}
                    Label={{ label: Object.translate("LABEL.REMEMBER") }}
                  /> */}
                  <Link to="/ForgetPassword" className="link ">
                    {Object.translate("FULL_SENTENCE.FORGET_PASSWORD")}
                  </Link>
                </Box>
                <Box marginY={2}>
                  <Button
                    variant="contained"
                    className="submitBtn"
                    onClick={submitForm}
                    disabled={!isValid || !dirty}
                  >
                    {Object.translate("BUTTONS.SIGNIN")}
                  </Button>
                </Box>
                <Box marginY={1}>
                  {Object.translate("MAIN.NO_ACCOUNT")}&nbsp;
                  <Link to="/signup" className="link ">
                    {Object.translate("BUTTONS.SIGNUP")}
                  </Link>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Login;
