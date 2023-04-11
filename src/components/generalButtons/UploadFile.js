import React from "react";
import { Button } from "components/muiComponents";
import { CloseIcon, AttachmentIcon } from "../icons";

export default function UploadImageButton(props) {
  return (
    <div>
      <input
        accept="image/*"
        className={props.className}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button component="span" className={props.btnClassName}>
          <AttachmentIcon color="#C4C4C4" />
          Choose File
          <CloseIcon className={props.iconClassName} />
        </Button>
      </label>
    </div>
  );
}
