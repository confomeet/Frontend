import { Button, Grid, Box } from "components/muiComponents";
import FormikTranslation from "components/translations/FormikTranslation";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import actions from "redux/actions";
import { useStyles } from "../../../styles/generalStyle";
import {
  eventsTypesInitialValues,
  getEventsValidationSchema,
} from "../eventsFormikUtils";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
const { addEventsTypes, editEventsTypes } = actions;

const HandleEventsTypes = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialValues = props.toggleAdd
    ? eventsTypesInitialValues
    : {
        // ...props.editObj,
        name: props?.editObj?.value || "",
        enName: props?.editObj?.value || "",
      };
  const validationSchema = getEventsValidationSchema();

  const onSubmit = async (values) => {
    let body = [
      {
        ar: values.name,
        en: values.enName,
      },
    ];

    let id = props.selectedObjIds[0];
    if (props.toggleAdd) {
      dispatch(addEventsTypes({ body }));
      return;
    }
    if (props.toggleEdit) {
      dispatch(editEventsTypes({ id, body }));
      return;
    }
  };
  return (
    <Grid container className={classes.HandleEventsContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize={true}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Box className={classes.formikTranslationWhiteFields}>
              <FormikTranslation title={Object.translate("LABEL.TITLE")} />
              <Box className={classes.buttonsHandlerGrid}>
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
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Grid>
  );
};

export default HandleEventsTypes;
