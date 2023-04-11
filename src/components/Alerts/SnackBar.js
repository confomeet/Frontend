import React from "react";
import { useSelector } from "react-redux";
import { Snackbar, Alert, Stack } from "../muiComponents";
import actions from "redux/actions";
const { clearAlertMessage } = actions;

const vertical = "top",
  horizontal = "center";

export default function SnackBar() {
  const {
    settingsReducer: {
      settings: { alertMessage },
    },
  } = useSelector((state) => state);

  const handleClose = () => window.dispatch(clearAlertMessage());

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        anchorOrigin={{
          vertical: vertical,
          horizontal: horizontal,
        }}
        open={alertMessage.open}
        autoHideDuration={5 * 1000}
        onClose={handleClose}
      >
        <Alert severity={alertMessage.severity}>{alertMessage.text}</Alert>
      </Snackbar>
    </Stack>
  );
}
