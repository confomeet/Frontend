import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "components/muiComponents";
import { useWindowSize } from "hooks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import actions from "redux/actions";
import SidebarIcons from "./sideMenuIcons";
import drawerStyle from "./style";

const { closeSideMenu, openSideMenu } = actions;

const SideMenu = () => {
  const {
    settingsReducer: {
      settings: { authUser, sideMenuToggle, drawerWidth },
    },
    tabs,
  } = useSelector((state) => state);

  useWindowSize(() => {
    if (window.currentLocation.pathname === "/") return;
    if (!authUser) return;
    if (window.innerWidth < 1200) {
      window.dispatch(closeSideMenu());
      return;
    }
    if (window.innerWidth >= 1200) {
      window.dispatch(openSideMenu());
      return;
    }
  });

  const [sidebar, setSidebar] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(
    sidebar.findIndex((e) => e.link === window.currentLocation.pathname) || 0
  );
  const classes = drawerStyle();

  const handleTabSelect = (index) => () => {
    setSelectedIndex(index);
    localStorage.setItem("default_view", true);
    if (window.innerWidth <= 1200) window.dispatch(closeSideMenu());
  };

  useEffect(() => {
    (async () => {
      setSidebar(tabs?.getMyTabsComplete);
    })();
  }, [tabs?.getMyTabsComplete]);

  useEffect(() => {
    (async () => {
      setSelectedIndex(
        sidebar.findIndex((e) => e.link === window.currentLocation.pathname) ||
          0
      );
    })();
  }, [window.currentLocation, sidebar]);

  return (
    <Box>
      <Drawer
        sx={{
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        className={sideMenuToggle ? classes.drawer : classes.drawerclosed}
        variant="persistent"
        anchor="left"
        open={sideMenuToggle}
      >
        <List>
          {sidebar.map((item, index) => (
            <ListItem
              component={Link}
              key={index}
              button
              to={item.link}
              onClick={handleTabSelect(index)}
              className={
                selectedIndex === index ||
                item.link === window.currentLocation.pathname
                  ? "active"
                  : ""
              }
            >
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              <ListItemIcon>{SidebarIcons[item.iconString]}</ListItemIcon>
              <ListItemText primary={Object.translate(item.name)} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Footer /> */}
    </Box>
  );
};

export default SideMenu;
