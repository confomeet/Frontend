import React, { useState, useEffect } from "react";
import { Box, List, ListItem, ListItemText } from "components/muiComponents";
import { cardStyle } from "./style";
import MeetingCard from "./MeetingCard";

export default function GroupEvents({ data = [], ...props }) {
  const classes = cardStyle();

  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (!Array.isFullArray(data)) return setSelectedEvent(null);
    setSelectedEvent(data[0]);
  }, [data]);

  return (
    <Box
      display="flex"
      flexDirection="row-reverse"
      height="260px"
    >
      <Box display="flex" className={classes.ListBox}>
        <Box className="Scroll">
          <List className="ListGroup">
            {data.map((ev) => (
              <ListItem
                onMouseEnter={() => setSelectedEvent(ev)}
                className={
                  selectedEvent && selectedEvent.id === ev.id
                    ? "active"
                    : "oneListItem"
                }
              >
                <ListItemText primary={ev.topic} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      {selectedEvent && (
        <Box className="onHoverCard">
          <MeetingCard
            {...props}
            parentEvent={selectedEvent.eventParent}
            data={selectedEvent}
          />
        </Box>
      )}
    </Box>
  );
}
