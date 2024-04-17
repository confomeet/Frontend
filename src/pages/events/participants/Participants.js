import { Close } from "@mui/icons-material";
import moderator from "assets/images/moderator.png";
import party from "assets/images/party.png";
import { AddIcon, ImUsers, TiGroup } from "components/icons";
import { Box, Tab, Tabs, Typography } from "components/muiComponents";
import Tooltip from "components/muiComponents/BootstrapTooltip";
import DropDownTextField from "components/muiComponents/DropDownTextField";
import SearchAutoComplete from "components/select/SearchAutoComplete";
import TagWithX from "components/tagWithX/TagWithX";
import PropTypes from "prop-types";
import { useState } from "react";
import actions from "redux/actions";
import { getUsersGroupsReq } from "redux/network/usersgroups";
import { getModifiedUserGroups } from "utils";
import PrimaryButton from "videoComponents/buttonsGeneral/PrimaryButton";
import TextFeildGeneral from "videoComponents/textFeildGeneral/TextFeildGeneral";
import PageSubHeading from "videoComponents/typographyGeneral/PageSubHeading";
import { eventsStyles } from "../style";
import { useSelector } from "react-redux";

let timeout;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
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

const minMobileLength = "505050500".length;
const maxMobileLength = "00971505050500".length;

export const isEmiratesMobileNo = (val) => {
  if (!val) return false;
  if (typeof val !== "string") return false;
  let re = /^(?:\+9715|009715|971|0)[0-9]{0,9}$/;
  return re.test(val.trim());
};

const replaceAtIndex = (str, index, replacement) => {
  return str.substring(0, index) + replacement + str.substring(index + 1);
};

const validateUAEMobile = (num) => {
  let mobileError = Object.translate("ERROR.EMAIL.IN_VALID"),
    number = num;
  if (!number) return { mobileError: null, number };
  if (!isEmiratesMobileNo(number)) return { mobileError, number };

  if (number.length < minMobileLength || number.length > maxMobileLength)
    return { mobileError, number };

  if (number.startsWith("00971"))
    return {
      mobileError: number.length === maxMobileLength ? null : mobileError,
      number,
    };

  if (number.startsWith("971")) {
    if (number.length < maxMobileLength - 2) return { mobileError, number };
    return { mobileError: null, number: `00${number}` };
  }

  if (number.startsWith("+971")) {
    if (number.length < maxMobileLength - 1) return { mobileError, number };
    return { mobileError: null, number: replaceAtIndex(number, 0, "00") };
  }

  if (number.startsWith("5")) {
    if (number.length < minMobileLength) return { mobileError, number };
    return { mobileError: null, number: `00971${number}` };
  }

  if (number.startsWith("05")) {
    if (number.length < minMobileLength + 1) return { mobileError, number };
    return { mobileError: null, number: replaceAtIndex(number, 0, "00971") };
  }

  return { mobileError, number };
};

const getParticipantText = (p, setAddNewContact, setNewContact) => {
  const subText = p.subText || p.subText2 ? p.subText || p.subText2 : "";
  if (p.mainText === Object.translate("VALUE.UNKNOWN"))
    return (
      <>
        <Tooltip placement="top" title={Object.translate("CONTACT.ADD")} arrow>
          <span
            onClick={() => {
              setAddNewContact(true);
              setNewContact({ email: p.subText });
            }}
            style={{ cursor: "pointer" }}
          >
            {subText}
          </span>
        </Tooltip>
        &nbsp;
      </>
    );

  return (
    <>
      {p?.mainText && (
        <Typography className="mainText">{p?.mainText || ""}</Typography>
      )}

      <Typography className="emailText">{subText}</Typography>
    </>
  );
};

const Participants = ({
  open,
  error,
  createdBy,
  textFieldValue,
  myContacts,
  participants,
  setParticipants,
  textFieldOnChange,
  textFieldOnKeyDown,
  textFieldOnPaste,
  handleDeleteParticipant,
  disableAdd,
  setSelectedGroups,
  selectedGroups,
  isEdit,
}) => {
  const [addNewContact, setAddNewContact] = useState(false);
  const [openPartyBox, setOpenPartyBox] = useState(true);
  const [newContact, setNewContact] = useState(null);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setError] = useState({
    name: null,
    mobile: null,
    email: null,
    emailOrMobile: null,
  });
  const [value, setValue] = useState(0);
  const [usersGroups, setUsersGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = async (e, text, values) => {
    if (timeout) clearTimeout(timeout);
    if (!text || text.length < 3) {
      setUsersGroups([]);
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
      setUsersGroups(newUsers || []);
    }, 500);
  };

  const isEmailExsist = (email) => {
    return !!participants.filter((p) => p.email === email)[0];
  };

  const isEmail = (email) => {
    return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
  };

  const validateEmail = (value) => {
    let emailError = null,
      email = value;
    if (!email) return { email, emailError };

    if (!isEmail(email)) {
      return { email, emailError: Object.translate("ERROR.EMAIL.IN_VALID") };
    }

    if (isEmailExsist(email)) {
      return { email, emailError: Object.translate("ERROR.EMAIL.EXISTS") };
    }
    return { email, emailError };
  };
  const classes = eventsStyles();
  const handleEmailChange = (e) => {
    const value = e.target.value;
    if (!value) {
      setEmail("");
      setError((prev) => ({ ...prev, email: null }));
      return;
    }
    setEmail(value);
  };

  const handleMobileChange = (e) => {
    const value = e.target.value;
    if (!value) {
      setMobile("");
      setError((prev) => ({ ...prev, mobile: null }));
      return;
    }
    setMobile(value);
  };

  const getInitState = (id) => {
    setMobile("");
    if (!id || id === "e") setEmail("");
    if (!id || id === "m") setName("");
    setError({
      name: null,
      mobile: null,
      email: null,
      emailOrMobile: null,
    });
  };
  const handleChooseContact = (id) => (obj) => {
    if (!obj) return getInitState(id);
    if (participants.filter((p) => p.email === obj.emai).length)
      return getInitState();
    if (participants.filter((p) => p.mobile === obj.mobile).length)
      return getInitState();
    const newObj = { ...obj };
    delete newObj.id;
    setParticipants((prevArr) => [
      ...prevArr,
      { ...newObj, isModerator: false, shouldSend: true },
    ]);
    getInitState();
  };

  const handleAddNewParticipant = () => {
    const { mobileError, number } = validateUAEMobile(mobile);
    const { emailError } = validateEmail(email);
    if (!name || mobileError || emailError) {
      setError({
        name: name ? null : Object.translate("ERROR.NAME"),
        email: emailError ? emailError : null,
        mobile: mobileError ? Object.translate("ERROR.MOBILE.IN_VALID") : null,
        emailOrMobile:
          !email && !mobile ? Object.translate("ERROR.EMAIL_OR_MOBILE") : null,
      });
      return;
    }
    setMobile(number);
    const newParticipant = {
      mobile: number,
      email: email,
      isModerator: false,
      mainText: name,
      displayName: name,
      subText: email,
      subText2: number,
      shouldSend: true,
    };
    setParticipants((prevList) => [...prevList, newParticipant]);
    getInitState();
  };

  const handleSelectedGroups = (list) => {
    if (Object.isObjectEmpty(list)) return;
    setSelectedGroups((prev) => [
      ...new Map([...prev, list].map((item) => [item?.id, item])).values(),
    ]);
    setSelectedGroup("");
  };
  return (
    <>
      <Box className={classes.addEventPartyBox}>
        <Box className={classes.imUsersBox}>
          <ImUsers />
          <PageSubHeading subHeading={Object.translate("LABEL.PARTICIPANTS")} />
        </Box>
        {!disableAdd && (
          <Box
            className={classes.addRemoveBox}
            onClick={() => setOpenPartyBox(!openPartyBox)}
          >
            {openPartyBox ? (
              <Close />
            ) : (
              <Tooltip
                placement="top"
                title={Object.translate("EVENTS.ADD_PARTICIPANT")}
                arrow
              >
                <AddIcon />
              </Tooltip>
            )}
          </Box>
        )}
      </Box>
      {!isEdit && !disableAdd && openPartyBox && (
        <Box sx={{ marginBottom: "18px" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon label tabs example"
          >
            <Tab
              icon={<ImUsers />}
              label={Object.translate("LABEL.CONTACTS")}
            />
            <Tab
              icon={<TiGroup />}
              label={Object.translate("LABEL.USERS_GROUPS")}
            />
          </Tabs>
        </Box>
      )}
      <TabPanel value={value} index={0}>
        {openPartyBox && !disableAdd && (
          <Box width="100%">
            {formError.emailOrMobile && (
              <Typography className="emailOrMobileSpan">
                {formError.emailOrMobile}
              </Typography>
            )}
          </Box>
        )}
        {openPartyBox && !disableAdd && (
          <Box className={classes.partyFeilds} width="100%">
            <Box className={classes.nameFeild}>
              <TextFeildGeneral
                variant="standard"
                className="userByMobile"
                type="text"
                label={Object.translate("LABEL.NAME")}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (formError.name)
                    setError((prev) => ({
                      ...prev,
                      name: null,
                    }));
                }}
                error={formError.name}
                helperText={formError.name}
                onBlur={() =>
                  !name &&
                  setError((prev) => ({
                    ...prev,
                    name: Object.translate("ERROR.NAME"),
                  }))
                }
              />
            </Box>
            <Box className={classes.emailBox}>
              <DropDownTextField
                id="participants-email"
                options={myContacts}
                onChange={handleChooseContact("e")}
                open={formError.email ? false : email.trim().length > 1}
                error={formError.email}
                helperText={formError.email}
                textFieldValue={email}
                textFieldOnChange={handleEmailChange}
                label={Object.translate("LABEL.PARTICIPANTS_EMAIL")}
              />
            </Box>
            <Box className={classes.emailBox}>
              <DropDownTextField
                id="participants-mobile"
                options={myContacts}
                onChange={handleChooseContact("m")}
                open={formError.mobile ? false : mobile.trim().length > 1}
                error={formError.mobile}
                helperText={formError.mobile}
                textFieldValue={mobile}
                textFieldOnChange={handleMobileChange}
                label={Object.translate("LABEL.PARTICIPANTS_MOBILE")}
              />
            </Box>
            <Box className={classes.btnBox}>
              <PrimaryButton
                variant="outlined"
                onClick={handleAddNewParticipant}
                primaryButton={Object.translate("EVENTS.ADD_PARTICIPANT")}
              />
            </Box>
          </Box>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          className={classes.addGroupSelectLTR}
        >
          <SearchAutoComplete
            autoCompleteProps={{
              multiple: false,
              options: usersGroups || [],
              onChange: (list) => handleSelectedGroups(list),
              onInputChange: async (e, text) => {
                await handleInputChange(e, text);
              },
              value: selectedGroup,
            }}
            textFieldProps={{
              placeHolder: Object.translate("FULL_SENTENCE.TYPE_TO_SEARCH"),
              label: Object.translate("LABEL.USER_GROUP_NAME"),
              variant: "standard",
              helperText: Object.translate("FULL_SENTENCE.TYPE_TO_SEARCH"),
              value: selectedGroup,
            }}
          />
        </Box>
      </TabPanel>

      <Box display="flex" flexDirection="column" width="100%">
        <Box className="PartyBox">
          {participants.map((p, idx) => {
            return (
              <TagWithX
                onXClick={
                  createdBy && p.userId === createdBy
                    ? null
                    : () => {
                        handleDeleteParticipant(p, idx);
                      }
                }
                text={getParticipantText(p, setAddNewContact, setNewContact)}
                actions={[
                  {
                    src: p.isModerator ? moderator : party,
                    alt: p.isModerator ? "moderator" : "party",
                    className: p.isModerator ? "checked" : "",
                    title: p.isModerator
                      ? Object.translate("LABEL.MAKE_USER")
                      : Object.translate("LABEL.MAKE_MODERATOR"),
                    onClick: () => {
                      if (createdBy && p.userId === createdBy) return;
                      setParticipants((prevArr) =>
                        prevArr.map((e, i) =>
                          i === idx
                            ? {
                                ...e,
                                isModerator: !e.isModerator,
                                shouldSend: true,
                              }
                            : e
                        )
                      );
                    },
                  },
                ]}
              />
            );
          })}
          {selectedGroups.map((p, idx) => {
            return (
              <TagWithX
                onXClick={() =>
                  setSelectedGroups((prev) =>
                    prev?.filter((row) => row?.id !== p?.id)
                  )
                }
                text={p?.groupName || ""}
                actions={[
                  {
                    src: p?.isModerator ? moderator : party,
                    alt: p?.isModerator ? "moderator" : "party",
                    className: p?.isModerator ? "checked" : "",
                    title: p?.isModerator
                      ? Object.translate("LABEL.MAKE_USER")
                      : Object.translate("LABEL.MAKE_MODERATOR"),
                    onClick: () => {
                      if (createdBy && p?.userId === createdBy) return;
                      setParticipants((prevArr) =>
                        prevArr.map((e, i) =>
                          i === idx
                            ? {
                                ...e,
                                isModerator: !e?.isModerator,
                                shouldSend: true,
                              }
                            : e
                        )
                      );
                    },
                  },
                ]}
              />
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Participants;
