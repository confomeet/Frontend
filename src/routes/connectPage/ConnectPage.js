import { useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "redux/actions";
import { Box, Container, Typography } from "../../components/muiComponents";
import connectStyles from "./style";
import AppNameBanner from "components/appNameBanner";

const { closeSideMenu } = actions;

function ConnectPage() {
  const classes = connectStyles();

  useEffect(() => {
    window.dispatch(closeSideMenu());
  }, []);

  return (
   <Box className={classes.loginRoot}>
      <Box className="connect-bg ">
        <Container maxWidth="xl" sx={{ height: "100%" }}>
          <Box
            sx={{ width: "100%", height: "100%" }}
            className=" d-flex-column corner-circle-transparent ">
            <Box
              sx={{ width: "100%", height: "100%" }}
              className=" inner-container d-flex "
            >
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
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ConnectPage;
