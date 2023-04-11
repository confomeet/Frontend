import { Grid } from "components/muiComponents";
import { Formik } from "formik";
import { smtpInitialValues, getSmtpValidationSchema } from "./SmtpFormikUtils";
import FormikTextFeildGeneral from "FormikComponents/textFields/FormikTextFeildGeneral";
import { SmtpContext } from "contextProviders";
import { useContext } from "react";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
const fieldsArr = ["displayName", "email", "password", "host", "port"];

const HandleSmtpConfig = () => {
  const contextProps = useContext(SmtpContext);

  const initialValues = Object.isObjectEmpty(contextProps?.selectedObj)
    ? smtpInitialValues
    : contextProps?.selectedObj;
  const validationSchema = getSmtpValidationSchema();

  const onSubmit = async (values) => {
    window.dispatchWantedAction("HANDLE_SMTP_CONFIG", { body: values });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      enableReinitialize={true}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Grid container spacing={2}>
            {fieldsArr.map((field, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={6} lg={6}>
                  <FormikTextFeildGeneral
                    name={field}
                    required
                    variant="standard"
                    label={Object.translate(`LABEL.${field.toUpperCase()}`)}
                    type={field === "port" ? "number" : "text"}
                  />
                </Grid>
              );
            })}
            <Grid
              item
              lg={12}
              md={12}
              sm={12}
              style={{
                gap: "10px",
                display: "flex",
                borderRadius: "0px !important",
                justifyContent: "flex-end",
                marginTop: "48px",
              }}
            >
              <PrimaryButton
                onClick={() => formik.submitForm()}
                primaryButton={Object.translate("BUTTONS.EDIT")}
              />
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
};

export default HandleSmtpConfig;
