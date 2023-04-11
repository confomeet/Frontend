import { VisibilityIcon, VisibilityOffIcon } from "components/icons";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
} from "components/muiComponents";
import { Formik } from "formik";
import { useState } from "react";
import actions from "redux/actions";
import TextField from "../../../FormikComponents/textFields/TextField";
import { useStyles } from "../../../styles/generalStyle";
import {
  editPassInitialValues,
  getEditPassValidationSchema,
} from "../Users/UsersFromikUtils";
import FormikTextFeildGeneral from "FormikComponents/textFields/FormikTextFeildGeneral";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
const { editPassword } = actions;

const HandleUsersPass = (props) => {
  const classes = useStyles();

  const [showCurrPassword, setShowCurrPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const handleClickShowCurrPassword = () => {
    setShowCurrPassword(!showCurrPassword);
  };
  const handleClickShowNewPPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleClickShowConfPassword = () => {
    setShowConfPassword(!showConfPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmitPassword = async (values) => {
    let body = values;
    await window.dispatch(editPassword({ body }));
    props.onView();
  };

  return (
    <Grid container>
      <Formik
        initialValues={editPassInitialValues}
        enableReinitialize={true}
        onSubmit={onSubmitPassword}
        validationSchema={getEditPassValidationSchema}
      >
        {(formik) => {
          return (
            <Grid
              container
              item
              xs={12}
              md={12}
              sm={12}
              className={classes.inputWhiteBackground}
            >
              <Grid item xs={12} md={4} sm={6} className={classes.passFld}>
                <FormikTextFeildGeneral
                  name="currentPassword"
                  required
                  type={showCurrPassword ? "text" : "password"}
                  variant="standard"
                  label={Object.translate(`LABEL.CURRENT_PASSWORD`)}
                  InputProps={{
                    // disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowCurrPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.verticalPadding0}
                          tabIndex={-1}
                        >
                          {showCurrPassword ? (
                            <VisibilityIcon className={classes.redColor} />
                          ) : (
                            <VisibilityOffIcon className={classes.redColor} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6} className={classes.passFld}>
                <FormikTextFeildGeneral
                  required
                  label={Object.translate(`LABEL.NEW_PASSWORD`)}
                  variant="standard"
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  InputProps={{
                    // disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowNewPPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.verticalPadding0}
                          tabIndex={-1}
                        >
                          {showNewPassword ? (
                            <VisibilityIcon className={classes.redColor} />
                          ) : (
                            <VisibilityOffIcon className={classes.redColor} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6} className={classes.passFld}>
                <FormikTextFeildGeneral
                  required
                  variant="standard"
                  label={Object.translate(`LABEL.CONFIRM_PASSWORD`)}
                  name="confirmPassword"
                  type={showConfPassword ? "text" : "password"}
                  InputProps={{
                    // disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfPassword}
                          onMouseDown={handleMouseDownPassword}
                          className={classes.verticalPadding0}
                          tabIndex={-1}
                        >
                          {showConfPassword ? (
                            <VisibilityIcon className={classes.redColor} />
                          ) : (
                            <VisibilityOffIcon className={classes.redColor} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                style={{
                  padding: "0 16px",

                  display: "flex",
                  borderRadius: "0px !important",
                  justifyContent: "end",
                }}
              >
                <PrimaryButton
                  onClick={() => formik.submitForm()}
                  primaryButton={Object.translate(
                    props?.toggleAdd && props.toggleAdd
                      ? "BUTTONS.SAVE"
                      : "BUTTONS.SAVE"
                  )}
                />

                <SecondaryButton
                  disableElevation
                  onClick={() => props.onView && props.onView()}
                  secondaryButton={Object.translate("BUTTONS.CANCEL")}
                />
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default HandleUsersPass;
