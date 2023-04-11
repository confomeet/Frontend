import React from "react";
import { Box, Button } from "components/muiComponents";
import useStyles from "./TableStyle";

import { ClearIcon, EditIcon, VisibilityIcon } from "../icons";
import ToolTip from "../toolTip/ToolTip";

export default function CustomToolBar({
  handleDelete,
  handleDownload,
  handleEdit,
  handleView,
  selectedRows,
  setrowsSelected,
  additionalActions,
}) {
  const classes = useStyles();
  let displayButton = selectedRows.data.length > 1 ? false : true;
  return (
    <div>
      <Box className={classes.Butns} width="95%" m="auto" display="flex">
        {handleDelete && displayButton && (
          <ToolTip title={Object.translate("BUTTONS.TRASH")} placement="top">
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => {
                handleDelete();
                setrowsSelected([]);
              }}
            >
              <ClearIcon />
            </Button>
          </ToolTip>
        )}
        {displayButton && handleEdit && (
          <ToolTip title={Object.translate("BUTTONS.EDIT")} placement="top">
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => handleEdit()}
            >
              <EditIcon />
            </Button>
          </ToolTip>
        )}
        {displayButton && handleView && (
          <ToolTip title={Object.translate("BUTTONS.VIEW")} placement="top">
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => handleView && handleView()}
            >
              <VisibilityIcon />
            </Button>
          </ToolTip>
        )}
        {handleDownload && (
          <ToolTip title={Object.translate("BUTTONS.DOWNLOAD")} placement="top">
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => {
                handleDownload();
                setrowsSelected([]);
              }}
            >
              <i class="fal fa-cloud-download"></i>
            </Button>
          </ToolTip>
        )}
        {additionalActions?.map((action) => (
          <ToolTip title={action.label} placement="top">
            <Button
              variant="contained"
              className={classes.button}
              onClick={action.handleClick}
            >
              {action.icon}
            </Button>
          </ToolTip>
        ))}
      </Box>
    </div>
  );
}
