import React from "react";
import { Button } from "components/muiComponents";
import { CloseIcon, InsertPhotoIcon } from "../icons";

export default function UploadImageButton(props) {
  return (
    <div>
      <label htmlFor="contained-button-file">
        <Button component="span" className={props.btnClassName}>
          <InsertPhotoIcon color="#C4C4C4" />
          Choose an Image
          <CloseIcon className={props.iconClassName} />
        </Button>
      </label>
    </div>
  );
}
