import PhotoCamera from "@mui/icons-material/PhotoCamera";
import FormikPhoneNumberField from "FormikComponents/textFields/FormikPhoneNumberField";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Typography,
} from "components/muiComponents";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import { useStyles } from "../../../styles/generalStyle";
import { userStyle } from "../Users/style";
import FormikTextFeildGeneral from "FormikComponents/textFields/FormikTextFeildGeneral";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
import { editProfilePhoto } from "redux/network/users";

const { editUser } = actions;

const HandleEdit = (props) => {
  const {
    settingsReducer: {
      settings: { authUser },
    },
    users,
  } = useSelector((state) => state);
  const classes = useStyles();
  const usersClasses = userStyle();
  const [file, setFile] = useState([]);

  const handleChange = async (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    let body = new FormData();
    body.append("UserPhoto", e.target.files[0]);
    await editProfilePhoto(body);
  };

  const onSubmit = async (values) => {
    const roles = Array.isArray(values?.roles)
      ? values?.roles?.map((i) => {
          return i?.value;
        })
      : [];
    let body = { ...values, roles };
    await window.dispatch(editUser({ body, id: authUser?.userId }));
    props.onView();
  };

  useEffect(() => {
    if (!users?.getProfileImgComplete) return setFile([]);
    let file = new File([users?.getProfileImgComplete], "");
    setFile(URL.createObjectURL(file));
  }, [users?.getProfileImgComplete]);

  return (
    <Grid container className={usersClasses.userComponentRole}>
      <Grid item xs={12} lg={4} md={4} sm={3.5}>
        <Box className={classes.avatarBox}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept={[".png", ".jpg", ".jpeg", ".tiff", ".apng", ".pjpeg"]}
              type="file"
              onChange={handleChange}
            />
            <PhotoCamera />
          </IconButton>
          <Avatar className={classes.avatar}>
            <img src={file} className={classes.imgUpload} />
          </Avatar>
          <Typography className={classes.fullNameTypo}>
            {users?.getProfileInfoComplete?.fullName}
          </Typography>
        </Box>
      </Grid>
      <Formik
        initialValues={props.initialValues}
        enableReinitialize={true}
        onSubmit={onSubmit}
        validationSchema={props.validationSchema}
      >
        {(formik) => {
          return (
            <Grid
              container
              item
              xs={12}
              lg={8}
              md={8}
              sm={12}
              className={classes.inputBackground}
            >
              <Grid item xs={12} md={6} sm={6} lg={12}>
                <FormikTextFeildGeneral
                  label={Object.translate("LABEL.USERFULLNAME")}
                  name="fullName"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={12}>
                <FormikTextFeildGeneral
                  label={Object.translate("LABEL.USERNAME")}
                  name="userName"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={6} sm={6} lg={12}>
                <FormikTextFeildGeneral
                  label={Object.translate("LABEL.EMAIL")}
                  name="email"
                  type="text"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sm={6}
                lg={12}
                className={classes.infoBoxPhone}
              >
                <Typography className={usersClasses.userPhoneEdit}>
                  {Object.translate(`LABEL.PHONE`)}
                </Typography>
                <FormikPhoneNumberField
                  variant="standard"
                  name="phoneNumber"
                  {...formik}
                  className={usersClasses.phoneNumberFld}
                  value={formik?.values?.phoneNumber}
                />
                {formik.errors?.phoneNumber && formik.touched.phoneNumber ? (
                  <div style={{ color: "red" }}>
                    {formik.errors?.phoneNumber}
                  </div>
                ) : null}
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                style={{
                  display: "flex",
                  borderRadius: "0px !important",
                  marginTop: "20px",
                }}
              >
                <PrimaryButton
                  primaryButton={Object.translate(
                    props?.toggleAdd && props.toggleAdd
                      ? "BUTTONS.SAVE"
                      : "BUTTONS.SAVE"
                  )}
                  onClick={() => formik.submitForm()}
                />

                <SecondaryButton
                  secondaryButton={Object.translate("BUTTONS.CANCEL")}
                  disableElevation
                  onClick={() => props.onView && props.onView()}
                />
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default HandleEdit;
