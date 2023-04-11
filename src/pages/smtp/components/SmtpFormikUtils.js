import * as Yup from "yup";
import { customRegex } from "constantData/customRegex";

export const smtpInitialValues = {
  displayName: "",
  email: "",
  password: "",
  host: "",
  port: "",
};

export const getSmtpValidationSchema = () =>
  Yup.object({
    displayName: Yup.string().required(Object.translate("LABEL.AR_REQUIRED")),
    email: Yup.string()
      .email(Object.translate("WARNING.EMAILFORMAT"))
      .required(Object.translate("WARNING.REQUIRED")),
    password: Yup.string()
      .required(Object.translate("WARNING.REQUIRED"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{7,})/,
        Object.translate("WARNING.PASSREQUIRMENTS")
      ),
    host: Yup.string()
      .required(Object.translate("WARNING.REQUIRED"))
      .matches(
        customRegex.domainRegex,
        Object.translate("WARNING.INVALID_DOMAIN")
      ),
    port: Yup.number()
      .nullable()
      .integer(Object.translate("WARNING.PORT_DECIMAL"))
      .required(Object.translate("WARNING.REQUIRED")),
  });
