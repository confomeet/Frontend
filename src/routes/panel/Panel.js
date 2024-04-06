import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import style from "./style";
import actions from "redux/actions";
import UsersTable from "pages/UsersManagement/Users/Users";
import UsersGroupsProvider from "pages/UsersManagement/usersGroups";
import Notifications from "pages/UsersManagement/Notifications/Notifications";
import Events from "pages/events";
import MyContacts from "pages/contacts/MyContacts";
import TabsSettings from "pages/tabs/TabsSettings";
import { Box, Container } from "@mui/material";
import PersonalProfile from "pages/UsersManagement/PersonalProfile/PersonalProfile";
import Statistics from "pages/statistics";
import SmtpProvider from "pages/smtp";
import Header from "common/Header";
import SubHeader from "common/SubHeader";
import MiniSideMenu from "common/MiniSideMenu";
const { closeSideMenu, getMyTabs } = actions;

export default function Panel() {
  const classes = style();
  const { isRTL, authUser } = useSelector(
    (state) => state.settingsReducer.settings
  );
  useEffect(() => {
    (async () => {
      if (!authUser) return;
      window.dispatch(getMyTabs());
    })();
    if (!authUser)
      window.dispatch(closeSideMenu());
  }, [authUser, isRTL]);

  return (
    <Box sx={{ display: "flex", width: "100%", height: "100%" }} className={classes.root}>
      {authUser && <MiniSideMenu />}
      <Box sx={{ display: "flex", flexDirection: "column", overflow: "scroll", flex: "1 1 auto" }}>
        {authUser && <Header />}
        {authUser && <SubHeader />}
        <Container
          maxWidth="flase">
          <Routes>
            <Route path="users" element={<UsersTable />} />
            <Route path="usersGroups" element={<UsersGroupsProvider />} />
            <Route
              path={`notifications`}
              element={<Notifications allNotifications={false} />}
            />
            <Route
              path={`allNotifications`}
              element={<Notifications allNotifications={true} />}
            />
            <Route path={`events`} element={<Events allEvents={false} />} />
            <Route path={`allEvents`} element={<Events allEvents={true} />} />
            <Route path="contacts" element={<MyContacts />} />
            <Route path="tabs" element={<TabsSettings />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="personalProfile" element={<PersonalProfile />} />
            <Route path="smtp" element={<SmtpProvider />} />
            <Route path="*" element={<Navigate to="events" replace />} />
          </Routes>
        </Container>
      </Box>
    </Box>
  );
}
