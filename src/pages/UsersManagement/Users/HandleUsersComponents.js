import FormikAutoComplete from "FormikComponents/select/FormikAutoComplete";
import FromikSearchAutoComplete from "FormikComponents/select/FromikSearchAutoComplete";
import FormikPhoneNumberField from "FormikComponents/textFields/FormikPhoneNumberField";
import FormikTextFeildGeneral from "FormikComponents/textFields/FormikTextFeildGeneral";
import { Grid, InputLabel } from "components/muiComponents";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUsersGroupsReq } from "redux/network/usersgroups";
import { getModifiedContact, getModifiedUserGroups } from "utils";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
import { useStyles } from "../../../styles/generalStyle";
import { userStyle } from "./style";
import { FormControlLabel, Checkbox } from "@mui/material";
import { fullNameOrJoinedName } from "./UsersFromikUtils";
import FormikSelectDropdownFeild from "FormikComponents/select/FormikSelectDropdownFeild";
let timeout;

const HandleUsersComponents = (props) => {
  const {
    users,
    common,
  } = useSelector((state) => state);
  const classes = useStyles();
  const usersClasses = userStyle();
  const [userGroups, setUserGroups] = useState([]);
  const [countries, setCountries] = useState([]);

  const handleInputChange = async (e, text, values) => {
    if (timeout) clearTimeout(timeout);
    if (!text || text.length < 3) {
      setUserGroups([]);
      return;
    }
    timeout = setTimeout(async () => {
      let newUsers = await getUsersGroupsReq(
        { pageIndex: 1, pageSize: 100 },
        {
          text,
        },
        true
      );
      newUsers = getModifiedUserGroups(newUsers?.data?.items || []);
      setUserGroups(newUsers || []);
    }, 500);
  };

  useEffect(() => {
    if (!props?.toggleEdit || Object.isObjectEmpty(props?.editObj)) return;
    setUserGroups(getModifiedContact(props?.editObj?.userGroups));
  }, [props?.toggleEdit, props?.editObj]);
  useEffect(() => {
    setCountries(countriesToDropdownOptions(common.AllCountries));
  }, [common.AllCountries]);
  return (
    <Grid
      container
      item
      xs={12}
      md={12}
      sm={12}
      className={classes.inputWhiteBackground}
      spacing={2}
    >
      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        style={{ paddingTop: "30px!important" }}
      >
        <FormikTextFeildGeneral
          name="fullName"
          required
          variant="standard"
          label={Object.translate(`LABEL.USERFULLNAME`)}
          type="text"
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        style={{ paddingTop: "30px!important" }}
      >
        <FormikTextFeildGeneral
          required
          name="email"
          variant="standard"
          label={Object.translate(`LABEL.EMAIL`)}
          type="text"
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        style={{ paddingTop: "30px!important" }}
      >
        <FormikTextFeildGeneral
          required
          name="firstName"
          variant="standard"
          label={Object.translate(`LABEL.FIRST_NAME`)}
          type="text"
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        style={{ paddingTop: "30px!important" }}
      >
        <FormikTextFeildGeneral
          required
          name="surname"
          variant="standard"
          label={Object.translate(`LABEL.SURNAME`)}
          type="text"
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        style={{ paddingTop: "30px!important" }}
      >
        <FormikTextFeildGeneral
          name="patronymic"
          variant="standard"
          label={Object.translate(`LABEL.PATRONYMIC`)}
          type="text"
        />
      </Grid>

      <Grid item xs={12} md={6} sm={6} style={{ paddingTop: "30px!important" }}>
        <FormikAutoComplete
          required
          className={usersClasses.userList}
          variant="standard"
          name="roles"
          label={Object.translate("LABEL.USERROLE")}
          options={props.roles}
          multiple={true}
          InputProps={{ disableUnderline: true }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
      >
        <FormikSelectDropdownFeild
          name="country"
          variant="standard"
          type="text"
          options={countries}
          label={Object.translate("LABEL.COUNTRY")}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sm={6}
        className={usersClasses.userPhone}
        style={{ paddingTop: "30px!important" }}
      >
        <InputLabel className={usersClasses.userPhoneLabel}>
          {Object.translate(`LABEL.PHONE`)}
        </InputLabel>
        <FormikPhoneNumberField
          label={Object.translate(`LABEL.PHONE`)}
          variant="standard"
          InputProps={{ disableUnderline: true }}
          name="phoneNumber"
          {...props?.formik}
          className={usersClasses.phoneNumber}
          value={props?.formik?.values?.phoneNumber}
        />
        {props?.formik.errors?.phoneNumber &&
        props?.formik.touched.phoneNumber ? (
          <div style={{ color: "#d32f2f", fontSize: "12.5px" }}>
            {props?.formik.errors?.phoneNumber}
          </div>
        ) : null}
      </Grid>

      <Grid
        item
        xs={12}
      >
        <FormikTextFeildGeneral
          name="address"
          variant="standard"
          label={Object.translate("LABEL.ADDRESS")}
          type="text"
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        style={{ paddingTop: "30px!important" }}
      >
        <FromikSearchAutoComplete
          InputProps={{ disableUnderline: true }}
          label={Object.translate("LABEL.USER_GROUPS")}
          name="userGroups"
          options={userGroups}
          multiple={true}
          onInputChange={async (e, text) => {
            await handleInputChange(e, text);
          }}
          filterMultiById={true}
        />
      </Grid>

      <Grid
        item
        xs={12}
      >
        <FormControlLabel
          control={(
            <Checkbox
              name="enable2FA"
              onChange={(_, checked) => props.formik.setFieldValue("enable2FA", checked, false)}
              defaultChecked={props.formik.values.enable2FA}
            />)}
          label={Object.translate("LABEL.ENABLE_2FA")}
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
          marginInlineEnd: "20px",
        }}
      >
        <PrimaryButton
          onClick={() => props?.formik.submitForm()}
          primaryButton={Object.translate(
            props?.toggleAdd && props.toggleAdd
              ? "BUTTONS.SAVE"
              : "BUTTONS.EDIT"
          )}
        />

        <SecondaryButton
          secondaryButton={Object.translate("BUTTONS.CANCEL")}
          disableElevation
          onClick={() => props.onView && props.onView()}
        />
      </Grid>
    </Grid>
  );
};

function countriesToDropdownOptions(countriesDto) {
   return countriesDto.map(item => ({
    id: item.cntId,
    text: item.cntCountryEn,
    value: item.cntId,
  }));
}

export default HandleUsersComponents;
