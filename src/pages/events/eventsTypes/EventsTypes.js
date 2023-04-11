import { Box } from "components/muiComponents";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import HandleEventsTypes from "./HandleEventsTypes";
import ViewEventsTypes from "./ViewEventsTypes";
import { useStyles } from "../../../styles/generalStyle";

const { getEventsTypes, deleteEventsTypes, setSubHeader } = actions;

const EventsTypes = () => {
  const {
    settingsReducer: {
      settings: { isRTL },
    },
    meetings,
  } = useSelector((state) => state);
  const classes = useStyles();
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [editObj, setEditObj] = useState(null);
  const [selectedObjIds, setSelectedObjIds] = useState([]);

  const onAdd = () => {
    setToggleAdd(true);
    setToggleEdit(false);
    setEditObj(null);
  };

  const onEdit = () => {
    let selectedTab = meetings.getEventsTypesDone.filter(
      (x) => x.id === selectedObjIds[0]
    );
    setEditObj(selectedTab[0] || null);
    setToggleAdd(false);
    setToggleEdit(true);
  };

  const onView = () => {
    setToggleAdd(false);
    setToggleEdit(false);
    setEditObj(null);
  };

  const onDelete = async () => {
    if (!selectedObjIds.length) return;
    window.dispatch(deleteEventsTypes({ id: selectedObjIds[0] }));
  };

  const getHandleTabsProps = () => ({
    toggleAdd,
    setToggleAdd,
    toggleEdit,
    setToggleEdit,
    editObj,
    setEditObj,
    selectedObjIds,
    setSelectedObjIds,
    onAdd,
    onEdit,
    onView,
    onDelete,
  });

  useEffect(() => {
    window.dispatch(setSubHeader({}));
  }, []);

  useEffect(() => {
    window.dispatch(getEventsTypes());
  }, [isRTL]);

  return (
    <Box className={classes.eventsTypesBox}>
      {toggleAdd || toggleEdit ? (
        <HandleEventsTypes {...getHandleTabsProps()} />
      ) : (
        <ViewEventsTypes {...getHandleTabsProps()} />
      )}
    </Box>
  );
};

export default EventsTypes;
