import { FaArrowRight, FaPlus } from "components/icons";
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
            className="   d-flex-column corner-circle-transparent"
          >
            <Box
              sx={{ width: "100%", height: "100%" }}
              className=" inner-container d-flex "
            >
              <Box className=" loginContent  d-flex-column ">
                <Box
                  sx={{ flex: "auto", justifyContent: "center" }}
                  className="  d-flex-column"
                >
                  <Box className=" d-flex-column" sx={{ direction: "ltr" }}>
                    <div className=" d-flex">
                      <Typography
                        component="h1"
                        variant="h1"
                        className="white display-text"
                      >
                        {Object.translate("FULL_SENTENCE.LILAC_MEET")}
                      </Typography>
                    </div>

                    <Typography className="white " component="h5" variant="h5">
                      {Object.translate("FULL_SENTENCE.U_R_CONNECTED")}
                    </Typography>
                  </Box>

                  <Box
                    sx={{ alignItems: "baseline" }}
                    className=" signup d-flex"
                  >
                    <Typography className="white" marginY={5}>
                      {Object.translate("MAIN.NO_ACCOUNT")}
                    </Typography>
                    &nbsp; &nbsp;
                    <Link className="blue" variant="text" to="/signup">
                      {Object.translate("BUTTONS.SIGNUP")}
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flex: "auto",
                }}
                className="buttons-container d-flex"
              >
                <div className=" d-flex">
                  <Link
                    variant="text"
                    className="loginBtn white center-content d-flex-column"
                    to="/join"
                  >
                    <span className="icon d-flex center-content">
                      <FaPlus />
                    </span>
                    <div className="button-text">
                      {Object.translate("BUTTONS.JOIN")}
                    </div>
                  </Link>
                  <Link
                    variant="text"
                    className="loginBtn white center-content d-flex-column"
                    to="/login"
                  >
                    <span className="icon d-flex center-content">
                      <FaArrowRight />
                    </span>
                    <div className="button-text">
                      {Object.translate("BUTTONS.SIGNIN")}
                    </div>
                  </Link>
                </div>
                <Box
                  sx={{ alignItems: "baseline" }}
                  className=" signup-mobile d-flex"
                >
                  <Typography className="white" marginY={3} marginRight={2}>
                    {Object.translate("MAIN.NO_ACCOUNT")}
                  </Typography>
                  <Link className="blue" variant="text" to="/signup">
                    {Object.translate("BUTTONS.SIGNUP")}
                  </Link>
                </Box>
              </Box>
            </Box>
            <div className="d-flex-column custom-footer">
              <Box className="lilacLogo">
                <img src={`${window.officialWhiteLogo}`} alt="lilacLogo" />
              </Box>
            </div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ConnectPage;
