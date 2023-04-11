import React from "react";
import { Button, ButtonGroup, Divider, Box } from "components/muiComponents";

export default function ButtonsGroup(props) {
  return (
    <ButtonGroup className="d-flex align-center">
      {props.btns?.map((btn, btnIdx) => (
        <Box key={btnIdx}>
          <Divider orientation="vertical" flexItem variant="middle" />
          <Button
            key={btnIdx}
            className={`${btn.className} ${
              props.selectedBtnIdx === btnIdx ? "active" : ""
            }`}
            onClick={() => {
              props.onButtonClick && props.onButtonClick(btnIdx);
            }}
          >
            <span className="filterLabel">{btn.label}</span>
          </Button>
        </Box>
      ))}
    </ButtonGroup>
  );
}
