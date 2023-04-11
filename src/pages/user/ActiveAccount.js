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
  let isRTL = settingsReducer.settings.isRTL;

  useEffect(() => {
    window.dispatch(clearAuthUser());
    const { token, email } = getSearchQueries();
    let lang = isRTL ? "ar" : "en";
    dispatch(confirmUser({ data: { token, email }, lang }));
  }, []);

  return <Box className={classes.loginRoot}></Box>;
}

export default memo(ActiveAccount);
