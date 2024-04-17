import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import clsx from "clsx";
import { IoArrowBack } from "components/icons";
import Switcher from "components/materialComponents/Switcher";
import { Box, Button, Grid, Typography } from "components/muiComponents";
import { CONTACTS_TYPES } from "constantData";
import { Formik } from "formik";
import ToolTip from "../../components/toolTip/ToolTip";

import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import { getModifiedContacts } from "utils";
import CompanyTab from "./Tabs/CompanyTab";
import IndvidualTap from "./Tabs/IndvidualTap";
import {
  contactsInitialValues,
  getContactsValidationSchema,
} from "./Tabs/contactsFormikUtils";
import { contactsStyles } from "./style";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import SecondaryButton from "videoComponents/buttonsGeneral/SecondaryButton";
const { addContact, editContact, setSubHeader } = actions;

const HandleContact = (props) => {
  const classes = contactsStyles();
  const {
    contacts,
    settingsReducer: {
      settings: { authUser },
    },
  } = useSelector((state) => state);
  const [value, setValue] = useState(0);
  const [imageData, setImageData] = useState(null);
  const initialValues = props?.toggleAdd
    ? {
        ...contactsInitialValues,
        type: value === 0 ? CONTACTS_TYPES.INDIVIDUAL : CONTACTS_TYPES.COMPANY,
      }
    : {
        ...props?.editObj,
        isManager: props?.editObj?.type === "manager" ? true : false,
      };

  const validationSchema = getContactsValidationSchema();
  const filterData = (type) => {
    if (!Array.isArray(props.data)) return [];
    return props.data.filter((e) => e.type === type);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className={classes.tabpanel} sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (formik, newValue) => {
    setValue(newValue);
    formik.resetForm({
      values: {
        ...contactsInitialValues,
        type:
          newValue === 0 ? CONTACTS_TYPES.INDIVIDUAL : CONTACTS_TYPES.COMPANY,
      },
    });
  };

  const handleContactsProps = useMemo(() => {
    const getCompanies = () =>
      getModifiedContacts(filterData(CONTACTS_TYPES.COMPANY));

    const getSections = (companyId = -1) => {
      const sections = filterData(CONTACTS_TYPES.SECTION);
      return getModifiedContacts(
        sections.filter((s) => s.companyId === companyId)
      );
    };
    const getIndividuals = (companyId = -1, sectionId = -1) => {
      const individuals = filterData(CONTACTS_TYPES.INDIVIDUAL);
      return getModifiedContacts(
        individuals.filter(
          (i) => i.companyId === companyId || i.sectionId === sectionId
        )
      );
    };
    return { getCompanies, getSections, getIndividuals };
  }, []);
  const onSubmit = async (values) => {
    let body = { ...values, sectionIds: values.sectionIds.map((s) => s.id) };
    if (contacts.getContactsDone.companyId === values.companyId) {
      body.sectionIds = [];
    }

    if (body.contactId === null) delete body.contactId;
    window.dispatch(
      props.toggleEdit
        ? editContact({ body, id: props?.editObj?.id })
        : addContact({ body, imageData })
    );

    props?.switchEdit(false);
    props?.switchAdd(false);
    props?.setSearchParams({
      text: null,
      name: null,
      email: null,
      tabId: 0,
    });
  };

  useEffect(() => {
    if (props?.toggleEdit && props?.editObj?.type)
      setValue(
        props?.editObj?.type === CONTACTS_TYPES.INDIVIDUAL ||
          props?.editObj?.type === CONTACTS_TYPES.MANAGER
          ? 0
          : 1
      );
  }, [props.editObj, props.toggleAdd, props.toggleEdit]);

  useEffect(() => {
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: (
            <Grid container item xs={12} className="titleMainGrid">
              <Grid item xs={12} md={12} lg={12} className="titleIconGird">
                <Box className="titleBox">
                  <Typography className="titleTypography">
                    {Object.translate(
                      props.toggleAdd ? "CONTACT.ADD" : "CONTACT.EDIT"
                    )}
                  </Typography>
                </Box>
                <ToolTip
                  title={Object.translate("BUTTONS.BACK")}
                  placement="top"
                >
                  <Box
                    className="titleIconBox"
                    onClick={() => props.handleView()}
                  >
                    <IoArrowBack className="leftArrowBack" />
                  </Box>
                </ToolTip>
              </Grid>
            </Grid>
          ),
        })
      );
    })();
  });

  return (
    <Box width="100%">
      <Box className={classes.addContactBox} sx={{ width: "100%" }}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          enableReinitialize={true}
          validationSchema={validationSchema}
        >
          {(formik) => {
            return (
              <>
                {authUser?.rolesId?.includes(1) && (
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                      marginBottom: "20px",
                    }}
                  >
                    <Tabs
                      className={classes.contactTabs}
                      value={value}
                      onChange={(event, newValue) =>
                        handleChange(formik, newValue)
                      }
                      aria-label="basic tabs example"
                    >
                      <Tab
                        label={Object.translate("LABEL.INDVIDUAL")}
                        {...a11yProps(0)}
                        disabled={props.toggleAdd ? false : true}
                      />
                      <Tab
                        label={Object.translate("LABEL.COMPANY")}
                        {...a11yProps(1)}
                        disabled={props.toggleAdd ? false : true}
                      />
                    </Tabs>
                  </Box>
                )}
                <TabPanel value={value} index={0}>
                  <IndvidualTap
                    {...handleContactsProps}
                    {...props}
                    formik={formik}
                    imageData={imageData}
                    setImageData={setImageData}
                  />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <CompanyTab
                    {...handleContactsProps}
                    {...props}
                    formik={formik}
                    imageData={imageData}
                    setImageData={setImageData}
                  />
                </TabPanel>

                {contacts.getContactsDone.companyId !==
                  formik.values.companyId &&
                  authUser?.rolesId?.includes(1) && (
                    <>
                      <Grid
                        item
                        xs={12}
                        style={{
                          gap: "10px",
                          display: "flex",
                          borderRadius: "0px !important",
                          "& > label": {
                            margin: "0!important",
                          },
                        }}
                      >
                        <Switcher
                          label={Object.translate("LABEL.SHARE_CONTACT")}
                          switchToggle={formik.values.shareWith}
                          handleSwitchChange={(checked) => {
                            formik.setFieldValue("shareWith", checked);
                          }}
                          labelPlacement="start"
                        />
                      </Grid>
                    </>
                  )}

                <Grid
                  item
                  lg={12}
                  md={12}
                  sm={12}
                  className={classes.contactButtons}
                  style={{
                    display: "flex",
                    borderRadius: "0px !important",
                  }}
                >
                  <PrimaryButton
                    onClick={formik.submitForm}
                    primaryButton={Object.translate("BUTTONS.SAVE")}
                  />

                  <SecondaryButton
                    disableElevation
                    onClick={() => props.handleView && props.handleView()}
                    secondaryButton={Object.translate("BUTTONS.CANCEL")}
                  />
                </Grid>
              </>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default HandleContact;
