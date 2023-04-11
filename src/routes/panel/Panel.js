import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import style from "./style";
import actions from "redux/actions";
import UsersTable from "pages/UsersManagement/Users/Users";
import UsersGroupsProvider from "pages/UsersManagement/usersGroups";
import Notifications from "pages/UsersManagement/Notifications/Notifications";
import Events from "pages/events";
import MyContacts from "pages/contacts/MyContacts";
import TabsSettings from "pages/tabs/TabsSettings";
import { Box, Container, CssBaseline } from "@mui/material";
import PersonalProfile from "pages/UsersManagement/PersonalProfile/PersonalProfile";
import Statistics from "pages/statistics";
import EventsTypes from "pages/events/eventsTypes/EventsTypes";
import SmtpProvider from "pages/smtp";
const { getMyTabs } = actions;

export default function Panel() {
  const classes = style();
  const { isRTL, authUser } = useSelector(
    (state) => state.settingsReducer.settings
  );
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (!authUser) return;
      dispatch(getMyTabs());
    })();
  }, [authUser, isRTL]);

  return (
    <Box sx={{ display: "flex" }} className={classes.root}>
      <CssBaseline />
      <Container sx={{ height: "100%" }} maxWidth="flase">
        <Routes>
          <Route path="/" element={<Navigate replace to="events" />} />
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
          <Route path="eventsTypes" element={<EventsTypes />} />
          <Route path="personalProfile" element={<PersonalProfile />} />
          <Route path="smtp" element={<SmtpProvider />} />
        </Routes>
      </Container>
    </Box>
  );
}
