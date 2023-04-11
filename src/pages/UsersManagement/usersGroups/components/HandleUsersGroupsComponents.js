import FromikSearchAutoComplete from "FormikComponents/select/FromikSearchAutoComplete";
import FormikTextFeildGeneral from "FormikComponents/textFields/FormikTextFeildGeneral";
import { Grid } from "components/muiComponents";
import { DataActions as UserGroupsActions } from "constantData";
import { UsersGroupsContext } from "contextProviders";
import { contactsStyles } from "pages/contacts/style";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { filterUsers } from "redux/network/users";
import { addToGroupReq, deleteFromGroupReq } from "redux/network/usersgroups";
import { handleNotification } from "redux/network/functions";
import { getModifiedUsers } from "utils";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";

let timeout;

const HandleUsersGroupsComponents = (props) => {
  const contextProps = useContext(UsersGroupsContext);
  const classes = contactsStyles();
  const [usersGroup, setUsersGroup] = useState([]);
  const {
    users,
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  const handleInputChange = async (e, text, values) => {
    if (timeout) clearTimeout(timeout);
    if (!text || text.length < 3) {
      setUsersGroup([]);
      return;
    }
    timeout = setTimeout(async () => {
      let newUsers = await filterUsers({
        text,
        pageIndex: 1,
        pageSize: 100,
      });
      newUsers = getModifiedUsers(newUsers?.data?.items || []);
      setUsersGroup(newUsers || []);
    }, 500);
  };

  const handleDeleteFromGroup = async (item) => {
    if (!Array.isFullArray(contextProps?.selectedObj?.userIds)) return;
    let existingUser = contextProps?.selectedObj?.userIds.map(
      (user) => user.id
    );
    if (existingUser?.includes(item?.id)) {
      await deleteFromGroupReq({
        groupId: contextProps?.selectedObj?.id,
        userIds: [item?.id],
      });
      return;
    }

    handleNotification({
      message: isRTL
        ? "تم حذف المستخدم من المجموعة  بنجاح"
        : "Success to remove users to group",
      success: true,
    });
  };

  useEffect(() => {
    if (
      !contextProps?.editToggle ||
      Object.isObjectEmpty(contextProps?.selectedObj)
    )
      return;
    setUsersGroup(contextProps?.selectedObj?.userIds);
  }, [contextProps?.editToggle, contextProps?.selectedObj]);

  return (
    <Grid container item xs={12} md={12} sm={12} spacing={2}>
      <Grid item xs={12} md={6} sm={6}>
        <FormikTextFeildGeneral
          name="groupName"
          required
          variant="standard"
          label={Object.translate(`LABEL.GROUPNAME`)}
          type="text"
        />
      </Grid>
      <Grid item xs={12} md={6} sm={6}>
        <FormikTextFeildGeneral
          name="description"
          variant="standard"
          label={Object.translate(`LABEL.DESCRIPTION`)}
          type="text"
        />
      </Grid>
      <Grid item xs={12} md={12} sm={12} className={classes.contactGroupFld}>
        <FromikSearchAutoComplete
          InputProps={{ disableUnderline: true }}
          label={Object.translate("LABEL.USERS_GROUP_LIST")}
          name="userIds"
          options={usersGroup}
          multiple={true}
          onInputChange={async (e, text) => {
            await handleInputChange(e, text);
          }}
          handleChipClear={handleDeleteFromGroup}
          disableClearable={contextProps?.editToggle}
          filterMultiById={true}
        />
      </Grid>

      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        style={{
          gap: "10px",
          display: "flex",
          borderRadius: "0px !important",
          justifyContent: "flex-end",
          marginTop: "48px",
        }}
      >
        <PrimaryButton
          onClick={() => props?.formik.submitForm()}
          primaryButton={Object.translate(
            contextProps.addToggle ? "BUTTONS.SAVE" : "BUTTONS.EDIT"
          )}
        />

        <SecondaryButton
          secondaryButton={Object.translate("BUTTONS.CANCEL")}
          disableElevation
          onClick={() => contextProps.handleToogle(UserGroupsActions.mainView)}
        />
      </Grid>
    </Grid>
  );
};

export default HandleUsersGroupsComponents;
