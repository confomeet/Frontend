import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "components/muiComponents";
import { GlobeIcon } from "../../components/icons";
import actions from "redux/actions";
const { setLang } = actions;

const Languages = [
  {
    lang: "ru",
    text: "Русский",
  },
  {
    lang: "en",
    text: "English",
  },
];

export default function LanguageSwitch() {
  const dispatch = useDispatch();
  // FIXME: Must get the language from window.navigator.language
  const currentLang = "ru";
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
