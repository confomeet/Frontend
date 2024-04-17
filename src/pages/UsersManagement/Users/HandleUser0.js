import clsx from "clsx";
import { Box, Grid, Typography } from "components/muiComponents";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "redux/actions";
import loginStyles from "../../user/style";
import HandleUsersComponents from "./HandleUsersComponents";
import {
  getAddUsersValidationSchema,
  usersInitialValues,
} from "./UsersFromikUtils";
import { userStyle } from "./style";
import { Formik } from "formik";
import ToolTip from "components/toolTip/ToolTip";

import { IoArrowBack } from "components/icons";
import { getModifiedContact } from "utils";
const { addUser, editUser, setSubHeader } = actions;

const HandleUser0 = (props) => {
  const {
    users,
  } = useSelector((state) => state);
  const [roles, setRoles] = useState([]);
  const classes = loginStyles();
  const usersClasses = userStyle();
  const dispatch = useDispatch();

  const getRolesIdInitValues = (arr) => {
    if (!Array.isArray(arr)) return [];
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
    ? usersInitialValues
    : {
        ...props.editObj,
        roles: getRolesIdInitValues(props?.editObj?.roles) || [],
        userGroups: Array.isFullArray(props?.editObj?.userGroups)
          ? getModifiedContact(props?.editObj?.userGroups)
          : [],
      };

  const validationSchema = getAddUsersValidationSchema();

  const onSubmit = async (values) => {
    const roles = Array.isArray(values?.roles)
      ? values?.roles?.map((i) => {
          return i?.value;
        })
      : [];
    let body = {
      fullName: values?.fullName,
      email: values?.email,
      phoneNumber: values?.phoneNumber,
      roles,
      groups: values?.userGroups?.map((row) => row?.id) || [],
      enable2FA: values?.enable2FA,
    };
    if (props.toggleAdd) {
      dispatch(addUser({ body, userGroupData: values?.userGroups }));
    }
    if (props.toggleEdit) {
      dispatch(
        editUser({
          body,
          id: props?.editObj?.id,
        })
      );
    }
    props.onView();
  };
  useEffect(() => {
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: (
            <Box className={clsx(classes.myEvents, "d-flex-column")}></Box>
          ),
        })
      );
    })();
  });
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
  }, [users.AllRoles]);

  useEffect(() => {
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: (
            <Box className="titleMainGrid">
              <Box className="titleBox">
                <Typography className="titleTypography">
                  {Object.translate(
                    props.toggleAdd ? "LABEL.ADD_USER" : "LABEL.EDIT_USER"
                  )}
                </Typography>
              </Box>
              <ToolTip title={Object.translate("BUTTONS.BACK")} placement="top">
                <Box className="titleIconBox" onClick={() => props.onView()}>
                  <IoArrowBack className="leftArrowBack" />
                </Box>
              </ToolTip>
            </Box>
          ),
        })
      );
    })();
  }, [props.toggleAdd]);

  const HandleUserProps = () => ({
    initialValues,
    validationSchema,
    onSubmit,
    roles,
    ...props,
  });
  return (
    <Grid container className={usersClasses.userComponentRoot}>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <HandleUsersComponents {...HandleUserProps()} formik={formik} />
          );
        }}
      </Formik>
    </Grid>
  );
};
export default HandleUser0;
