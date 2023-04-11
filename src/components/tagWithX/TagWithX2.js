import clsx from "clsx";
import { TiDelete, User } from "components/icons";
import { Box, Grid, Typography } from "components/muiComponents";
import Tooltip from "components/muiComponents/BootstrapTooltip";
import useStyles from "./TagWithXStyle";

function TagWithX2({ onXClick, onClick, text, title, tooltiptext, actions }) {
  const classes = useStyles();

  return (
    <Box className={classes.tagBox2} onClick={() => onClick && onClick()}>
      <Grid item lg={4} className="sectionParty">
        <User />
        <Box className="PartyDetails">
          <Typography className="PartyName">
            <span>xxxxx</span>
            <br />
            <span>vcvcvcvc</span>
          </Typography>
        </Box>
        {actions &&
          Array.isArray(actions) &&
          actions.map(
            ({ Component, src, alt, title = "", className, onClick }) => (
              <Tooltip placement="top" title={title} arrow>
                <img
                  src={src}
                  alt={alt}
                  onClick={() => onClick && onClick()}
                  className={clsx("TagWithXImg", className)}
                />
              </Tooltip>
            )
          )}
        {onXClick && <TiDelete className="delete" onClick={() => onXClick()} />}
      </Grid>
    </Box>
  );
}

export default TagWithX2;
