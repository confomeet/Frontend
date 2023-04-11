import actions from "../../actions";
import { combineReducers } from "redux";

const {
  GET_USERS_GROUPS,
  GET_USERS_GROUPS_DONE,
  ADD_USERS_GROUPS,
  ADD_USERS_GROUPS_DONE,
  EDIT_USERS_GROUPS,
  EDIT_USERS_GROUPS_DONE,
  DELETE_USERS_GROUPS,
  DELETE_USERS_GROUPS_DONE,
  ADD_TO_GROUP,
  ADD_TO_GROUP_DONE,
  DELETE_FROM_GROUP,
  DELETE_FROM_GROUP_DONE,
  GET_USERS_GROUP_BY_ID,
  GET_USERS_GROUP_BY_ID_DONE,
} = actions;
export const isGettingUsersGroups = (state = false, action) => {
  switch (action.type) {
    case GET_USERS_GROUPS:
      return true;
    case GET_USERS_GROUPS_DONE:
      return false;
    default:
      return state;
  }
};
export const getUsersGroupsComplete = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_GROUPS_DONE:
      return action.data;
    default:
      return state;
  }
};
export const isGettingUsersGroupById = (state = false, action) => {
  switch (action.type) {
    case GET_USERS_GROUP_BY_ID:
      return true;
    case GET_USERS_GROUP_BY_ID_DONE:
      return false;
    default:
      return state;
  }
};
export const getUsersGroupByIdComplete = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_GROUP_BY_ID_DONE:
      return action.data;
    default:
      return state;
  }
};
export const isAddingUsersGroups = (state = false, action) => {
  switch (action.type) {
    case ADD_USERS_GROUPS:
      return true;
    case ADD_USERS_GROUPS_DONE:
      return false;
    default:
      return state;
  }
};
export const addUsersGroupsComplete = (state = {}, action) => {
  switch (action.type) {
    case ADD_USERS_GROUPS_DONE:
      return action.data;
    default:
      return state;
  }
};
export const isEditingUsersGroups = (state = false, action) => {
  switch (action.type) {
    case EDIT_USERS_GROUPS:
      return true;
    case EDIT_USERS_GROUPS_DONE:
      return false;
    default:
      return state;
  }
};

export const editUsersGroupsComplete = (state = {}, action) => {
  switch (action.type) {
    case EDIT_USERS_GROUPS_DONE:
      return action.data;
    default:
      return state;
  }
};
export const isDeletingUsersGroups = (state = false, action) => {
  switch (action.type) {
    case DELETE_USERS_GROUPS:
      return true;
    case DELETE_USERS_GROUPS_DONE:
      return false;
    default:
      return state;
  }
};

export const deleteUsersGroupsComplete = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USERS_GROUPS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isAddingToGroup = (state = false, action) => {
  switch (action.type) {
    case ADD_TO_GROUP:
      return true;
    case ADD_TO_GROUP_DONE:
      return false;
    default:
      return state;
  }
};
export const addToGroupComplete = (state = {}, action) => {
  switch (action.type) {
    case ADD_TO_GROUP_DONE:
      return action.data;
    default:
      return state;
  }
};
export const isDeletingFromGroup = (state = false, action) => {
  switch (action.type) {
    case DELETE_FROM_GROUP:
      return true;
    case DELETE_FROM_GROUP_DONE:
      return false;
    default:
      return state;
  }
};

export const deleteFromGroupComplete = (state = {}, action) => {
  switch (action.type) {
    case DELETE_FROM_GROUP_DONE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  isGettingUsersGroups,
  getUsersGroupsComplete,
  isGettingUsersGroupById,
  getUsersGroupByIdComplete,
  isAddingUsersGroups,
  addUsersGroupsComplete,
  isEditingUsersGroups,
  editUsersGroupsComplete,
  isDeletingUsersGroups,
  deleteUsersGroupsComplete,
  isAddingToGroup,
  addToGroupComplete,
  isDeletingFromGroup,
  deleteFromGroupComplete,
});
