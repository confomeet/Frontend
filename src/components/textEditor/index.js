import React from "react";
import useStyles from "./style";
import CKEditor from "react-ckeditor-component";

export default function CKeditor(props) {
  const classes = useStyles();

  return (
    <div className={classes.edit}>
      <CKEditor
        config={props.config}
        content={props.value}
        events={{
          change: props.handleChange,
        }}
      />
    </div>
  );
}
