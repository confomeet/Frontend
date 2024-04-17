import React, { useState, useMemo, useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography, Tabs, Tab } from "components/muiComponents";
import ContactsCard from "components/contactsCard/ContactsCard";
import clsx from "clsx";
import { contactsStyles } from "./style";
import ContactsHeader from "./ContactsHeader";
import HandleContact from "./HandleContact";
import { DisplayType as ContactsDisplayType } from "constantData";
import ContactsTable from "./ContactsTable";
import actions from "redux/actions";
import FullPagination from "components/fullPagination/FullPagination";
import normalRing from "../../assets/normal_ring.mp3";
import { useInterval } from "hooks";
import ContactsSearchFields from "./ContactsSearchFields";
import PropTypes from "prop-types";
import { CONTACTS_TYPES } from "constantData";
import { useTheme } from "@mui/styles";

const {
  getMyContacts,
  addContact,
  editContact,
  deleteContact,
  setSubHeader,
  getContactById,
  getContactByIdDone,
  getUserById,
  getUserByIdDone,
  getCompanyById,
  getCompanyByIdDone,
  getSectionById,
  getSectionByIdDone,
  getManagerById,
  getManagerByIdDone,
  getContactsTabs,
} = actions;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MyContacts() {
  const dispatch = useDispatch();
  const {
    contacts,
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  const classes = contactsStyles();
  const theme = useTheme();
  const initSearchParams = {
    text: null,
    name: null,
    email: null,
    tabId: 0,
  };

  const [data, setData] = useState({
    count: 0,
    items: [],
  });
  const [view, setView] = useState(ContactsDisplayType.grid);
  const [toggleAdd, switchAdd] = useState(false);
  const [toggleEdit, switchEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [pageSize, setPageSize] = useState(9);
  const [pageIndex, setPageIndex] = useState(1);
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({
    ...initSearchParams,
  });
  const [openFilters, setOpenFilters] = useState(false);
  const [contactsTabs, setContactsTabs] = useState([]);

  const handleGetContactsTabs = () => {
    window.dispatch(getContactsTabs());
  };
  const handleGetMyContacts = async (
    payload = {
      ...searchParams,
      pageIndex,
      pageSize,
    }
  ) => {
    let body = payload;
    window.dispatch(getMyContacts({ body }));
  };

  const handleChangeTab = (event, newValue) => {
    setSearchParams((prev) => ({
      ...prev,
      tabId: newValue,
    }));
    handleGetMyContacts({
      ...searchParams,
      tabId: newValue,
      pageIndex,
      pageSize,
    });
  };

  const handleGetContactById = (id) => {
    window.dispatch(getContactById({ params: { id } }));
  };
  const handleGetContactImg = (fileId) => {
    window.dispatchWantedAction("GET_CONTACT_IMG", {
      params: {
        fileId,
      },
    });
  };
  const handleGetContactParentForEdit = (obj) => {
    if (Object.isObjectEmpty(obj)) return;
    if (obj?.companyId)
      window.dispatch(getCompanyById({ params: { id: obj?.companyId } }));
    if (obj?.sectionId)
      window.dispatch(getSectionById({ params: { id: obj?.sectionId } }));
    if (obj?.directManageId)
      window.dispatch(getManagerById({ params: { id: obj?.directManageId } }));
  };
  const handleSearchParamsChange = (key, value) => {
    if (key === "topic") key = "text";
    setSearchParams((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleClearSearchParams = () => {
    setSearchParams((prev) => ({
      ...initSearchParams,
      tabId: searchParams?.tabId,
    }));
    setPageSize(10);
    setPageIndex(1);
    handleGetMyContacts({
      ...initSearchParams,
      tabId: searchParams?.tabId,
      pageIndex: 1,
      pageSize: 10,
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteContact({ id }));
  };
  const beep = new Audio(normalRing);

  useInterval(async () => {
    if (!open) return;
    beep.play();
  }, 3000);

  const goToMeeting = (props) => {
    console.error("Direct call is currently not suported");
  };
  const handleGetUserById = async (id) => {
    window.dispatch(getUserById({ id }));
  };

  const getContactRealtedInfo = (item) => {
    if (
      item?.companyId &&
      (item?.type === CONTACTS_TYPES.SECTION ||
        item?.type === CONTACTS_TYPES.COMPANY)
    )
      handleGetContactById(item?.companyId);
    if (
      item?.type === CONTACTS_TYPES.INDIVIDUAL ||
      item?.type === CONTACTS_TYPES.MANAGER
    )
      handleGetContactParentForEdit(item);
    if (item?.contactId) handleGetUserById(item?.contactId);
  };

  const contentSection = useMemo(
    () =>
      data?.items.length ? (
        data?.items.map((item) => (
          <ContactsCard
            switchEdit={() => {
              setEditObj(item);
              switchEdit(true);
              getContactRealtedInfo(item);
              if (Array.isFullArray(item?.file))
                handleGetContactImg(item?.file[0]?.id);
            }}
            handleDelete={handleDelete}
            {...item}
            name={item.displayName}
            joinMeeting={goToMeeting}
          />
        ))
      ) : (
        <Box
          className={classes.noContactsPhrase}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Typography
            className={classes.noContactsPara}
            style={{
              padding: "11px",
              backgroundColor: theme.globals.colors.primary,
              borderRadius: "4px",
              color: theme.globals.colors.textWhite,
            }}
          >
            {Object.translate("FULL_SENTENCE.NO_CONTACTS")}
          </Typography>
        </Box>
      ),
    [data, contacts.getActiveContactsComplete]
  );
  const handleChange = (event, nextView) => {
    setView(nextView);
    handleClearSearchParams();
  };

  const handlePaginationClick = (e, num) => {
    setPageIndex(num);
    handleGetMyContacts({ ...searchParams, pageIndex: num, pageSize });
  };
  const handleRowsPerPage = (e) => {
    let rowsPerPage = e.target.value;
    setPageSize(rowsPerPage);
    setPageIndex(1);
    handleGetMyContacts({ ...searchParams, pageIndex, pageSize: rowsPerPage });
  };

  const handleView = () => {
    switchEdit(false);
    switchAdd(false);
    setEditObj(null);
    window.dispatch(getUserByIdDone({ data: {} }));
    window.dispatch(getContactByIdDone({ data: {} }));
    window.dispatch(getCompanyByIdDone({ data: {} }));
    window.dispatch(getSectionByIdDone({ data: {} }));
    window.dispatch(getManagerByIdDone({ data: {} }));
    window.dispatchWantedAction("GET_CONTACT_IMG_DONE", { data: {} });
  };

  const handleAction = (contactData) => {
    if (toggleAdd) {
      dispatch(addContact({ body: contactData }));
    } else if (toggleEdit) {
      dispatch(editContact({ body: contactData, id: editObj.id }));
    }
  };

  const renderContacts = (view) => {
    switch (view) {
      case ContactsDisplayType.table:
        return (
          <>
            <ContactsTable {...ContactProps()} />
          </>
        );

      case ContactsDisplayType.grid:
      default:
        return (
          <>
            <Box
              marginY={4}
              className="d-flex flex-wrap contentSection"
              marginBottom={4}
            >
              {contentSection}
            </Box>
            {data?.items.length ? (
              <Box className={classes.boxPagination}>
                <FullPagination
                  count={Math.ceil(data?.count / pageSize) || 0}
                  page={pageIndex}
                  variant="outlined"
                  shape="rounded"
                  handlePaginationClick={handlePaginationClick}
                  rowsPerPage={pageSize}
                  handleRowsPerPage={handleRowsPerPage}
                />
              </Box>
            ) : (
              <></>
            )}
          </>
        );
    }
  };

  useEffect(() => {
    handleGetMyContacts();
    handleGetContactsTabs();
  }, [isRTL]);

  useEffect(() => {
    (async () => {
      if (toggleAdd || toggleEdit) return;
      window.dispatch(
        setSubHeader({
          subHeader: (
            <Box className={classes.myContactsMainHeader}>
              <ContactsHeader
                switchAdd={switchAdd}
                view={view}
                handleChange={handleChange}
                {...ContactProps()}
              />
            </Box>
          ),
        })
      );
    })();
  }, [isRTL, toggleAdd, toggleEdit, view, openFilters, searchParams]);

  useEffect(() => {
    if (!contacts?.getMyContactsComplete)
      return setData({ count: 0, items: [] });
    if (!Array.isArray(contacts.getMyContactsComplete?.items))
      return setData({ count: 0, items: [] });
    setData({
      count: contacts.getMyContactsComplete?.count,
      items: contacts.getMyContactsComplete?.items,
    });
  }, [contacts.getMyContactsComplete]);

  useEffect(() => {
    if (Object.isObjectEmpty(contacts.deleteContactDone)) return;
    handleGetMyContacts();
    handleView();
  }, [contacts.deleteContactDone]);

  useEffect(() => {
    if (!Array.isFullArray(contacts.getContactsTabsComplete))
      return setContactsTabs([]);
    setContactsTabs(contacts.getContactsTabsComplete);
  }, [contacts.getContactsTabsComplete]);

  useEffect(() => {
    if (openFilters) return;
    setSearchParams(initSearchParams);
  }, [openFilters]);

  const ContactProps = () => ({
    editObj,
    setEditObj,
    toggleEdit,
    switchEdit,
    toggleAdd,
    switchAdd,
    handleView,
    handleAction,
    handleRowsPerPage,
    data,
    goToMeeting,
    searchParams,
    setSearchParams,
    openFilters,
    setOpenFilters,
    handleGetMyContacts,
    handleSearchParamsChange,
    handleClearSearchParams,
    setPageSize,
    pageSize,
    setPageIndex,
    pageIndex,
    getContactRealtedInfo,
    handleGetContactImg,
  });

  return (
    <Box className={clsx(classes.myContacts, "d-flex-column")}>
      {toggleAdd || toggleEdit ? (
        <HandleContact {...ContactProps()} />
      ) : (
        <Box width="100%">
          <Box
            className={clsx(classes.headerSearchFieldsBox, "d-flex-column")}
            style={{ height: "fit-content !important" }}
          >
            <ContactsSearchFields {...ContactProps()} />
          </Box>
          <Box className={classes.tabsFiltersMainBox}>
            <Tabs
              value={searchParams?.tabId}
              onChange={handleChangeTab}
              aria-label="basic tabs example"
              sx={{ justifyContent: "space-around" }}
            >
              {Array.isFullArray(contactsTabs) &&
                contactsTabs?.map((tab) => (
                  <Tab
                    key={tab?.id}
                    label={tab?.value}
                    {...a11yProps(tab?.id)}
                  />
                ))}
            </Tabs>
          </Box>
          {renderContacts(view)}
        </Box>
      )}
    </Box>
  );
}
