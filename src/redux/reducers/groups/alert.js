import actions from "../../actions";
import { combineReducers } from "redux";
const { SET_ALERT_OBJECT, CLEAR_ALERT_OBJECT } = actions;

export const AlertObject = (state = {}, action) => {
  switch (action.type) {
    case SET_ALERT_OBJECT:
      return { ...action.data, open: true };

    case CLEAR_ALERT_OBJECT:
      return {};

    default: {
      return state;
    }
  }
};

export const Response = (state = null, action) => {
  switch (action.type) {
    case SET_ALERT_OBJECT:
      return null;

    case CLEAR_ALERT_OBJECT:
      return action.data;

    default: {
      return state;
    }
  }
};

export default combineReducers({
  AlertObject,
  Response,
});
