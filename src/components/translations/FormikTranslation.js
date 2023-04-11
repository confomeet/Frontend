import React from "react";
import TextField from "../../FormikComponents/textFields/TextField";
import { Grid, InputLabel } from "../muiComponents";
import useStyles from "./Style";
import FormikTextFeildGeneral from "FormikComponents/textFields/FormikTextFeildGeneral";

export default function FormikTranslation({ title }) {
  const classes = useStyles();
  return (
    <Grid container className={classes.formikTranslationGrid}>
      <Grid item lg={6} md={6} xs={12}>
        <FormikTextFeildGeneral
          label={`${title} / ${Object.translate(`LANG.AR`)}`}
          id="ar"
          name="name"
          className={classes.formikTranslationInputar}
        />
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <FormikTextFeildGeneral
          label={`${title} / ${Object.translate(`LANG.EN`)}`}
          id="en"
          name="enName"
          className={classes.formikTranslationInputen}
          // style={{ direction: "ltr" }}
        />
      </Grid>
    </Grid>
  );
}
