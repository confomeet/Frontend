import { useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "redux/actions";
import { Box, Container, Typography } from "../../components/muiComponents";
import welcomeStyles from "./style";
import AppNameBanner from "components/appNameBanner";

const { closeSideMenu } = actions;

function WelcomePage() {
  const classes = welcomeStyles();

  useEffect(() => {
    window.dispatch(closeSideMenu());
  }, []);

  return (
   <Box className={classes.WelcomePage}>
      <Box className="connect-bg ">
          <Box
            sx={{ width: "100%", height: "100%" }}
            className=" d-flex-column corner-circle-transparent ">
            <Box
              sx={{
                width: "100%",
                height: "100%",
                paddingTop: "1%",
                flexFlow: "column nowrap",
                overflowX: "scroll",
                display: "flex",
              }}
            >
            <Container maxWidth="xl" sx={{ height: "100%", minWidth: "350px", overflowX: "scroll" }}>
              <AppNameBanner />
              <Box className="buttons-container">
                <Link to="/login" className="link">
                  <Typography
                    variant="h2"
                    className="button-text"
                    >
                      {Object.translate("BUTTONS.SIGNIN")}
                  </Typography>
                  <div className="button-shape"></div>
                </Link>
                <Link to="/join">
                  <Typography
                    variant="h2"
                    className="button-text"
                  >
                    {Object.translate("BUTTONS.JOIN")}
                  </Typography>
                  <div className="button-shape"></div>
                </Link>
              </Box>
            </Container>
            </Box>
          </Box>
      </Box>
    </Box>
  );
}

export default WelcomePage;
