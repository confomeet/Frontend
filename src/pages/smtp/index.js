import { SmtpContext } from "contextProviders";
import Smtp from "./Smtp";
import { useState, useReducer, useEffect } from "react";
import { DataActions as SmtpActions } from "constantData";
import SmtpHeader from "./components/SmtpHeader";
import { Box, Typography } from "components/muiComponents";
import { useSelector } from "react-redux";
import { IoArrowBack } from "components/icons";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";

const SmtpProvider = () => {
  const {
    settingsReducer: {
      settings: { isRTL },
    },
    users,
  } = useSelector((state) => state);
  const [selectedObj, setSelectedObj] = useReducer((initState, data) => {
    return data ? data : null;
  }, null);
  const handleGetSmtpConfig = () => {
    window.dispatchWantedAction("GET_SMTP_CONFIG");
  };

  useEffect(() => {
    window.dispatchWantedAction("SET_SUB_HEADER", {
      subHeader: <PageHeading />,
    });
    handleGetSmtpConfig();
  }, [isRTL]);

  useEffect(() => {
    if (Object.isObjectEmpty(users?.getSmtpConfigComplete))
      return setSelectedObj(null);
    setSelectedObj(users?.getSmtpConfigComplete);
  }, [users?.getSmtpConfigComplete]);

  return (
    <SmtpContext.Provider value={{ selectedObj }}>
      <Smtp />
    </SmtpContext.Provider>
  );
};

export default SmtpProvider;
