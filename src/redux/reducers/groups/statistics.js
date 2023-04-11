import actions from "../../actions";
import { combineReducers } from "redux";

const {
  GET_EVENTS_BY_APP_STATISTICS,
  GET_EVENTS_BY_APP_STATISTICS_DONE,
  GET_EVENTS_BY_STATUS_STATISTICS,
  GET_EVENTS_BY_STATUS_STATISTICS_DONE,
  GET_USERS_BY_STATUS_STATISTICS,
  GET_USERS_BY_STATUS_STATISTICS_DONE,
  GET_ACTIVE_ROOMS_STATISTICS,
  GET_ACTIVE_ROOMS_STATISTICS_DONE,
} = actions;

export const getEventsByAppStatistics = (state = false, action) => {
  switch (action.type) {
    case GET_EVENTS_BY_APP_STATISTICS:
      return true;
    case GET_EVENTS_BY_APP_STATISTICS_DONE:
      return false;
    default:
      return state;
  }
};

export const EventsByAppStatistics = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS_BY_APP_STATISTICS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const getEventsByStatusStatistics = (state = false, action) => {
  switch (action.type) {
    case GET_EVENTS_BY_STATUS_STATISTICS:
      return true;
    case GET_EVENTS_BY_STATUS_STATISTICS_DONE:
      return false;
    default:
      return state;
  }
};

export const EventsByStatusStatistics = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS_BY_STATUS_STATISTICS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const getUsersByStatusStatistics = (state = false, action) => {
  switch (action.type) {
    case GET_USERS_BY_STATUS_STATISTICS:
      return true;
    case GET_USERS_BY_STATUS_STATISTICS_DONE:
      return false;
    default:
      return state;
  }
};

export const UsersByStatusStatistics = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS_BY_STATUS_STATISTICS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isGettingActiveRoomsStatistics = (state = false, action) => {
  switch (action.type) {
    case GET_ACTIVE_ROOMS_STATISTICS:
      return true;
    case GET_ACTIVE_ROOMS_STATISTICS_DONE:
      return false;
    default:
      return state;
  }
};

export const getActiveRoomsStatisticsComplete = (state = [], action) => {
  switch (action.type) {
    case GET_ACTIVE_ROOMS_STATISTICS_DONE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  getEventsByAppStatistics,
  EventsByAppStatistics,
  getEventsByStatusStatistics,
  EventsByStatusStatistics,
  getUsersByStatusStatistics,
  UsersByStatusStatistics,
  isGettingActiveRoomsStatistics,
  getActiveRoomsStatisticsComplete,
});
