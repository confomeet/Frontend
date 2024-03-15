import {
  Box,
  Container,
  Typography,
  Stack,
} from "components/muiComponents";
import formPageStyles from "./style";
import AppNameBanner from "../../../components/appNameBanner";
import ToolTip from "../../../components/toolTip/ToolTip";
import { IconButton } from "../../../components/muiComponents";
import { LeftArrowIcon } from "../../../components/icons";
import { Login } from "../../../components/icons";

function FormPage({children, formName}) {
  const classes = formPageStyles();
  return (
    <Box className={classes.formPageRoot}>
      <Box className="left-pane">
        <Stack direction="column" className="content">
          <Stack direction="row" className="buttons">
            <ToolTip
              title={Object.translate("PAGES.DEFAULT")}
              placement="bottom"
            >
              <IconButton
                onClick={() => {
                  window.navigateTo("/");
                  sessionStorage.removeItem("OTP_INFO");
                }}
              >
                <LeftArrowIcon />
              </IconButton>
            </ToolTip>
            <ToolTip
              title={Object.translate("HEADER.LOG_IN")}
              placement="bottom"
            >
              <IconButton
                onClick={() => window.navigateTo("/login")}
              >
                <Login/>
              </IconButton>
            </ToolTip>
          </Stack>
          <AppNameBanner className="item"/>
        </Stack>
      </Box>
      <Container
        className="corner-circle-transparent"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          height: "100%",
        }}>
        <Typography
          component="h2"
          variant="h2"
          sx= {{ marginY: "1em" }}
        >
          {formName}
        </Typography>
        {children}
      </Container>

    </Box>
  );
}

export default FormPage;
