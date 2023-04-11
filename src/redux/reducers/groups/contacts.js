import actions from "../../actions";
import { combineReducers } from "redux";

const {
  GET_CONTACTS,
  GET_CONTACTS_DONE,
  UPDATE_CONTACTS_STATUS,
  GET_MY_CONTACTS,
  GET_MY_CONTACTS_DONE,
  GET_CONTACT_BY_ID,
  GET_CONTACT_BY_ID_DONE,
  ADD_CONTACT,
  ADD_CONTACT_DONE,
  EDIT_CONTACT,
  EDIT_CONTACT_DONE,
  DELETE_CONTACT,
  DELETE_CONTACT_DONE,
  INITIATE_CONTACT_MEET,
  INITIATE_CONTACT_MEET_DONE,
  FEEDBACK_CONTACT,
  FEEDBACK_CONTACT_DONE,
  SET_INCOMING_CALL,
  SET_CALL_RESPONSE,
  GET_COMPANY_BY_ID,
  GET_COMPANY_BY_ID_DONE,
  GET_SECTION_BY_ID,
  GET_SECTION_BY_ID_DONE,
  GET_MANAGER_BY_ID,
  GET_MANAGER_BY_ID_DONE,
  GET_CONTACTS_TABS,
  GET_CONTACTS_TABS_DONE,
  GET_CONNECTED_CONTACTS,
  GET_DISCONNECTED_CONTACTS,
  GET_CONTACT_IMG,
  GET_CONTACT_IMG_DONE,
} = actions;

export const IncomingCall = (state = null, action) => {
  switch (action.type) {
    case SET_INCOMING_CALL:
      return action.data;
    default:
      return state;
  }
};

export const CallResponse = (state = null, action) => {
  switch (action.type) {
    case SET_CALL_RESPONSE:
      return action.data;
    default:
      return state;
  }
};

export const getContacts = (state = false, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return true;
    case GET_CONTACTS_DONE:
      return false;
    default:
      return state;
  }
};
export const getContactsDone = (state = {}, action) => {
  switch (action.type) {
    case GET_CONTACTS_DONE:
      return action.data;

    default:
      return state;
  }
};

export const gettingMyContacts = (state = false, action) => {
  switch (action.type) {
    case GET_MY_CONTACTS:
      return true;
    case GET_MY_CONTACTS_DONE:
      return false;
    default:
      return state;
  }
};
export const getMyContactsComplete = (state = [], action) => {
  switch (action.type) {
    case GET_MY_CONTACTS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const gettingContactById = (state = false, action) => {
  switch (action.type) {
    case GET_CONTACT_BY_ID:
      return true;
    case GET_CONTACT_BY_ID_DONE:
      return false;
    default:
      return state;
  }
};
export const getContactByIdComplete = (state = [], action) => {
  switch (action.type) {
    case GET_CONTACT_BY_ID_DONE:
      return action.data;
    default:
      return state;
  }
};

export const gettingCompanyById = (state = false, action) => {
  switch (action.type) {
    case GET_COMPANY_BY_ID:
      return true;
    case GET_COMPANY_BY_ID_DONE:
      return false;
    default:
      return state;
  }
};
export const getCompanyByIdComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_COMPANY_BY_ID_DONE:
      return action.data;
    default:
      return state;
  }
};

export const gettingSectionById = (state = false, action) => {
  switch (action.type) {
    case GET_SECTION_BY_ID:
      return true;
    case GET_SECTION_BY_ID_DONE:
      return false;
    default:
      return state;
  }
};
export const getSectionByIdComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_SECTION_BY_ID_DONE:
      return action.data;
    default:
      return state;
  }
};
export const gettingManagerById = (state = false, action) => {
  switch (action.type) {
    case GET_MANAGER_BY_ID:
      return true;
    case GET_MANAGER_BY_ID_DONE:
      return false;
    default:
      return state;
  }
};
export const getManagerByIdComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_MANAGER_BY_ID_DONE:
      return action.data;
    default:
      return state;
  }
};

export const addContact = (state = false, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return true;
    case ADD_CONTACT_DONE:
      return false;
    default:
      return state;
  }
};
export const addContactDone = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONTACT_DONE:
      return action.data;
    default:
      return state;
  }
};

export const editContact = (state = false, action) => {
  switch (action.type) {
    case EDIT_CONTACT:
      return true;
    case EDIT_CONTACT_DONE:
      return false;
    default:
      return state;
  }
};

export const editContactDone = (state = {}, action) => {
  switch (action.type) {
    case EDIT_CONTACT_DONE:
      return action.data;
    default:
      return state;
  }
};

export const deleteContact = (state = false, action) => {
  switch (action.type) {
    case DELETE_CONTACT:
      return true;
    case DELETE_CONTACT_DONE:
      return false;
    default:
      return state;
  }
};
export const deleteContactDone = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CONTACT_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isInitiatingContactMeet = (state = false, action) => {
  switch (action.type) {
    case INITIATE_CONTACT_MEET:
      return true;
    case INITIATE_CONTACT_MEET_DONE:
      return false;
    default:
      return state;
  }
};
export const initiateContactMeetComplete = (state = {}, action) => {
  switch (action.type) {
    case INITIATE_CONTACT_MEET_DONE:
      return action.data;
    default:
      return state;
  }
};

export const feedingBackContact = (state = false, action) => {
  switch (action.type) {
    case FEEDBACK_CONTACT:
      return true;
    case FEEDBACK_CONTACT_DONE:
      return false;
    default:
      return state;
  }
};
export const feedbackContactComplete = (state = {}, action) => {
  switch (action.type) {
    case FEEDBACK_CONTACT_DONE:
      return action.data;
    default:
      return state;
  }
};

export const isGettingContactsTabs = (state = false, action) => {
  switch (action.type) {
    case GET_CONTACTS_TABS:
      return true;
    case GET_CONTACTS_TABS_DONE:
      return false;
    default:
      return state;
  }
};
export const getContactsTabsComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_CONTACTS_TABS_DONE:
      return action.data;
    default:
      return state;
  }
};

export const getActiveContactsComplete = (state = [], action) => {
  switch (action.type) {
    case GET_CONNECTED_CONTACTS:
      return [...new Set(state?.push(action?.id))];
    case GET_DISCONNECTED_CONTACTS:
      return state.filter((row) => row !== action?.id);
    default:
      return state;
  }
};

export const isGettingContactImg = (state = false, action) => {
  switch (action.type) {
    case GET_CONTACT_IMG:
      return true;
    case GET_CONTACT_IMG_DONE:
      return false;
    default:
      return state;
  }
};
export const getContactImgComplete = (state = {}, action) => {
  switch (action.type) {
    case GET_CONTACT_IMG_DONE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  IncomingCall,
  CallResponse,
  getContacts,
  getContactsDone,
  addContact,
  addContactDone,
  editContact,
  editContactDone,
  deleteContact,
  deleteContactDone,
  isInitiatingContactMeet,
  initiateContactMeetComplete,
  feedingBackContact,
  feedbackContactComplete,
  gettingMyContacts,
  getMyContactsComplete,
  gettingContactById,
  getContactByIdComplete,
  gettingCompanyById,
  getCompanyByIdComplete,
  gettingSectionById,
  getSectionByIdComplete,
  gettingManagerById,
  getManagerByIdComplete,
  isGettingContactsTabs,
  getContactsTabsComplete,
  getActiveContactsComplete,
  isGettingContactImg,
  getContactImgComplete,
});
