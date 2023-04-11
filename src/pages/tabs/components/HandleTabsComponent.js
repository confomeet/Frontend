import FormikAutoComplete from "FormikComponents/select/FormikAutoComplete";
import { Button, Grid, InputLabel } from "components/muiComponents";
import FormikTranslation from "components/translations/FormikTranslation";
import { Formik } from "formik";
import TextField from "../../../FormikComponents/textFields/TextField";
import { useStyles } from "../../../styles/generalStyle";
import FormikTextFeildGeneral from "FormikComponents/textFields/FormikTextFeildGeneral";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
export default function HandleTabsComponent(props) {
  const classes = useStyles();
  let parentId = props.parentIdArr;
  return (
    <Grid container className={classes.Textcontainer}>
      <Formik
        initialValues={props.initialValues}
        onSubmit={props.handleButtonClick}
        enableReinitialize={true}
        validationSchema={props.validationSchema}
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
              <FormikTranslation title={Object.translate("LABEL.TITLE")} />
              <Grid
                item
                xs={12}
                md={4}
                sm={4}
                style={{ marginTop: "25px" }}
                className={classes.numberFeild}
              >
                <TextField
                  variant="standard"
                  label={Object.translate(`LABEL.ORDER`)}
                  name="tabOrder"
                  type="number"
                />
              </Grid>
              <Grid item xs={12} md={4} sm={4} style={{ marginTop: "25px" }}>
                <FormikTextFeildGeneral
                  label={Object.translate(`LABEL.LINK`)}
                  name="link"
                  type="text"
                  className={classes.linkFieldAlign}
                />
              </Grid>
              <Grid item xs={12} md={4} sm={4} style={{ marginTop: "25px" }}>
                <FormikTextFeildGeneral
                  label={Object.translate(`LABEL.ICON`)}
                  name="iconString"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} md={6} sm={6} style={{ marginTop: "25px" }}>
                <FormikAutoComplete
                  name="parentId"
                  label={Object.translate(`LABEL.TAB_PARENT_ID`)}
                  options={parentId}
                  multiple={false}
                  style={{
                    width: "97%",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6} sm={6} style={{ marginTop: "25px" }}>
                <FormikAutoComplete
                  name="rolesId"
                  label={Object.translate("LABEL.USERROLE")}
                  options={props.roles}
                  multiple={true}
                  style={{
                    width: "98%",
                  }}
                />
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                sm={12}
                className={classes.buttonsHandlerGrid}
              >
                <PrimaryButton
                  primaryButton={Object.translate(
                    props.toggleAdd ? "BUTTONS.SAVE" : "BUTTONS.EDIT"
                  )}
                  onClick={formik.submitForm}
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
}
