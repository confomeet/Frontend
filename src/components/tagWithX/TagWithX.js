import clsx from "clsx";
import { Minus } from "components/icons";
import { Box, Divider, Typography } from "components/muiComponents";
import Tooltip from "components/muiComponents/BootstrapTooltip";
import useStyles from "./TagWithXStyle";

function TagWithX({ onXClick, onClick, text, title, tooltiptext, actions }) {
  const classes = useStyles();

  return (
    <Box className={classes.tagBox} onClick={() => onClick && onClick()}>
      <Tooltip placement="top" title={tooltiptext || ""}>
        <Typography>{text}</Typography>
      </Tooltip>
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
      {onXClick && <Divider orientation="vertical" flexItem variant="middle" />}
      {onXClick && <Minus className="delete" onClick={() => onXClick()} />}
    </Box>
  );
}

export default TagWithX;
