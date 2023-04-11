import React from "react";
import { Button } from "components/muiComponents";

export default function SaveButton(props) {
  return (
    <div>
      <Button
        variant="contained"
        className={props.className}
        onClick={props.onClick}
      >
        {props.name}
      </Button>
    </div>
  );
}
