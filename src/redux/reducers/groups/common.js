import actions from "../../actions";
import { combineReducers } from "redux";

const { GET_COUNTRIES, GET_COUNTRIES_DONE } = actions;

export const getCountries = (state = false, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return true;
    case GET_COUNTRIES_DONE:
      return false;
    default:
      return state;
  }
};
export const AllCountries = (state = [], action) => {
  switch (action.type) {
    case GET_COUNTRIES_DONE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  getCountries,
  AllCountries,
});
