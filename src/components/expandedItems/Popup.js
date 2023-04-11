import { CloseIcon } from "components/icons";
import PropTypes from "prop-types";
import * as React from "react";
import { handleNoValue } from "utils";
import { AiOutlineInfoCircle, HiOutlineMail, HiOutlinePhone } from "../icons";
import style from "./style";

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "../muiComponents";
const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  const classes = style();
  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        minWidth="255px"
        padding="10px"
        display="flex"
        flex-direction="column"
        justifyContent="center!important"
        alignItems="center"
      >
        <Box className={classes.closeBox} onClick={handleClose}>
          <CloseIcon />
        </Box>
        <Box minWidth="225px" paddingTop="15px">
          <Box className={classes.partyInfo}>
            <Box display="flex" alignItems="center" marginBottom="5px">
              <span className="badge"></span>
              <DialogTitle className="badgeFullName">
                {selectedValue.fullName}
              </DialogTitle>
            </Box>
          </Box>
          <List className={classes.partyList}>
            <ListItem>
              <ListItemIcon className={classes.partyPhone}>
                <HiOutlinePhone />
              </ListItemIcon>
              <ListItemText primary={handleNoValue(selectedValue.mobile)} />
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.partyMail}>
                <HiOutlineMail />
              </ListItemIcon>
              <ListItemText
                className={classes.partyMailText}
                primary={handleNoValue(selectedValue.email)}
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo({ participant }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        <AiOutlineInfoCircle />
      </Button>
      <SimpleDialog
        selectedValue={participant}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
