import * as Yup from "yup";
import { customRegex } from "constantData/customRegex";

export const usersInitialValues = {
  phoneNumber: "",
  email: "",
  userName: "",
  fullName: null,
  profileStatus: 0,
  roles: [],
  userGroups: [],
  enable2FA: false,
  patronymic: "",
  firstName: "",
  surname: "",
  country: null,
  address: null,
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
      .min(10, Object.translate("WARNING.INVALIDPHONE")),
    email: Yup.string()
      .email(Object.translate("WARNING.EMAILFORMAT"))
      .required(Object.translate("WARNING.REQUIRED")),
  });

export const getAddUsersValidationSchema = () =>
  Yup.object({
    fullName: Yup.string().required(Object.translate("WARNING.NAMEREQUIRED")),
    phoneNumber: Yup.string()
      .nullable()
      .matches(
        customRegex.phoneRegExp,
        Object.translate("WARNING.INVALIDPHONE")
      )
      .min(10, Object.translate("WARNING.INVALIDPHONE")),
    email: Yup.string()
      .email(Object.translate("WARNING.EMAILFORMAT"))
      .required(Object.translate("WARNING.REQUIRED")),
    roles: Yup.array()
      .min(1, Object.translate("WARNING.REQUIRED"))
      .required(Object.translate("WARNING.REQUIRED")),
    firstName: Yup.string().required(Object.translate("WARNING.NAMEREQUIRED")),
    surname: Yup.string().required(Object.translate("WARNING.SURNAME_REQUIRED")),
    patronymic: Yup.string().nullable(),
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
