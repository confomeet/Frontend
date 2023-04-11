import React from "react";
import { Card, CardHeader, Button } from "../../components/muiComponents";
import { Calendar } from "../icons";
import style from "./style";
import clsx from "clsx";
import { Typography, Box } from "@mui/material";

export default function HorizontalCard(props) {
  const classes = style();
  const subHeader = (event) => (
    <>
      <div className="sub-events-number">
        {event.subEventCount > 0 && (
          <Typography fontWeight="600" variant="body2">
            {`${event.subEventCount} ${Object.translate("EVENTS.SUB_EVENTS")}`}
          </Typography>
        )}
      </div>
      {window.innerWidth > 900 && (
        <div className="date d-flex between ">
          <div className=" d-flex  ">
            <Calendar />
            &nbsp;
            <Typography variant="caption">
              {Date.displayDate(event.startDate)}
            </Typography>
          </div>
          &nbsp;
          <Typography variant="caption">
            {Date.displayDate(event.endDate)}
          </Typography>
        </div>
      )}
      {window.innerWidth < 900 && (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          // width="96%"
          margin="auto"
          alignItems="center"
        >
          <div className="date d-flex  ">
            <Box className="calendarIcon">
              <Calendar />
            </Box>

            <Box display="flex" flexDirection="column">
              <Typography variant="caption">
                {Date.displayDate(event.startDate)}
              </Typography>
              <Typography variant="caption">
                {Date.displayDate(event.endDate)}
              </Typography>
            </Box>
          </div>
          <Box className="calendarNum"> 05</Box>
        </Box>
      )}
    </>
  );
  return (
    <Button disableRipple fullWidth onClick={props.onClick}>
      <Card
        elevation={0}
        className={clsx(
          classes.horizontalCard,
          "d-flex-column ",
          props.className
        )}
        onClick={() => props.onClick && props.onClick()}
      >
        <div className="tringle"></div>
        <CardHeader
          action={<span className="badge"></span>}
          title={props.data.topic}
          subheader={subHeader(props.data)}
        />
      </Card>
    </Button>
  );
}
