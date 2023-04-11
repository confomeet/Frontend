import { CameraVideoFill, Menu, NotificationsNone } from "components/icons";
import { TiGroup } from "react-icons/ti";
export const sidebar = [
  {
    id: 2,
    heading: `SIDE_BAR.MY_EVENTS`,
    link: "/panel/events",
    icon: <CameraVideoFill />,
  },
  {
    id: 3,
    heading: `SIDE_BAR.MY_CONTACTS`,
    link: "/panel/contacts",
    icon: <TiGroup />,
  },
  {
    id: 5,
    heading: `SIDE_BAR.USERS`,
    link: "/panel/users",
    icon: <TiGroup />,
  },
  {
    id: 6,
    heading: `SIDE_BAR.NOTIFICATIONS`,
    link: "/panel/notifications",
    icon: <NotificationsNone />,
  },
  {
    id: 6,
    heading: `SIDE_BAR.TABS`,
    link: "/panel/tabs",
    icon: <Menu />,
  },
  {
    id: 7,
    heading: `SIDE_BAR.ALL_EVENTS`,
    link: "/panel/allEvents",
    icon: <CameraVideoFill />,
  },
  {
    id: 8,
    heading: `SIDE_BAR.EVENTS_TYPES`,
    link: "/panel/eventsTypes",
    icon: <CameraVideoFill />,
  },
];
