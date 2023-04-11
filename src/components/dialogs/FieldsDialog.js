import clsx from "clsx";
import { CloseIcon } from "components/icons";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Typography,
} from "components/muiComponents";
import { Transition } from "components/muiComponents/Transistion.js";
import fieldsDialogStyle from "./fieldsDialogStyle";

export default function FieldsDialog(props, newStyle) {
  const classes = fieldsDialogStyle();
  const handleClose = () => {
    props.switchDialog(false);
    props.handleReset && props.handleReset();
  };
  return (
    <div>
      <Dialog
        open={props.Dialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        className={clsx(
          classes.dialogContent,
          props.iframDialog && classes.customHeight
        )}
        disableAutoFocus={false}
        disableEnforceFocus={true}
      >
        <DialogTitle id="customized-dialog-title" className={classes.title}>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Divider className={classes.formDialogdivider} />
          {props.title && (
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "bolder",
                whiteSpace: "nowrap",
              }}
            >
              {props.title}
            </Typography>
          )}
        </DialogTitle>
        <DialogContent>{props.contentChildren}</DialogContent>
        <DialogActions className={classes.dialogActions}>
          {props.actionsChildren}
        </DialogActions>
      </Dialog>
    </div>
  );
}
