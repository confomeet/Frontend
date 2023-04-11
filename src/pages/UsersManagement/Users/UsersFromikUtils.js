import * as Yup from "yup";
import { customRegex } from "constantData/customRegex";

export const usersInitialValues = {
  phoneNumber: "",
  email: "",
  userName: "",
  fullName: "",
  profileStatus: 0,
  roles: [],
  userGroups: [],
};
export const usersGroupsInitialValues = {
  groupName: "",
  description: "",
  userIds: [],
};
export const editPassInitialValues = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const getEditPersonalProfileValidationSchema = () =>
  Yup.object({
    fullName: Yup.string().required(Object.translate("WARNING.NAMEREQUIRED")),
    phoneNumber: Yup.string()
      .matches(
        customRegex.phoneRegExp,
        Object.translate("WARNING.INVALIDPHONE")
      )
      .min(10, Object.translate("WARNING.INVALIDPHONE"))
      .required(Object.translate("WARNING.REQUIRED")),
    email: Yup.string()
      .email(Object.translate("WARNING.EMAILFORMAT"))
      .required(Object.translate("WARNING.REQUIRED")),
  });

export const getAddUsersValidationSchema = () =>
  Yup.object({
    fullName: Yup.string().required(Object.translate("WARNING.NAMEREQUIRED")),
    phoneNumber: Yup.string()
      .matches(
        customRegex.phoneRegExp,
        Object.translate("WARNING.INVALIDPHONE")
      )
      .min(10, Object.translate("WARNING.INVALIDPHONE"))
      .required(Object.translate("WARNING.REQUIRED")),
    email: Yup.string()
      .email(Object.translate("WARNING.EMAILFORMAT"))
      .required(Object.translate("WARNING.REQUIRED")),
    roles: Yup.array()
      .min(1, Object.translate("WARNING.REQUIRED"))
      .required(Object.translate("WARNING.REQUIRED")),
  });

export const getEditPassValidationSchema = () =>
  Yup.object({
    currentPassword: Yup.string()
      .required(Object.translate("WARNING.REQUIRED"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/,
        Object.translate("WARNING.PASSREQUIRMENTS")
      ),
    newPassword: Yup.string()
      .required(Object.translate("WARNING.REQUIRED"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/,
        Object.translate("WARNING.PASSREQUIRMENTS")
      ),
    confirmPassword: Yup.string()
      .required(Object.translate("WARNING.REQUIRED"))
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/,
        Object.translate("WARNING.PASSREQUIRMENTS")
      ),
  });
export const getUsersGroupsValidationSchema = () =>
  Yup.object({
    groupName: Yup.string().required(Object.translate("WARNING.REQUIRED")),
  });
