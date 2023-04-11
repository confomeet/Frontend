import actions from '../../actions';
import { combineReducers } from 'redux';

const { LOADING_ACTION, LOADING_RETURNED } = actions;

export const spinnerToggle = (state = false, action) => {
  switch (action.type) {
    case LOADING_ACTION:
      return true;
    case LOADING_RETURNED:
      return false;

    default:
      return state;
  }
};
export default combineReducers({
  spinnerToggle
});
