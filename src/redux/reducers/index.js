import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import settingsReducer from "./settings";
import users from "./groups/users";
import usersgroups from "./groups/usersgroups";
import common from "./groups/common";
import notifications from "./groups/notifications";
import loading from "./groups/loading";
import meetings from "./groups/meetings";
import alert from "./groups/alert";
import tabs from "./groups/tabs";
import statistics from "./groups/statistics";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    settingsReducer,
    users,
    loading,
    meetings,
    common,
    alert,
    notifications,
    tabs,
    statistics,
    usersgroups,
  });

export default rootReducer;
