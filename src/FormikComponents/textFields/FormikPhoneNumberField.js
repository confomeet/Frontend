import React, { useState } from "react";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Field } from "formik";
const FormikPhoneNumberField = (props) => {
  const [hover, setHover] = useState(false);
  const className = (props.className ?? "") + (hover ? " hovered " : "");
  return (
    <Field
      {...props}
      component={PhoneInput}
      name={props.name}
      type="text"
      id="phone"
      variant="standard"
      style={{ direction: "ltr" }}
      className={className}
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
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    />
  );
};

export default FormikPhoneNumberField;
