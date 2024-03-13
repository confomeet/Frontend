import actions from "../../actions";
import { combineReducers } from "redux";

const {
  CONFIRM_ACCOUNT,
  COMPLETE_CONFIRM_ACCOUNT,
  LOCK_ACCOUNT,
  COMPLETE_LOCK_ACCOUNT,
  UNLOCK_ACCOUNT,
  COMPLETE_UNLOCK_ACCOUNT,
  FETCH_ALL_ROLES,
  COMPLETE_FETCH_ALL_ROLES,
  ADD_USER,
  COMPLETE_ADD_USER,
  EDIT_USER,
  COMPLETE_EDIT_USER,
  DELETE_USER,
  COMPLETE_DELETE_USER,
  LOG_IN,
  SIGN_UP,
  SIGN_UP_DONE,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_DONE,
  RESET_PASSWORD,
  RESET_PASSWORD_DONE,
  CONFIRM_USER,
  CONFIRM_USER_DONE,
  RECONFIRM_USER,
  RECONFIRM_USER_DONE,
  GET_USERS,
  GET_USERS_DONE,
  PUSH_NOTIFICATION,
  PUSH_NOTIFICATION_DONE,
  GET_USER_BY_ID,
  GET_USER_BY_ID_DONE,
  SEARCH_USERS,
  SEARCH_USERS_DONE,
  EDIT_PASSWORD,
  EDIT_PASSWORD_DONE,
  VERIFY_OTP,
  GET_PROFILE_INFO,
  GET_PROFILE_INFO_DONE,
  GET_PROFILE_IMG,
  GET_PROFILE_IMG_DONE,
  GET_SMTP_CONFIG,
  GET_SMTP_CONFIG_DONE,
  HANDLE_SMTP_CONFIG,
  HANDLE_SMTP_CONFIG_DONE,
} = actions;

export const isConfirmingAccount = (state = false, action) => {
  switch (action.type) {
    case CONFIRM_ACCOUNT:
      return true;
    case COMPLETE_CONFIRM_ACCOUNT:
      return false;
    default:
      return state;
  }
};
export const ConfirmedAccount = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_CONFIRM_ACCOUNT:
      return action.data;
    default:
      return state;
  }
};

export const isLockingAccount = (state = false, action) => {
  switch (action.type) {
    case LOCK_ACCOUNT:
      return true;
    case COMPLETE_LOCK_ACCOUNT:
      return false;
    default:
      return state;
  }
};
export const LockedAccount = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_LOCK_ACCOUNT:
      return action.data;
    default:
      return state;
  }
};

export const isUnlockingAccount = (state = false, action) => {
  switch (action.type) {
    case UNLOCK_ACCOUNT:
      return true;
    case COMPLETE_UNLOCK_ACCOUNT:
      return false;
    default:
      return state;
  }
};
export const UnlockedAccount = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_UNLOCK_ACCOUNT:
      return action.data;
    default:
      return state;
  }
};

export const isFetchingAllRoles = (state = false, action) => {
  switch (action.type) {
    case FETCH_ALL_ROLES:
      return true;
    case COMPLETE_FETCH_ALL_ROLES:
      return false;
    default:
      return state;
  }
};
export const AllRoles = (state = [], action) => {
  switch (action.type) {
    case COMPLETE_FETCH_ALL_ROLES:
      return action.data;
    default:
      return state;
  }
};

export const isAddingUser = (state = false, action) => {
  switch (action.type) {
    case ADD_USER:
      return true;
    case COMPLETE_ADD_USER:
      return false;
    default:
      return state;
  }
};
export const AddedUser = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_ADD_USER:
      return action.data;
    default:
      return state;
  }
};

export const isEditingUser = (state = false, action) => {
  switch (action.type) {
    case EDIT_USER:
      return true;
    case COMPLETE_EDIT_USER:
      return false;
    default:
      return state;
  }
};
export const EditedUser = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_EDIT_USER:
      return action.data;
    default:
      return state;
  }
};

export const isDeletingUser = (state = false, action) => {
  switch (action.type) {
    case DELETE_USER:
      return true;
    case COMPLETE_DELETE_USER:
      return false;
    default:
      return state;
  }
};
export const DeletedUser = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_DELETE_USER:
      return action.data;
    default:
      return state;
  }
};

export const signUp = (state = false, action) => {
  switch (action.type) {
    case SIGN_UP:
      return true;
    case SIGN_UP_DONE:
      return false;
    default:
      return state;
  }
};
export const signUpDone = (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP_DONE:
      return action.data;
    default:
      return state;
  }
};

export const forgotPassword = (state = false, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD:
      return true;
    case FORGOT_PASSWORD_DONE:
      return false;
    default:
      return state;
  }
};

export const forgotPasswordDone = (state = null, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_DONE:
      return action.data;
    default:
      return state;
  }
};

export const resetPassword = (state = false, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return true;
    case RESET_PASSWORD_DONE:
      return false;
    default:
      return state;
  }
};
export const resetPasswordDone = (state = null, action) => {
  switch (action.type) {
    case RESET_PASSWORD_DONE:
      return action.data;
    default:
      return state;
  }
};

export const confirmUser = (state = false, action) => {
  switch (action.type) {
    case CONFIRM_USER:
      return true;
    case CONFIRM_USER_DONE:
      return false;
    default:
      return state;
  }
};
export const confirmUserDone = (state = {}, action) => {
  switch (action.type) {
    case CONFIRM_USER_DONE:
      return action.data;
    default:
      return state;
  }
};

export const reConfirmUser = (state = false, action) => {
  switch (action.type) {
    case RECONFIRM_USER:
      return true;
    case RECONFIRM_USER_DONE:
      return false;
    default:
      return state;
  }
};
export const reConfirmUserDone = (state = {}, action) => {
  switch (action.type) {
    case RECONFIRM_USER_DONE:
      return action.data;
    default:
      return state;
  }
};

export const getAllUsers = (state = false, action) => {
  switch (action.type) {
    case GET_USERS:
      return true;
    case GET_USERS_DONE:
      return false;
    default:
      return state;
  }
};

export const getUsersDone = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isPushingNotification = (state = false, action) => {
  switch (action.type) {
    case PUSH_NOTIFICATION:
      return true;
    case PUSH_NOTIFICATION_DONE:
      return false;
    default:
      return state;
  }
};

export const pushNotificationComplete = (state = {}, action) => {
  switch (action.type) {
    case PUSH_NOTIFICATION_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isgettingUserById = (state = false, action) => {
  switch (action.type) {
    case GET_USER_BY_ID:
      return true;
    case GET_USER_BY_ID_DONE:
      return false;
    default:
      return state;
  }
};

export const getUserByIdComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_BY_ID_DONE:
      return action.data;
    default:
      return state;
  }
};

export const searchingUsers = (state = false, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return true;
    case SEARCH_USERS_DONE:
      return false;
    default:
      return state;
  }
};

export const searchUsersComplete = (state = [], action) => {
  switch (action.type) {
    case SEARCH_USERS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isEditingPassword = (state = false, action) => {
  switch (action.type) {
    case EDIT_PASSWORD:
      return true;
    case EDIT_PASSWORD_DONE:
      return false;
    default:
      return state;
  }
};
export const editPasswordComplete = (state = {}, action) => {
  switch (action.type) {
    case EDIT_PASSWORD_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isGettingProfileInfo = (state = false, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO:
      return true;
    case GET_PROFILE_INFO_DONE:
      return false;
    default:
      return state;
  }
};
export const getProfileInfoComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO_DONE:
      return action.data;
    default:
      return state;
  }
};
export const isGettingSmtpConfig = (state = false, action) => {
  switch (action.type) {
    case GET_SMTP_CONFIG:
      return true;
    case GET_SMTP_CONFIG_DONE:
      return false;
    default:
      return state;
  }
};
export const getSmtpConfigComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_SMTP_CONFIG_DONE:
      return action.data;
    default:
      return state;
  }
};
export const isHandlingSmtpConfig = (state = false, action) => {
  switch (action.type) {
    case HANDLE_SMTP_CONFIG:
      return true;
    case HANDLE_SMTP_CONFIG_DONE:
      return false;
    default:
      return state;
  }
};
export const handleSmtpConfigComplete = (state = {}, action) => {
  switch (action.type) {
    case HANDLE_SMTP_CONFIG_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isGettingProfileImg = (state = false, action) => {
  switch (action.type) {
    case GET_PROFILE_IMG:
      return true;
    case GET_PROFILE_IMG_DONE:
      return false;
    default:
      return state;
  }
};
export const getProfileImgComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_PROFILE_IMG_DONE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  isConfirmingAccount,
  ConfirmedAccount,
  isLockingAccount,
  LockedAccount,
  isUnlockingAccount,
  UnlockedAccount,
  isFetchingAllRoles,
  AllRoles,
  isAddingUser,
  AddedUser,
  isEditingUser,
  EditedUser,
  isDeletingUser,
  DeletedUser,
  forgotPassword,
  forgotPasswordDone,
  resetPassword,
  resetPasswordDone,
  signUp,
  signUpDone,
  confirmUser,
  confirmUserDone,
  reConfirmUser,
  reConfirmUserDone,
  getAllUsers,
  getUsersDone,
  isPushingNotification,
  pushNotificationComplete,
  isgettingUserById,
  getUserByIdComplete,
  searchingUsers,
  searchUsersComplete,
  isEditingPassword,
  editPasswordComplete,
  isGettingProfileInfo,
  getProfileInfoComplete,
  isGettingProfileImg,
  getProfileImgComplete,
  isGettingSmtpConfig,
  getSmtpConfigComplete,
  isHandlingSmtpConfig,
  handleSmtpConfigComplete,
});
