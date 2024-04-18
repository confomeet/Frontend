import clsx from "clsx";
import { EditIcon } from "components/icons";
import { Button, Grid } from "components/muiComponents";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import actions from "redux/actions";
import {
  getEditPersonalProfileValidationSchema,
  usersInitialValues,
} from "../Users/UsersFromikUtils";
import HandleEdit from "./HandleEdit";
import HandleUsersPass from "./HandleUsersPass";
import ViewPersonalProfile from "./ViewPersonalProfile";
import { pProfileStyles } from "./style";

const { setSubHeader, fetchAllRoles } = actions;

const PersonalProfile = () => {
  const {
    settingsReducer: {
      settings: { authUser },
    },
    users,
  } = useSelector((state) => state);

  const [toggleEdit, switchEdit] = useState(false);
  const [toggleEditPass, switchEditPass] = useState(false);
  const [roles, setRoles] = useState([]);

  const classes = pProfileStyles();

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

  const initialValues = Object.isObjectEmpty(users?.getProfileInfoComplete)
    ? usersInitialValues
    : {
        ...users?.getProfileInfoComplete,
        userName: users?.getProfileInfoComplete?.userName
          ? users?.getProfileInfoComplete?.userName
          : users?.getProfileInfoComplete?.email,
        roles: getRolesIdInitValues(users?.getProfileInfoComplete?.roles) || [],
      };
  const validationSchema = getEditPersonalProfileValidationSchema();
  const onView = () => {
    switchEdit(false);
    switchEditPass(false);
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
  }, [users.AllRoles]);

  useEffect(() => {
    (async () => {
      window.dispatch(
        setSubHeader({
          subHeader: (
            <Grid container item xs={12} className="profileMainGrid">
              <Grid item xs={6} md={3} lg={3} className="titleIconGird"></Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                className={clsx("titleIconGird", classes.headerButtonsGrid)}
              >
                <Button
                  variant="contained"
                  className={classes.headerButtons}
                  onClick={() => {
                    switchEdit(true);
                    switchEditPass(false);
                  }}
                >
                  <EditIcon />
                </Button>
                <Button
                  variant="outlined"
                  className={classes.headerButtons}
                  onClick={() => {
                    switchEdit(false);
                    switchEditPass(true);
                  }}
                >
                  {Object.translate("PAGES.RESETPASSWORD")}
                </Button>
              </Grid>
            </Grid>
          ),
        })
      );
    })();
  }, [toggleEdit, toggleEditPass]);

  useEffect(() => {
    window.dispatch(fetchAllRoles());
    window.dispatchWantedAction("GET_PROFILE_INFO");
  }, [authUser]);

  const HandleUserProps = () => ({
    initialValues,
    validationSchema,
    roles,
    onView,
  });

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        className={classes.personalProfileRoot}
      >
        {toggleEdit && <HandleEdit {...HandleUserProps()} />}
        {toggleEditPass && <HandleUsersPass {...HandleUserProps()} />}
        {!toggleEdit && !toggleEditPass && (
          <ViewPersonalProfile
            userRoles={getRolesIdInitValues(
              !Object.isObjectEmpty(users?.getProfileInfoComplete)
                ? users?.getProfileInfoComplete?.roles
                : authUser?.rolesId
            )}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default PersonalProfile;
