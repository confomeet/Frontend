import { Video } from "components/icons";
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
import { eventsStyles } from "../style";

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
  const shouldRenderVideoIcon = (participant) =>
    (list.length > 1 && participant.meetingLink) || !props.link;
  return list.map((p) => (
    <Box className={classes.popUpParticipants}>
      <Box>
        {p.fullName}
        {shouldRenderVideoIcon(p) && (
          <Video
            className="ReminderIcon"
            onClick={() =>
              props.handleJoin(
                p.meetingLink,
                list.filter((e) => e.userId === p.userId)
              )
            }
          />
        )}
      </Box>
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
export default function ParticipantsPopUp(props) {
  const handleJoin = async (link, list) => {
    const children = [];
    list.map((l) => {
      children.push(...l.children.filter((ch) => ch.selected));
    });
    await localStorage.setItem("participants_group", JSON.stringify(children));
    window.open(link.replace("redirect=0", ""), "_blank");
  };
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
          link={props.link}
          handleJoin={handleJoin}
        />
      </DialogContent>
      {props.link && (
        <DialogActions>
          <Button
            variant="contained"
            className="medium-btn "
            disableElevation
            onClick={() => handleJoin(props.link, props.list)}
          >
            {Object.translate(`BUTTONS.JOIN`)}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
