import users from "./groups/users";
import loading from "./groups/loading";
import meetings from "./groups/meetings";
import common from "./groups/common";
import notifications from "./groups/notifications";
import alert from "./groups/alert";
import settings from "./settings";
import tabs from "./groups/tabs";
import statistics from "./groups/statistics";
import usersgroups from "./groups/usersgroups";
export default {
  ...users,
  ...loading,
  ...meetings,
  ...common,
  ...alert,
  ...notifications,
  ...settings,
  ...tabs,
  ...statistics,
  ...usersgroups,
};
