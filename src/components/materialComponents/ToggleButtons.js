import React from "react";
import { ToggleButton, ToggleButtonGroup } from "components/muiComponents";
import { useSelector } from "react-redux";
import ToolTip from "components/toolTip/ToolTip";

export default function ToggleButtons(props) {
  const {
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  return (
    <ToggleButtonGroup
      value={props.view}
      exclusive
      onChange={props.handleChange}
    >
      {props.btns?.map((btn, index) => (
        <ToggleButton key={index} value={btn.value} aria-label={btn.label}>
          <ToolTip
            placement="top"
            title={isRTL ? btn?.arTooltip : btn?.Tooltip}
          >
            <span
              style={{
                display: "flex",
                width: "fit-content",
                height: "fit-content",
              }}
            >
              {btn.icon}
            </span>
          </ToolTip>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
