import { useEffect } from "react";
import { Link } from "react-router-dom";
import actions from "redux/actions";
import { Box, Container, Typography } from "../../components/muiComponents";
import connectStyles from "./style";

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
              <Box className=" app-name d-flex-column center-content ">
                <Box className=" d-flex ">
                  <Typography
                    variant="h1"
                    component="h1"
                  >
                    Conf
                  </Typography>
                  <img src="/meet/logo.png"/>
                  <Typography
                    component="h1"
                    variant="h1"
                  >
                   Meet
                  </Typography>
                </Box>
              </Box>

              <Box className=" buttons-container d-flex ">
                <Box className=" d-flex-column ">
                  <Link to="/login">
                    <div className=" button-shape d-flex ">
                      <span className=" button-text ">{Object.translate("BUTTONS.SIGNIN")}</span>
                    </div>
                  </Link>
                  <Link to="/join">
                    <div className=" button-shape ">
                      <span className=" button-text ">{Object.translate("BUTTONS.JOIN")}</span>
                    </div>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ConnectPage;
