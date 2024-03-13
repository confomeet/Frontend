import {
  Box,
  Container,
} from "components/muiComponents";
import { useSelector } from "react-redux";
import formPageStyles from "./style";
import AppNameBanner from "../../../components/appNameBanner";

function FormPage({children}) {
  const classes = formPageStyles();
  const {
    settingsReducer: { settings },
  } = useSelector((state) => state);

  return (
    <Box className={classes.formPageRoot}>
      <Box className=" left-pane ">
        <Box className=" content ">
          {<AppNameBanner className=" item "/>}
        </Box>
      </Box>
      <Box className=" corner-circle-transparent ">
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
         {children}
        </Container>
      </Box>

    </Box>
  );
}

export default FormPage;
