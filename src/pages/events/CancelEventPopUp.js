import Switcher from "components/materialComponents/Switcher";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "components/muiComponents";
import { Transition } from "components/muiComponents/Transistion.js";
import { handleNotification } from "redux/network/functions";
import { eventsStyles } from "./style";

const ParticipantsList = ({ list = [], handleListChange, ...props }) => {
  const classes = eventsStyles();

  const handleSwitch = (p, chId, selected) => {
    let newList = list.map((l) =>
      l.id === p.id
        ? {
            ...l,
            children: l.children.map((ch) =>
              ch.id === chId ? { ...ch, selected } : ch
            ),
          }
        : l
    );
    handleListChange(newList);
  };

  return list.map((p) => (
    <Box className={classes.popUpParticipants}>
      <Box>{p.fullName}</Box>
      <Box>
        {p.children.map((ch) => (
          <Box>
            <Switcher
              label={ch.fullName}
              switchToggle={ch.selected}
              handleSwitchChange={(checked) => handleSwitch(p, ch.id, checked)}
              labelPlacement="end"
            />
          </Box>
        ))}
      </Box>
    </Box>
  ));
};
export default function CancelEventPopUp(props) {
  return (
    <Dialog
      className={"add-contact"}
      onClose={props.handleClose}
      open={props.open}
      TransitionComponent={Transition}
      minWidth="md"
    >
      <DialogTitle>
        {Object.translate("LABEL.PLZ_CHOOSE_PARTICIPANTS")}
      </DialogTitle>
      <DialogContent>
        <ParticipantsList
          list={props.list}
          handleListChange={props.handleListChange}
        />
      </DialogContent>
      {props.link && (
        <DialogActions>
          <Button
            variant="contained"
            className="medium-btn "
            disableElevation
            onClick={() =>
              handleNotification({
                message: Object.translate("EVENTS.CANCEL_EVENT_MSG"),
                success: true,
              })
            }
          >
            {Object.translate(`EVENTS.CANCEL_EVENT_MSG`)}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
