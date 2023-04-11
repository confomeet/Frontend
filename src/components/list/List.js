import * as React from "react";
import { ArrowForwardIosIcon } from "../icons";
import { Box, List, ListItem, ListItemText } from "components/muiComponents";

import { useStyles } from "./listStyle";

export default function ListComponent(props) {
  const classes = useStyles();
  return (
    <Box className={classes.listBox}>
      <List subheader={<li />} className={classes.list}>
        {props?.items.map((item) => (
          <li key={`section-${item?.id}`}>
            <a
              href={item?.notificationLink}
              className={classes.links}
              target="_blank"
            >
              <ul>
                <ListItem key={`item-${item?.id}-${item?.message}`}>
                  <ListItemText
                    primary={item?.notificationTitle}
                    className={classes.message}
                  />
                  <Box className={classes.date}>
                    {Date.displayDate(item?.createdAt, "DD-MM-YYYY")}
                  </Box>
                </ListItem>
              </ul>
            </a>
          </li>
        ))}
        <Box className={classes.center}>
          <a href={"/meet/panel/notifications"} className={classes.links}>
            <span>{Object.translate("LABEL.VIEW")}</span>
            <ArrowForwardIosIcon className={classes.date} />
          </a>
        </Box>
      </List>
    </Box>
  );
}
