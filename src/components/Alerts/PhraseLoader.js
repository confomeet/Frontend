import {
  Alert,
  Box,
  Snackbar,
  Stack,
  Typography,
} from "components/muiComponents";
import { useSelector } from "react-redux";
import { phraseLoaderStyles } from "./PhraseLoaderSyles";

const vertical = "top",
  horizontal = "center";

const PhraseLoader = () => {
  const {
    settingsReducer: {
      settings: { phraseLoader },
    },
  } = useSelector((state) => state);
  const classes = phraseLoaderStyles();
  return (
    <Stack>
      <Snackbar
        anchorOrigin={{
          vertical: vertical,
          horizontal: horizontal,
        }}
        open={phraseLoader?.open}
      >
        <Alert severity={phraseLoader.severity} icon={false}>
          <Box className={classes.phraseBox}>
            <Typography className={classes.phraseTypography} component="p">
              {phraseLoader?.text
                ? phraseLoader?.text
                : Object.translate("FULL_SENTENCE.GET_DATA_LOADER_PHRASE")}
            </Typography>
            <div className={classes.dotPulse}></div>
          </Box>
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default PhraseLoader;
