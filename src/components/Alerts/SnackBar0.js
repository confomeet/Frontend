import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Snackbar, Alert, Stack } from "../muiComponents";
import actions from "redux/actions";
const { clearAlertMessage } = actions;

export default function SnackBar() {
  const {
    settingsReducer: {
      settings: { isRTL, alertMessage },
    },
  } = useSelector((state) => state);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const handleClose = () => window.dispatch(clearAlertMessage());

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      horizontal: "center",
    }));
  }, [isRTL]);

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      horizontal: "center",
    }));
  }, [alertMessage]);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{
          vertical: state.vertical,
          horizontal: state.horizontal,
        }}
        open={alertMessage.open}
        autoHideDuration={4 * 1000}
        onClose={handleClose}
      >
        <Alert severity={alertMessage.severity}>{alertMessage.text}</Alert>
      </Snackbar>
    </Stack>
  );
}
