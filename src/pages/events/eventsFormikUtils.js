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

export const eventsTypesInitialValues = {
  name: "",
  enName: "",
};

export const getEventsValidationSchema = () =>
  Yup.object({
    topic: Yup.string().required(Object.translate("WARNING.REQUIRED")),
  });

export const getEventsTypesValidationSchema = () =>
  Yup.object({
    name: Yup.string().test(
      "validLang",
      Object.translate("LABEL.AR_VALID_LANG"),
      (value) => customRegex.arabicLangRegex.test(value)
    ),
    enName: Yup.string()
      .required(Object.translate("LABEL.EN_REQUIRED"))
      .test("validLang", Object.translate("LABEL.EN_VALID_LANG"), (value) =>
        customRegex.englishLangRegex.test(value)
      ),
  });
