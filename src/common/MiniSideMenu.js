import { styled, useTheme } from "@mui/material/styles";
import { ExpandLess, ExpandMore } from "components/icons";
import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MuiDrawer,
} from "components/muiComponents";
import ToolTip from "components/toolTip/ToolTip";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import actions from "redux/actions";
import "./Navbar.css";
import SidebarIcons from "./sideMenuIcons";
import drawerStyle from "./sideMenuStyle";

const { closeSideMenu, openSideMenu } = actions;

const drawerWidth = 350;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: "85px",
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniSideMenu() {
  const theme = useTheme();
  const {
    settingsReducer: {
      settings: { authUser, isRTL, sideMenuToggle },
    },
    tabs,
  } = useSelector((state) => state);

  const [sidebar, setSidebar] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(
    sidebar.findIndex((e) => e.link === window.currentLocation.pathname) || 0
  );
  const [collapseID, setCollapseID] = useState(null);

  const classes = drawerStyle();

  const handleTabSelect = (index) => () => {
    setSelectedIndex(index);
    localStorage.setItem("default_view", true);
    if (window.innerWidth <= 1200) {
      window.dispatch(closeSideMenu());
      setCollapseID(null);
    }
  };

  const handleListCollapse = (newValue) => {
    setCollapseID(collapseID === newValue ? null : newValue);
  };

  useEffect(() => {
    (async () => {
      setSidebar(tabs?.getMyTabsComplete);
    })();
  }, [tabs?.getMyTabsComplete, isRTL]);

  useEffect(() => {
    (async () => {
      setSelectedIndex(
        sidebar.findIndex((e) => e.link === window.currentLocation.pathname) ||
          0
      );
    })();
  }, [window.currentLocation]);

  let sidemenuClassName = classes.OpenedLightMainBoxResponsive;
  if (
    !(sideMenuToggle && window.innerWidth >= 600 && window.innerWidth <= 1200)
  ) {
    sidemenuClassName = classes.full;
  }
  return (
    <Box className={sidemenuClassName}>
      <Box
        className={
          sideMenuToggle
            ? classes.OpenedLightMeuBox
            : window.currentLocation.pathname === "/"
            ? classes.lightMeuBoxNone
            : classes.lightMeuBox
        }
      >
        <Drawer
          variant="permanent"
          open={sideMenuToggle}
          className={sideMenuToggle ? classes.drawer : classes.drawerclosed}
        >
          <div
            id="nav-icon3"
            className={sideMenuToggle ? "open" : ""}
            onClick={() => {
              window.dispatch(
                sideMenuToggle ? closeSideMenu() : openSideMenu()
              );
              setCollapseID(null);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <List>
            {sidebar.map((item, index) => {
              return Array.isFullArray(item?.elements) ? (
                <Box key={index}>
                  <ToolTip title={Object.translate(item.name)} placement="top">
                    <ListItem
                      component={Link}
                      key={index}
                      button
                      onClick={() =>
                        sideMenuToggle
                          ? handleListCollapse(item?.id)
                          : window.dispatch(openSideMenu())
                      }
                      className={
                        selectedIndex === index ||
                        item.link === window.currentLocation.pathname
                          ? "active"
                          : ""
                      }
                    >
                      <ListItemButton
                        className={classes.listItemButton}
                        sx={{
                          minHeight: 48,
                          justifyContent: sideMenuToggle ? "initial" : "center",
                          px: 2.5,
                          borderBottom: sideMenuToggle
                            ? "0.6px solid #EEEDED!important"
                            : "",
                        }}
                      >
                        <ListItemIcon
                          className={
                            sideMenuToggle
                              ? classes.openedListItemIcon
                              : classes.listItemIcon
                          }
                        >
                          {SidebarIcons[item.iconString]}
                        </ListItemIcon>
                        {sideMenuToggle && (
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "100%",
                              alignItems: "center",
                            }}
                          >
                            <ListItemText
                              primary={Object.translate(item.name)}
                              className={classes.listItemText}
                            />
                            {collapseID === item.id ? (
                              <ExpandLess
                                sx={{ color: theme.globals.colors.primary }}
                              />
                            ) : (
                              <ExpandMore
                                sx={{ color: theme.globals.colors.primary }}
                              />
                            )}
                          </Box>
                        )}
                      </ListItemButton>
                    </ListItem>
                  </ToolTip>
                  <Collapse
                    in={collapseID === item.id}
                    timeout="auto"
                    unmountOnExit
                  >
                    {item?.elements?.map((element, i) => (
                      <ToolTip
                        title={Object.translate(element.name)}
                        placement="top"
                      >
                        <ListItem
                          component={Link}
                          key={i}
                          button
                          to={element.link}
                          onClick={handleTabSelect(i)}
                          className={
                            selectedIndex === i ||
                            element.link === window.currentLocation.pathname
                              ? "active"
                              : ""
                          }
                        >
                          <ListItemButton
                            className={classes.listItemButton}
                            sx={{
                              minHeight: 48,
                              justifyContent: sideMenuToggle
                                ? "initial"
                                : "center",
                              px: 2.5,
                              borderBottom: sideMenuToggle
                                ? "0.6px solid #EEEDED!important"
                                : "",
                            }}
                          >
                            <ListItemIcon
                              className={
                                sideMenuToggle
                                  ? classes.openedListItemIcon
                                  : classes.listItemIcon
                              }
                            >
                              {SidebarIcons[element.iconString]}
                            </ListItemIcon>
                            {sideMenuToggle && (
                              <ListItemText
                                primary={Object.translate(element.name)}
                                className={classes.listItemText}
                              />
                            )}
                          </ListItemButton>
                          <Divider />
                        </ListItem>
                      </ToolTip>
                    ))}
                  </Collapse>
                </Box>
              ) : (
                <ToolTip title={Object.translate(item.name)} placement="top">
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
                    <ListItemButton
                      className={classes.listItemButton}
                      sx={{
                        minHeight: 48,
                        justifyContent: sideMenuToggle ? "initial" : "center",
                        px: 2.5,
                        borderBottom: sideMenuToggle
                          ? "0.6px solid #EEEDED!important"
                          : "",
                      }}
                    >
                      <ListItemIcon
                        className={
                          sideMenuToggle
                            ? classes.openedListItemIcon
                            : classes.listItemIcon
                        }
                      >
                        {SidebarIcons[item.iconString]}
                      </ListItemIcon>
                      {sideMenuToggle && (
                        <ListItemText
                          primary={Object.translate(item.name)}
                          className={classes.listItemText}
                        />
                      )}
                    </ListItemButton>
                    <Divider />
                  </ListItem>
                </ToolTip>
              );
            })}
          </List>
        </Drawer>
      </Box>
    </Box>
  );
}
