import React from "react";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import { Field } from "formik";
const FormikPhoneNumberField = (props) => {
  return (
    <Field
      {...props}
      component={PhoneInput}
      name={props.name}
      type="text"
      id="phone"
      variant="standard"
      style={{ direction: "ltr" }}
      className={props.className}
      onChange={(e) => {
        props.setFieldValue(props.name, e);
        if (e) {
          if (!isPossiblePhoneNumber(e))
            props.setFieldError(
              props.name,
              Object.translate("WARNING.ADDPHONE")
            );
        }
      }}
      placeholder={Object.translate("LABEL.PHONE")}
      defaultCountry="AE"
      international
      value={props.value}
      label={props.label}
    />
  );
};

export default FormikPhoneNumberField;
