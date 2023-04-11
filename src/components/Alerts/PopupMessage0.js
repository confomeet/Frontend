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

export default function PopupMessage0(props) {
  const handleClose = () => {
    props.setOpen(false);
  };
  const classes = alertStyle();

  return (
    <div>
      <Dialog
        className={classes.message}
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{ minHeight: "55px" }}>
          {props?.messageTitle}
          <div
            className={clsx(props.open ? "scale-in-ver-bottom" : " ", "icon")}
          >
            <DoubleCheckIcon
              className={clsx(props.open ? "wobble-hor-bottom" : " ")}
            />
          </div>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {props?.messageText}
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions className="between">
          <div className="extra-buttons">
            <Button
              variant="contained"
              disableElevation
              onClick={props?.handleConfirm}
            >
              {props?.confirmButton}
            </Button>
            <Button disableElevation onClick={props?.handleClose}>
              {props?.cancelButton}
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
