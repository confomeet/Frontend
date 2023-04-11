import RenderComp from "components/RenderComponent";
import { Box } from "components/muiComponents";
import { SmtpContext } from "contextProviders";
import { useContext } from "react";
import { useSelector } from "react-redux";
import HandleSmtpConfig from "./components/HandleSmtpConfig";
const Smtp = () => {
  const contextProps = useContext(SmtpContext);
  const {
    usersgroups,
    settingsReducer: {
      settings: { isRTL },
    },
  } = useSelector((state) => state);
  return (
    <Box margin="0 20px">
      <HandleSmtpConfig />
    </Box>
  );
};

export default Smtp;
