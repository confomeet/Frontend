export const DisplayType = {
  grid: "grid",
  table: "table",
  calendar: "calendar",
  group: "group",
  participants: "participants",
};

export const DataActions = {
  add: "add",
  edit: "edit",
  delete: "delete",
  viewDetails: "viewDetails",
  addParticipants: "addParticipants",
  mainView: "mainView",
};

export const MeetingStatus = {
  unavailable: 0,
  live: 1,
  finished: 2,
  incoming: 3,
  recorded: "recorded",
};

export const getStatusFilters = () => [
  {
    id: Object.values(MeetingStatus),
    icon: null,
    label: Object.translate("FILTER.ALL"),
  },
  {
    id: MeetingStatus.incoming,
    icon: null,
    label: Object.translate("FILTER.UPCOMING"),
  },
  {
    id: MeetingStatus.live,
    icon: null,
    label: Object.translate("FILTER.LIVE"),
  },
  {
    id: MeetingStatus.finished,
    icon: null,
    label: Object.translate("FILTER.FINISHED"),
  },
  {
    id: MeetingStatus.recorded,
    icon: null,
    label: Object.translate("FILTER.RECORDED"),
  },
];

export const CONTACTS_TYPES = {
  INDIVIDUAL: "individual",
  COMPANY: "company",
  SECTION: "section",
  MANAGER: "manager",
};
