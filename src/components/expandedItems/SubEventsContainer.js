import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Box, IconButton, Typography } from "components/muiComponents";
import React, { useState } from "react";
import Expandedcard from "./ExpandedCard";
import Popup from "./Popup";
import style from "./style";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SubEventsContainer({ item }) {
  const classes = style();
  const [expanded, setExpanded] = React.useState(false);
  const [openParties, setOpenParties] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      {window.innerWidth > 600 && (
        <div className={classes.subEventsContainer}>
          {item?.participants?.map((p) => (
            <Expandedcard data={p} />
          ))}
        </div>
      )}
      {window.innerWidth < 600 && (
        <>
          <Box
            className={classes.partyAccordion}
            onClick={() => setOpenParties(!openParties)}
          >
            <Box className={classes.subPartyAccordion}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon className={classes.partyAccordIcon} />
              </ExpandMore>
              <Typography className={classes.partyAccordTypo}>
                {Object.translate("LABEL.PARTICIPANTS")}
              </Typography>
            </Box>
            <Typography className={classes.partyAccordNum}></Typography>
          </Box>
          {openParties && (
            <>
              <Box className={classes.appEventsContainer}>
                {item?.participants?.map((p) => (
                  <Box className={classes.miniEventsContainer}>
                    <Box>
                      <Box display="flex">
                        <span className="badge"></span>
                        <Typography className="badgeFullName">
                          {p.fullName}
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={classes.popup}>
                      <Popup participant={p} />
                    </Box>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </>
      )}
    </>
  );
}
