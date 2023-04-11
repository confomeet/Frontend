import actions from "../../actions";
import { combineReducers } from "redux";

const {
  GET_ALL_TABS,
  GET_ALL_TABS_DONE,
  ADD_TABS,
  ADD_TABS_DONE,
  EDIT_TABS,
  EDIT_TABS_DONE,
  DELETE_TABS,
  DELETE_TABS_DONE,
  GET_MY_TABS,
  GET_MY_TABS_DONE,
} = actions;

export const isGettingAllTabs = (state = false, action) => {
  switch (action.type) {
    case GET_ALL_TABS:
      return true;
    case GET_ALL_TABS_DONE: {
      return false;
    }
    default:
      return state;
  }
};
export const getAllTabsComplete = (state = null, action) => {
  switch (action.type) {
    case GET_ALL_TABS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isAddingTabs = (state = false, action) => {
  switch (action.type) {
    case ADD_TABS:
      return true;
    case ADD_TABS_DONE: {
      return false;
    }
    default:
      return state;
  }
};
export const addTabsComplete = (state = {}, action) => {
  switch (action.type) {
    case ADD_TABS_DONE: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};

export const isEditingTabs = (state = false, action) => {
  switch (action.type) {
    case EDIT_TABS:
      return true;
    case EDIT_TABS_DONE: {
      return false;
    }
    default:
      return state;
  }
};
export const editTabsComplete = (state = {}, action) => {
  switch (action.type) {
    case EDIT_TABS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isDeletingTabs = (state = false, action) => {
  switch (action.type) {
    case DELETE_TABS:
      return true;
    case DELETE_TABS_DONE: {
      return false;
    }
    default:
      return state;
  }
};
export const deleteTabsComplete = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TABS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isGettingMyTabs = (state = false, action) => {
  switch (action.type) {
    case GET_MY_TABS:
      return true;
    case GET_MY_TABS_DONE: {
      return false;
    }
    default:
      return state;
  }
};
export const getMyTabsComplete = (state = [], action) => {
  switch (action.type) {
    case GET_MY_TABS_DONE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  isGettingAllTabs,
  getAllTabsComplete,
  isAddingTabs,
  addTabsComplete,
  isEditingTabs,
  editTabsComplete,
  isDeletingTabs,
  deleteTabsComplete,
  isGettingMyTabs,
  getMyTabsComplete,
});
