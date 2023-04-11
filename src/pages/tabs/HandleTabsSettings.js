import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "redux/actions";
import HandleTabsComponent from "./components/HandleTabsComponent";
import { getTabsValidationSchema, tabsInitialValues } from "./tabsFormikUtils";

const { addTabs, editTabs } = actions;

export default function HandleTabs(props) {
  const dispatch = useDispatch();
  const {
    settingsReducer: {
      settings: { isRTL },
    },
    users,
    tabs,
  } = useSelector((state) => state);
  const [roles, setRoles] = useState([]);
  const [parentIdArr, setParentIdArr] = useState([]);

  const getParentIdInitValues = (id) => {
    if (!parentIdArr.length) return {};

    return parentIdArr.filter((row) => row?.value === id);
  };

  const getRolesIdInitValues = (arr) => {
    if (!roles.length) return [];
    let newArr = [];
    roles.map((row) => {
      arr.map((x) => {
        if (row?.value === x) {
          newArr.push(row);
        }
      });
    });
    return newArr;
  };
  const initialValues = props.toggleAdd
    ? tabsInitialValues
    : {
        ...props.editObj,
        name: props?.editObj?.captions?.ar || "",
        enName: props?.editObj?.captions?.en || "",
        parentId: getParentIdInitValues(props?.editObj?.parentId)[0] || null,
        rolesId: getRolesIdInitValues(props?.editObj?.rolesId) || [],
      };
  const validationSchema = getTabsValidationSchema();

  const getRolesIds = (array) => {
    let arr = [];
    if (array?.length > 0) {
      array?.map((role) => {
        arr.push(role?.value);
      });
    }
    return arr;
  };
  const handleButtonClick = async (values) => {
    let rolesId = await getRolesIds(values?.rolesId);
    let body = {
      nameShortCut: {
        ar: values.name,
        en: values.enName,
      },
      tabOrder: values.tabOrder,
      parentId: values?.parentId?.value || null,
      link: values.link,
      iconString: values.iconString,
      rolesId,
    };

    let id = props.selectedObjIds[0];
    if (props.toggleAdd) {
      dispatch(addTabs({ body }));
      return;
    }
    if (props.toggleEdit) {
      dispatch(editTabs({ id, body }));
      return;
    }
  };

  useEffect(() => {
    let ids = [];
    let idsObj = {};
    if (!users?.AllRoles?.length) {
      setRoles([]);
    } else {
      users?.AllRoles.map((i) => {
        {
          idsObj["label"] = i?.roleName;
          idsObj["value"] = i?.id;
        }
        ids.push(idsObj);
        idsObj = {};
      });
      setRoles(ids);
    }
  }, [users.AllRoles, isRTL]);

  useEffect(() => {
    let parentIds = [];
    let parentIdsObj = {};
    if (!tabs.getAllTabsComplete?.length) {
      setParentIdArr([]);
    } else {
      tabs.getAllTabsComplete.map((i) => {
        if (i?.parentId === null) {
          {
            parentIdsObj["label"] = i?.name;
            parentIdsObj["value"] = i?.id;
          }
          parentIds.push(parentIdsObj);
          parentIdsObj = {};
        }
      });
      setParentIdArr(parentIds);
    }
  }, [tabs.getAllTabsComplete, isRTL]);

  useEffect(() => {
    if (props.toggleAdd) return;
    if (!roles.length) return;
    if (!parentIdArr.length) return;
  }, [roles, parentIdArr]);

  const HandleTabsProps = () => ({
    initialValues,
    validationSchema,
    handleButtonClick,
    roles,
    parentIdArr,
    ...props,
  });

  return <HandleTabsComponent {...HandleTabsProps()} />;
}
