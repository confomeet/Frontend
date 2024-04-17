import { Box } from "components/muiComponents";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "redux/actions";
import HandleTabs from "./HandleTabsSettings";
import ViewTabs from "./ViewTabsSettings";
import { useStyles } from "../../styles/generalStyle";

const { getAllTabs, deleteTabs, fetchAllRoles } = actions;

const Tabs = () => {
  const {
    tabs,
  } = useSelector((state) => state);

  const dispatch = useDispatch();
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
    let selectedTab = tabs.getAllTabsComplete.filter(
      (x) => x.id === selectedObjIds[0]
    );
    setEditObj(selectedTab[0] || null);
    setToggleAdd(false);
    setToggleEdit(true);
  };
  const handleRowDoubleClick = (rowData) => {
    if (!rowData) return;
    let selectedTab = tabs?.getAllTabsComplete?.filter(
      (x) => x.id === rowData
    )[0];
    setEditObj(selectedTab || null);
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
    dispatch(deleteTabs({ id: selectedObjIds[0] }));
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
    handleRowDoubleClick,
  });

  useEffect(() => {
    dispatch(getAllTabs());
    window.dispatch(fetchAllRoles());
  });
  useEffect(() => {
    if (
      Object.isObjectEmpty(tabs.editTabsComplete) &&
      Object.isObjectEmpty(tabs.addTabsComplete) &&
      Object.isObjectEmpty(tabs.deleteTabsComplete)
    )
      return;
    dispatch(getAllTabs());
    onView();
  }, [tabs.editTabsComplete, tabs.addTabsComplete, tabs.deleteTabsComplete]);

  return (
    <Box className={classes.sideMenuBox}>
      {toggleAdd || toggleEdit ? (
        <HandleTabs {...getHandleTabsProps()} />
      ) : (
        <ViewTabs {...getHandleTabsProps()} />
      )}
    </Box>
  );
};

export default Tabs;
