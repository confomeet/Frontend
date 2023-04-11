import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
} from "components/muiComponents";
import { useState } from "react";
import { MoreVertical } from "components/icons";
import { eventsStyles } from "../style";

export default function SingleParticipantActions({ actions }) {
  const classes = eventsStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedAction, setSelectedAction] = useState(null);
  const open = Boolean(anchorEl);

  const handleItemClick = (onClick) => () => {
    setAnchorEl(null);
    onClick && onClick();
  };
  if (!actions.length) return null;

  return (
    <Box>
      <MoreVertical
        className="ReminderIcon"
        onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <Box display="flex" flexDirection="row">
          <Box>
            <List className={classes.cabinetList}>
              {actions.map((action) => (
                <ListItem
                  key={`main-action-${action.id}`}
                  className={classes.cabinetList}
                  onClick={handleItemClick(action.onClick)}
                  onMouseEnter={() =>
                    setSelectedAction(action.subActions ? action : null)
                  }
                >
                  <ListItemIcon>{action.icon}</ListItemIcon>
                  <ListItemText>{action.label}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Box>
          {selectedAction && (
            <Box>
              <List className={classes.cabinetList}>
                {selectedAction.subActions.map((action) => (
                  <ListItem
                    key={`sub-action-${action.id}`}
                    className={classes.cabinetList}
                    onClick={handleItemClick(action.onClick)}
                  >
                    <ListItemIcon>{action.icon}</ListItemIcon>
                    <ListItemText>{action.label}</ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </Box>
      </Popover>
    </Box>
  );
}
