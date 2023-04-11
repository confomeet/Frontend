import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/muiComponents";
import { GlobeIcon } from "../../components/icons";
import actions from "redux/actions";
const { setLang } = actions;

const Languages = [
  {
    lang: "ar",
    text: "عربي",
  },
  {
    lang: "en",
    text: "English",
  },
];

export default function LanguageSwitch() {
  const dispatch = useDispatch();
  const { isRTL } = useSelector((state) => state.settingsReducer.settings);
  const currentLang = Languages[isRTL ? 1 : 0];
  const handleLangChange = (lang) => {
    dispatch(setLang({ lang }));
  };

  return (
    <Button
      className="language"
      startIcon={<GlobeIcon />}
      onClick={(e) => handleLangChange(currentLang.lang)}
    >
      <span className="langText"> {currentLang.text}</span>
    </Button>
  );
}
