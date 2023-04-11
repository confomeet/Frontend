import { styled } from "@mui/material/styles";
import FormikSelectDropdownFeild from "FormikComponents/select/FormikSelectDropdownFeild";
import { Box, Button, Grid } from "components/muiComponents";
import { CONTACTS_TYPES } from "constantData";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import {
  filterCompaniesReq,
  filterManagersReq,
  filterSectionsReq,
  getContactByIdReq,
} from "redux/network/contacts";
import { Typography } from "@mui/material";

import { filterUsers } from "redux/network/users";
import { getModifiedContact, getModifiedUsers } from "utils";
import TextField from "../../../FormikComponents/textFields/TextField";
import { contactsStyles } from "../style";
import FormikRadioButtonGroup from "FormikComponents/radioButton/RadioButton";
import { convertToFile } from "redux/network/functions";
import { addContactPhoto } from "redux/network/contacts";

const valuesArrToFill = ["office", "country", "city", "website", "address"];

const radioGroupBtns = [
  {
    name: Object.translate("LABEL.INDVIDUAL"),
    value: CONTACTS_TYPES.INDIVIDUAL,
  },
  { name: Object.translate("LABEL.MANAGER"), value: CONTACTS_TYPES.MANAGER },
];

let timeout;
const IndvidualTap = (props) => {
  const classes = contactsStyles();
  const Input = styled("input")({
    display: "none",
  });

  const {
    common,
    contacts,
    users,
    settingsReducer: {
      settings: { authUser },
    },
  } = useSelector((state) => state);
  const [usersGroup, setUsersGroup] = useState([]);
  const [file, setFile] = useState([]);
  const [companiesGroup, setCompaniesGroup] = useState([]);
  const [sectionsGroup, setSectionsGroup] = useState([]);
  const [managersGroup, setManagersGroup] = useState([]);
  const [fieldsErrors, setFieldsErrors] = useState({
    companyId: null,
    sectionId: null,
    directManageId: null,
  });
  const handleChange = async (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    if (props?.toggleEdit) {
      let body = new FormData();
      body.append("UserPhoto", e.target.files[0]);
      await addContactPhoto({ contactId: props.editObj?.id }, body);
    }
    if (props?.toggleAdd) {
      let body = new FormData();
      body.append("UserPhoto", e.target.files[0]);
      props?.setImageData(body);
    }
  };

  const handleInputChange = async (e, text, values) => {
    if (e.target.name === "sectionId" && !props.formik.values.companyId)
      return setFieldsErrors((prev) => ({
        ...prev,
        sectionId: Object.translate("FULL_SENTENCE.CHOSE_COMPANY_FIRST"),
      }));
    if (e.target.name === "directManageId" && !props.formik.values.companyId)
      return setFieldsErrors((prev) => ({
        ...prev,
        directManageId: Object.translate("FULL_SENTENCE.CHOSE_COMPANY_FIRST"),
      }));
    if (timeout) clearTimeout(timeout);
    if (!text || text.length < 3) {
      setUsersGroup([]);
      return;
    }

    timeout = setTimeout(async () => {
      if (e.target.name === "contactId") {
        let newUsers = await filterUsers({
          text,
          pageIndex: 1,
          pageSize: 100,
        });
        newUsers = getModifiedUsers(newUsers?.data?.items || []);
        setUsersGroup(newUsers || []);
      }
      if (e.target.name === "companyId") {
        let newCompany = await filterCompaniesReq({
          text,
        });
        newCompany = getModifiedContact(newCompany?.data?.result || []);
        setCompaniesGroup(newCompany || []);
      }
      if (e.target.name === "sectionId") {
        let newSection = await filterSectionsReq({
          text,
          companyId: props.formik.values.companyId,
        });
        newSection = getModifiedContact(newSection?.data?.result || []);
        setSectionsGroup(newSection || []);
      }
      if (e.target.name === "directManageId") {
        let newSection = await filterManagersReq({
          text,
          companyId: props.formik.values.companyId,
        });
        newSection = getModifiedContact(newSection?.data?.result || []);
        setManagersGroup(newSection || []);
      }
    }, 500);
  };

  useEffect(() => {
    (async () => {
      if (
        props?.toggleEdit &&
        props.editObj &&
        !Object.isObjectEmpty(users?.getUserByIdComplete)
      )
        setUsersGroup(
          [
            {
              id: props.editObj.contactId,
              text: users?.getUserByIdComplete?.fullName,
              description: users?.getUserByIdComplete?.email,
            },
          ] || []
        );
    })();
  }, [props.editObj, users?.getUserByIdComplete]);

  useEffect(() => {
    if (!props.toggleEdit || Object.isObjectEmpty(props.editObj)) return;
    if (!Object.isObjectEmpty(contacts.getCompanyByIdComplete))
      setCompaniesGroup(
        [
          {
            id: props.editObj.companyId,
            text: contacts.getCompanyByIdComplete?.displayName,
            description: contacts.getCompanyByIdComplete?.email,
          },
        ] || []
      );
    if (!Object.isObjectEmpty(contacts.getSectionByIdComplete))
      setSectionsGroup(
        [
          {
            id: props.editObj.sectionId,
            text: contacts.getSectionByIdComplete?.displayName,
            description: contacts.getSectionByIdComplete?.email,
          },
        ] || []
      );

    if (!Object.isObjectEmpty(contacts.getManagerByIdComplete))
      setManagersGroup(
        [
          {
            id: props.editObj.directManageId,
            text: contacts.getManagerByIdComplete?.displayName,
            description: contacts.getManagerByIdComplete?.email,
          },
        ] || []
      );
  }, [
    props.editObj,
    props.toggleEdit,
    contacts.getCompanyByIdComplete,
    contacts.getSectionByIdComplete,
    contacts.getManagerByIdComplete,
  ]);

  useEffect(() => {
    if (!props.toggleEdit) return setFile([]);
    if (!contacts?.getContactImgComplete) return setFile([]);
    let file = new File([contacts?.getContactImgComplete], "");
    setFile(URL.createObjectURL(file));
  }, [props.toggleEdit, contacts?.getContactImgComplete]);

  useEffect(() => {
    if (props.formik.values?.companyId)
      return setFieldsErrors((prev) => ({
        ...prev,
        sectionId: null,
        directManageId: null,
      }));
  }, [props.formik.values]);

  useMemo(async () => {
    if (
      !props.toggleAdd ||
      (!props.formik.values.companyId && !props.formik.values.sectionId)
    )
      return;
    let chosenComp = await getContactByIdReq({
      id: props.formik.values.sectionId
        ? props.formik.values.sectionId
        : props.formik.values.companyId,
    });
    chosenComp = chosenComp?.data?.result || null;
    if (!chosenComp) return;
    valuesArrToFill.map((row) => {
      props?.formik.setFieldValue(row, chosenComp[row]);
    });
  }, [
    props.formik.values.companyId,
    props.formik.values.sectionId,
    props.toggleAdd,
  ]);

  return (
    <Grid container>
      <Grid container lg={9} className="lgContainer">
        <Grid item xs={12} className={classes.contactGroup}>
          <Typography style={{ whiteSpace: "nowrap" }}>
            {Object.translate(`LABEL.INDVIDUAL_CLASSIFICATION`)}:
          </Typography>
          <FormikRadioButtonGroup
            allRadios={radioGroupBtns}
            row={true}
            value={props.formik?.values?.type}
            onChange={(e) => props.formik.setFieldValue("type", e.target.value)}
            name="type"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.NAME")}
            className="input"
            name="displayName"
            id="displayName"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
            required
          />
        </Grid>
        {authUser?.rolesId?.includes(1) && (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className={classes.contactFld}
          >
            <FormikSelectDropdownFeild
              InputProps={{ disableUnderline: true }}
              title={Object.translate("LABEL.RELATED_USER")}
              name="contactId"
              id="contactId"
              options={usersGroup}
              multiple={false}
              onInputChange={handleInputChange}
            />
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            className="input"
            label={Object.translate("LABEL.JOB_POSITION")}
            name="jobDesc"
            id="jobDesc"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.SPECIALIZATION")}
            className="input"
            name="specialization"
            id="specialization"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <FormikSelectDropdownFeild
            InputProps={{ disableUnderline: true }}
            title={Object.translate("LABEL.COMPANY")}
            name="companyId"
            options={companiesGroup}
            multiple={false}
            onInputChange={handleInputChange}
            handleClear={() => props.formik.setFieldValue("companyId", null)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <FormikSelectDropdownFeild
            InputProps={{ disableUnderline: true }}
            title={Object.translate("LABEL.SECTION")}
            name="sectionId"
            options={sectionsGroup}
            multiple={false}
            onInputChange={handleInputChange}
            handleClear={() => props.formik.setFieldValue("sectionId", null)}
          />
          {fieldsErrors?.sectionId ? (
            <div style={{ color: "red", fontSize: "12px" }}>
              {fieldsErrors?.sectionId}
            </div>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <FormikSelectDropdownFeild
            InputProps={{ disableUnderline: true }}
            title={Object.translate("LABEL.DIRECT_MANAGER")}
            name="directManageId"
            options={managersGroup}
            multiple={false}
            onInputChange={handleInputChange}
            handleClear={() =>
              props.formik.setFieldValue("directManageId", null)
            }
            fullWidth
          />
          {fieldsErrors?.directManageId ? (
            <div style={{ color: "red", fontSize: "12px" }}>
              {fieldsErrors?.directManageId}
            </div>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.EMAIL")}
            className="input"
            name="email"
            id="email"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.PHONE")}
            className="input"
            name="office"
            id="office"
            variant="standard"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.MOBLIE")}
            className="input"
            name="mobile"
            id="mobile"
            variant="standard"
            fullWidth
            InputProps={{ disableUnderline: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.WEBSITE")}
            className="input"
            name="website"
            id="website"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <FormikSelectDropdownFeild
            InputProps={{ disableUnderline: true }}
            title={Object.translate("LABEL.COUNTRY")}
            variant="standard"
            name="country"
            options={common.AllCountries}
            multiple={false}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.CITY")}
            className="input"
            name="city"
            id="city"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.ADDRESS")}
            className="input"
            name="address"
            id="address"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} className={classes.photoGrid}>
        <Box className={classes.photo}>
          <img src={file} className={classes.imgUpload} />
        </Box>
        <label htmlFor="contained-button-file">
          <Input
            accept={[".png", ".jpg", ".jpeg", ".tiff", ".apng", ".pjpeg"]}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleChange}
          />
          <Button component="span" className={classes.addPhoto}>
            {Object.translate("LABEL.ADD_PHOTO")}
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};

export default IndvidualTap;
