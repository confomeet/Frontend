import React from "react";
import { Form, Field } from "formik";
import TimezoneSelect, { allTimezones } from "react-timezone-select";

const FormikTimeZone = (props) => {
  return (
    <Form>
      <Field
        component={TimezoneSelect}
        value={props?.value}
        onChange={props?.onChange}
        name={props?.name}
        variant={props?.variant}
        placeholder={props?.placeholder}
        timezones={{
          ...allTimezones,
          "Asia/Damascus": "Damascus",
        }}
        isDisabled={props.disabled}
      />
    </Form>
  );
};

export default FormikTimeZone;
