import React, { useState, useEffect } from "react";
import useStyles from "./Style";
import clsx from "clsx";
import { Box, Typography, TextField } from "../muiComponents";

export default function TranslationDialog({ translationObj, onClick, title }) {
  const classes = useStyles();
  const [translation, setTranslation] = useState({ ar: "", en: "" });

  useEffect(() => {
    (async () => {
      setTranslation({
        ar: translationObj?.ar || "",
        en: translationObj?.en || "",
      });
    })();
  }, [translationObj]);

  return (
    <Box container className={classes.translateBox}>
      <Box item lg={6} md={6} xs={12} className={classes.text}>
        <Typography
          className={clsx(classes.typoDetails, classes.labelPosition)}
        >
          {`${title} / ${Object.translate(`LANG.AR`)}`}
        </Typography>
        <TextField
          InputProps={{ disableUnderline: true }}
          id="ar"
          value={translation.ar}
          onChange={(e) => {
            e.preventDefault();
            let ar = e.target.value;
            setTranslation((prevState) => ({
              ...prevState,
              ar,
            }));
          }}
          onBlur={() => onClick && onClick(translation)}
        />
      </Box>
      <Box item lg={6} md={6} xs={12} className={classes.text}>
        <Typography
          className={clsx(classes.typoDetails, classes.labelPosition)}
        >
          {`${title} / ${Object.translate(`LANG.EN`)}`}
        </Typography>
        <TextField
          InputProps={{ disableUnderline: true }}
          id="en"
          value={translation.en}
          onChange={(e) => {
            e.preventDefault();
            let en = e.target.value;
            setTranslation((prevState) => ({
              ...prevState,
              en,
            }));
          }}
          onBlur={() => onClick && onClick(translation)}
        />
      </Box>
    </Box>
  );
}
