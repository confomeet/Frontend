import { Grid } from "components/muiComponents";
import { DataActions as UserGroupsActions } from "constantData";
import { UsersGroupsContext } from "contextProviders";
import { Formik } from "formik";
import { useContext } from "react";
import { useSelector } from "react-redux";
import {
  getUsersGroupsValidationSchema,
  usersGroupsInitialValues,
} from "../../Users/UsersFromikUtils";
import HandleUsersGroupsComponents from "./HandleUsersGroupsComponents";

const HandleUsersGroups = () => {
  const {
    users,
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  const contextProps = useContext(UsersGroupsContext);

  const initialValues = contextProps?.addToggle
    ? usersGroupsInitialValues
    : {
        groupName: contextProps?.selectedObj?.groupName,
        description: contextProps?.selectedObj?.description,
        userIds: contextProps?.selectedObj?.userIds || [],
      };

  const validationSchema = getUsersGroupsValidationSchema();

  const handleChoseNewUsersIds = (oldArr, newArr) => {
    if (!Array.isFullArray(newArr)) return [];
    if (!Array.isFullArray(oldArr)) return newArr;
    let newIds = newArr.map((newOne) => newOne.id);
    let oldIds = oldArr.map((oldOne) => oldOne.id);
    let allIds = [...new Set([...newIds, ...oldIds])];
    return allIds.filter((id) => !oldIds.includes(id));
  };

  const onSubmit = async (values) => {
    let payload = {
      body: {
        groupName: values?.groupName,
        description: values?.description,
      },
      userIds: Array.isFullArray(contextProps?.selectedObj?.userIds)
        ? handleChoseNewUsersIds(
            contextProps?.selectedObj?.userIds,
            values?.userIds
          )
        : values?.userIds?.map((row) => row?.id),
    };

    if (contextProps?.addToggle)
      window.dispatchWantedAction("ADD_USERS_GROUPS", { payload });

    if (contextProps?.editToggle)
      window.dispatchWantedAction("EDIT_USERS_GROUPS", {
        id: contextProps?.selectedObj?.id,
        payload,
      });
    contextProps?.handleToogle(UserGroupsActions?.mainView);
  };

  return (
    <Grid
      container
      // sx={{ padding: "0 20px" }}
    >
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return <HandleUsersGroupsComponents formik={formik} />;
        }}
      </Formik>
    </Grid>
  );
};
export default HandleUsersGroups;
