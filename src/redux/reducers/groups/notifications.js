import actions from "../../actions";
import { combineReducers } from "redux";

const {
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_DONE,
  ADD_NOTIFICATION,
  COMPLETE_ADD_NOTIFICATION,
  EDIT_NOTIFICATION,
  COMPLETE_EDIT_NOTIFICATION,
  DELETE_NOTIFICATIONS,
  COMPLETE_DELETE_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_PARAMS,
  COMPLETE_FETCH_NOTIFICATIONS_PARAMS,
  READ_NOTIFICATION,
  COMPLETE_READ_NOTIFICATION,
} = actions;

export const getNotifications = (state = false, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return true;
    case GET_NOTIFICATIONS_DONE:
      return false;
    default:
      return state;
  }
};

export const getNotificationsComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS_DONE:
      return action.data;
    default:
      return state;
  }
};

const isAddingNotifications = (state = false, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION: {
      return true;
    }
    case COMPLETE_ADD_NOTIFICATION: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const AddNotificationsComplete = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_ADD_NOTIFICATION: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

const isEditingNotifications = (state = false, action) => {
  switch (action.type) {
    case EDIT_NOTIFICATION: {
      return true;
    }
    case COMPLETE_EDIT_NOTIFICATION: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const EditNotificationsComplete = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_EDIT_NOTIFICATION: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

const isDeletingNotifications = (state = false, action) => {
  switch (action.type) {
    case DELETE_NOTIFICATIONS: {
      return true;
    }
    case COMPLETE_DELETE_NOTIFICATIONS: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const DeleteNotificationsComplete = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_DELETE_NOTIFICATIONS: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

const isFetchingNotificationsParams = (state = false, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_PARAMS: {
      return true;
    }
    case COMPLETE_FETCH_NOTIFICATIONS_PARAMS: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const NotificationParams = (state = {}, action) => {
  switch (action.type) {
    case COMPLETE_FETCH_NOTIFICATIONS_PARAMS: {
      return action.data || {};
    }

    default: {
      return state;
    }
  }
};

const isReadingNotification = (state = false, action) => {
  switch (action.type) {
    case READ_NOTIFICATION: {
      return true;
    }
    case COMPLETE_READ_NOTIFICATION: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const ReadNotification = (state = false, action) => {
  switch (action.type) {
    case COMPLETE_READ_NOTIFICATION: {
      return action.data || false;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  getNotifications,
  getNotificationsComplete,
  isFetchingNotificationsParams,
  NotificationParams,
  isAddingNotifications,
  AddNotificationsComplete,
  isEditingNotifications,
  EditNotificationsComplete,
  isDeletingNotifications,
  DeleteNotificationsComplete,
  isReadingNotification,
  ReadNotification,
});
