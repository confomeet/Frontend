import * as Yup from "yup";
import { customRegex } from "constantData/customRegex";

export const tabsInitialValues = {
  name: "",
  enName: "",
  link: "",
  tabOrder: [],
  parentId: null,
  icon: "",
  iconString: "",
  rolesId: [],
};

export const getTabsValidationSchema = () =>
  Yup.object({
    name: Yup.string()
      .required(Object.translate("LABEL.AR_REQUIRED"))
      .test("validLang", Object.translate("LABEL.AR_VALID_LANG"), (value) =>
        customRegex.arabicLangRegex.test(value)
      ),
    enName: Yup.string()
      .required(Object.translate("LABEL.EN_REQUIRED"))
      .test("validLang", Object.translate("LABEL.EN_VALID_LANG"), (value) =>
        customRegex.englishLangRegex.test(value)
      ),
    link: Yup.string()
      .nullable()
      .test(
        "validLang",
        Object.translate("LABEL.EN_VALID_LINK_LANG"),
        (value) => customRegex.englishLangRegex.test(value)
      ),
    icon: Yup.string()
      .nullable()
      .test(
        "validLang",
        Object.translate("LABEL.EN_VALID_ICON_LANG"),
        (value) => customRegex.englishLangRegex.test(value)
      ),
  });
