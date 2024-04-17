import { Box } from "components/muiComponents";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import { getSearchQueries } from "../../redux/network/functions";
import loginStyles from "./style";

const { confirmUser, clearAuthUser } = actions;

function ActiveAccount() {
  const classes = loginStyles();

  const dispatch = useDispatch();
  const { settingsReducer } = useSelector((state) => state);

  useEffect(() => {
    window.dispatch(clearAuthUser());
    const { token, email } = getSearchQueries();
    // FIXME: use global localization
    dispatch(confirmUser({ data: { token, email }, lang: "ru" }));
  }, []);

  return <Box className={classes.loginRoot}></Box>;
}

export default memo(ActiveAccount);
