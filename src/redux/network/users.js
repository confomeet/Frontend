import { postData, fetchData, postFormData, fetchBinaryData } from "./api";

export const handleAccount = async (id, key) =>
  await postData({
    endpoint: `/v1/User/${id}/${key}`,
  });

export const getAllRoles = async () =>
  await fetchData({
    endpoint: "/v1/Role",
    disableSwal: true,
  });

export const filterUsers = async (params) =>
  await fetchData({
    endpoint: "/v1/User/FilterUsers",
    params,
    disableSwal: true,
    disableLoader: true,
  });

export const getUserByIdReq = async (id) =>
  await fetchData({
    endpoint: `/v1/User/FindUserById/${id}`,
    disableSwal: true,
    disableLoader: true,
  });

export const addNewUser = async (data, lang) =>
  await postData({
    endpoint: "/v1/User/AdminRegisterNewUser",
    body: data,
    disableLoader: false,
    disableSwal: false,
  });

export const editExistingUser = async (body, id) =>
  await postData({
    endpoint: `/v1/User/Edit/${id}`,
    body,
  });

export const deleteExistingUser = async (body, id) =>
  await postData({
    endpoint: `****`,
    body,
  });

export const resetPassword = async (data) =>
  await postData({
    endpoint: "/v1/user/ResetPassword",
    body: data,
    disableLoader: false,
    disableSwal: false,
  });

export const forgotPassword = async (data, lang) =>
  await postData({
    endpoint: "/v1/user/SendResetPasswordEmail",
    params: data,
    customHeaders: { lang },
    disableLoader: false,
    disableSwal: false,
  });

export const signUp = async (data) =>
  await postData({
    endpoint: "/v1/User/Register",
    body: data,
    disableLoader: false,
    disableSwal: false,
  });

export const confirmEmail = async (data, lang) =>
  await fetchData({
    endpoint: "/v1/user/ConfirmEmail",
    params: data,
    customHeaders: { lang },
  });

export const reConfirmEmail = async (data, lang) =>
  await fetchData({
    endpoint: "/v1/user/ResendActivation",
    params: data,
    customHeaders: { lang },
  });

export const getAllUsers = async (data, lang) =>
  await fetchData({
    endpoint: "/v1/User",
    params: data,
    customHeaders: { lang },
    disableLoader: false,
    disableSwal: true,
  });

export const pushNotificationReq = async (body) =>
  await postData({
    endpoint: "/v1/User/AddFCMWebToken",
    body,
    disableLoader: true,
    disableSwal: true,
  });

export const searchUsersReq = async (body) =>
  await postData({
    endpoint: "/v1/User/SearchFilterUser",
    body,
    disableLoader: false,
    disableSwal: true,
  });

export const editPasswordReq = async (body) =>
  await postData({
    endpoint: "/v1/User/EditPassword",
    body,
    disableLoader: false,
    disableSwal: false,
  });

export const logIn = async (body) =>
  await postData({
    endpoint: "/v1/User/Login",
    body,
    disableLoader: false,
    disableSwal: false,
  });

export const verifyOtpReq = async (body) =>
  await postData({
    endpoint: "/v1/User/VerifyOTP",
    body,
    disableLoader: false,
    disableSwal: false,
  });

export const editProfilePhoto = async (body) =>
  await postFormData({
    endpoint: "/v1/User/EditMyProfilePhoto",
    body,
    disableLoader: false,
    disableSwal: false,
  });

export const getProfileInfoReq = async () =>
  await fetchData({
    endpoint: "/v1/User/MyProfile",
    disableLoader: false,
    disableSwal: true,
  });

export const getSmtpConfigReq = async () =>
  await fetchData({
    endpoint: "/v1/SmtpConfig",
    disableLoader: false,
    disableSwal: true,
  });

export const handleSmtpConfigReq = async (body) =>
  await postData({
    endpoint: "/v1/SmtpConfig/CreateUpdate",
    body,
    disableLoader: false,
    disableSwal: false,
  });

export const getProfileImgReq = async (params) =>
  await fetchBinaryData({
    endpoint: "/v1/FilesUploader/ViewFile",
    params,
    disableLoader: false,
    disableSwal: true,
    method: "POST",
  });
