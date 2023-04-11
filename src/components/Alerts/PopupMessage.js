import React from "react";
import { alertStyle } from "./style";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  DialogContentText,
  Divider,
} from "../muiComponents";
import { DoubleCheckIcon } from "../icons";
import { Transition } from "../muiComponents/Transistion";
import clsx from "clsx";

export default function PopupMessage() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = alertStyle();

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        className={classes.message}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          Message Title
          <div className={clsx(open ? "scale-in-ver-bottom" : " ", "icon")}>
            <DoubleCheckIcon
              className={clsx(open ? "wobble-hor-bottom" : " ")}
            />
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Message Text
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions className="between">
          <div className="extra-buttons">
            <Button variant="contained" disableElevation>
              {Object.translate("BUTTONS.SAVE")}
            </Button>
            <Button disableElevation>
              {Object.translate("BUTTONS.CANCEL")}
            </Button>
            <Button disableElevation>
              {Object.translate("BUTTONS.TRASH")}
            </Button>
          </div>
          <div className="basic-buttons">
            <Button disableElevation onClick={handleClose}>
              {Object.translate("BUTTONS.NO")}
            </Button>
            <Button
              disableElevation
              color="primary"
              variant="contained"
              onClick={handleClose}
            >
              {Object.translate("BUTTONS.OK")}
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
