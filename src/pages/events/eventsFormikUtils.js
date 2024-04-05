import * as Yup from "yup";
import { customRegex } from "constantData/customRegex";

export const eventsInitialValues = {
  description: "",
  topic: "",
  subTopic: "",
  organizer: "",
  timeZone: "timeZone",
  password: Math.random().toString(36).slice(2),
  meetingId: "",
};

export const getEventsValidationSchema = () =>
  Yup.object({
    topic: Yup.string().required(Object.translate("WARNING.REQUIRED")),
  });
