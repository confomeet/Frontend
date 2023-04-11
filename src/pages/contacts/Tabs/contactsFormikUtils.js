import * as Yup from "yup";
import { customRegex } from "constantData/customRegex";

export const contactsInitialValues = {
  contactId: null,
  displayName: "",
  mobile: "",
  home: "",
  office: "",
  email: "",
  country: null,
  city: "",
  website: "",
  address: "",
  jobDesc: "",
  specialization: "",
  directManageId: null,
  companyId: null,
  sectionId: null,
  shareWith: true,
  sectionIds: [],
  isManager: false,
};

export const getContactsValidationSchema = () =>
  Yup.object({
    email: Yup.string()
      .email(Object.translate("WARNING.EMAILFORMAT"))
      .required(Object.translate("WARNING.REQUIRED")),
    mobile: Yup.string()
      .matches(
        customRegex.phoneRegExp,
        Object.translate("WARNING.INVALIDPHONE")
      )
      .min(10, Object.translate("WARNING.INVALIDPHONE"))
      .required(Object.translate("WARNING.REQUIRED")),
    displayName: Yup.string().required(Object.translate("WARNING.REQUIRED")),
  });
