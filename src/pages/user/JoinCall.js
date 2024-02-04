import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { Box, Button, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { getSearchQueries } from "redux/network/functions";
import loginStyles from "./style";

import { joinByMeetingLink } from "utils";
import actions from "../../redux/actions";
import FormPage from "pages/templates/form";

const { joinMeeting, joinMeetingDone } = actions;

function JoinCall() {
  const classes = loginStyles();
  const { meetings } = useSelector((state) => state);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    meetingId: Yup.string().required(Object.translate("WARNING.REQUIRED")),
    name:
      !window.self.JitsiMeetElectron &&
      Yup.string().required(Object.translate("WARNING.REQUIRED")),
    email:
      !window.self.JitsiMeetElectron &&
      Yup.string()
        .email(Object.translate("WARNING.EMAILFORMAT"))
        .required(Object.translate("WARNING.REQUIRED")),
  });

  const {
    meetingid: meetingId,
    password,
    name,
    email,
    redirect,
  } = useMemo(() => {
    let queries = getSearchQueries();

    if (queries.email?.toLowerCase() === "null") {
      queries.email = null;
    }

    if (queries.email) {
      queries.email = decodeURIComponent(queries.email);
    }

    if (queries.password) {
      queries.password = decodeURIComponent(queries.password);
    }

    if (queries.meetingid) {
      queries.meetingid = decodeURIComponent(queries.meetingid);
    }

    if (queries.name) {
      queries.name = decodeURIComponent(queries.name);
    }
    return { ...queries };
  }, []);

  useEffect(() => {
    if (!meetings.joinMeetingDone) return;

    if (meetings.joinMeetingDone.meetingLink) {
      if (redirect === "0") {
        joinByMeetingLink({
          link: meetings.joinMeetingDone.meetingLink,
          shouldSignout: false,
          // shouldSignout: true,
          shouldRedirect: true,
        });
        return;
      }
      if (window.self.JitsiMeetElectron) {
        window.open(meetings.joinMeetingDone.meetingLink, "_blank");
        return;
      }
      window.location.href = meetings.joinMeetingDone.meetingLink;
      return;
    }
    window.dispatch(joinMeetingDone({ data: false }));
  }, [meetings.joinMeetingDone]);

  const onSubmit = async (values) => {
    const { meetingId, ...body } = { ...values };
    dispatch(joinMeeting({ body, meetingId }));
  };

  return (
    <FormPage>
        <Formik
          initialValues={{
            name: name || "",
            email: email || "",
            meetingId,
            password,
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize={true}
        >
          {({ isValid, dirty, values, submitForm }) => (
            <Form className={classes.loginRoot}>
              <Typography
                component="h2"
                variant="h2"
                marginBottom={10}
              >
                {Object.translate("PAGES.JOIN")}
              </Typography>

              <Box display="flex" flexDirection="column">
                {!window.self.JitsiMeetElectron ? (
                  <>
                    <Field
                      disabled={!!name}
                      component={TextField}
                      className="input"
                      name="name"
                      variant="standard"
                      type="text"
                      placeholder={Object.translate("LABEL.NAME")}
                      onKeyUp={(e) => {
                        if (e.which === 13) {
                          submitForm();
                        }
                      }}
                    />
                    <Field
                      disabled={!!email}
                      placeholder={Object.translate("LABEL.EMAIL")}
                      component={TextField}
                      className="input"
                      name="email"
                      type="email"
                      variant="standard"
                      onKeyUp={(e) => {
                        if (e.which === 13) {
                          submitForm();
                        }
                      }}
                    />
                    {/* <Field
                      component={TextField}
                      className="input"
                      disabled={true}
                      name="meetingId"
                      variant="standard"
                      type="text"
                      placeholder={Object.translate("LABEL.MEETINGID")}
                      onKeyUp={(e) => {
                        if (e.which === 13) {
                          submitForm();
                        }
                      }}
                    /> */}
                    {/* {values.password && (
                      <Field
                        component={TextField}
                        className="input"
                        disabled={true}
                        name="password"
                        variant="standard"
                        type="text"
                        placeholder={Object.translate("LABEL.PASS_CODE")}
                        onKeyUp={(e) => {
                          if (e.which === 13) {
                            submitForm();
                          }
                        }}
                      />
                    )} */}
                  </>
                ) : (
                  <>
                    <Field
                      component={TextField}
                      className="input"
                      disabled={false}
                      name="meetingId"
                      variant="standard"
                      type="text"
                      placeholder={Object.translate("LABEL.MEETINGID")}
                      onKeyUp={(e) => {
                        if (e.which === 13) {
                          submitForm();
                        }
                      }}
                    />
                    <Field
                      component={TextField}
                      className="input"
                      disabled={false}
                      name="password"
                      variant="standard"
                      type="text"
                      placeholder={Object.translate("LABEL.PASS_CODE")}
                      onKeyUp={(e) => {
                        if (e.which === 13) {
                          submitForm();
                        }
                      }}
                    />
                  </>
                )}

                <Box marginY={10} width="65%" margin="40px auto">
                  <Button
                    variant="contained"
                    disableElevation
                    className="submitBtn"
                    onClick={submitForm}
                    disabled={!isValid}
                  >
                    {Object.translate("BUTTONS.JOIN0")}
                  </Button>
                </Box>
              </Box>
            </Form>
          )}
        </Formik>
      </FormPage>
  );
}

export default JoinCall;
