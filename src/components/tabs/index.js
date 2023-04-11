import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/core";
import IconLabelButtons from "../ActionButtons/buttonWithIcon/ButtonWithIcon";
import DarpzoneAllTypes from "../drapZone/DarpzoneAllTypes";
import PreviousTrans from "../../app/componentsWraper/applicationRequests/edit/PreviousTrans";
import useStyles from "./style";
import { dispatchSetAlertObject } from "materialComponents/Modal/FormDialog/AlertDialog";
import IntlMessages from "util/IntlMessages";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

export default function TabsWithTextLabels({
  transactionData,
  setTransactionData,

  previousTerms,
  handleGenerate,
  handleUpload,
  acceptedFiles,
  handleTermsChange,
  getFileURL,
  pdfRequest,
  setPdfRequest,
}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(transactionData.isUpload ? 1 : 0);
  const [displayfile, setDisplayfile] = React.useState(
    transactionData.isUpload
  );
  useEffect(() => {
    (async () => {
      setValue(transactionData.isUpload ? 1 : 0);
    })();
  }, [transactionData]);

  const handleChange = async (event, newValue) => {
    if (value === newValue) return;
    if (!transactionData.text) setValue(newValue);
    else {
      let alertValue = await dispatchSetAlertObject({
        icon: "question",
        title: "",
        content:
          localStorage.getItem("lang") === "ar"
            ? "سيتم تجاهل التغييرات في نص المعاملة. هل أنت متأكد؟"
            : "Any Transaction changes will be ignored. Are you sure?",
        hasCancelBtn: true,
      });

      if (transactionData.text && alertValue) {
        let init = {
          isUpload: true,
          pdfUrl: "",
          text: null,
          file: [],
        };
        if (newValue === 1) {
          setTransactionData({
            ...transactionData,
            ...init,
          });
        } else if (newValue === 0) {
          setTransactionData({
            ...transactionData,
            ...init,
            isUpload: false,
          });
        }
        setValue(newValue);
        setDisplayfile(false);
      }
    }
  };

  return (
    <div className={classes.root}>
      {transactionData.isAdd && (
        <>
          <Typography className={classes.sectionHeading}>
            {<IntlMessages id="Available.Define.Terms.Transaction" />}
          </Typography>
          <br />
          <Tabs
            className={classes.tablet}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab
              className={classes.taba}
              icon={
                <Typography className={classes.title}>
                  <IntlMessages id="Transaction based on prior models" />
                </Typography>
              }
              label={
                <IntlMessages id="Choose Appropriatetemplates from a writerJustice" />
              }
              {...a11yProps(0)}
            />
            <Tab
              className={classes.taba}
              icon={
                <Typography className={classes.title}>
                  <IntlMessages id="Upload .Form.AttestationDirectly" />
                </Typography>
              }
              label={<IntlMessages id="UploadItems to be certified directly" />}
              {...a11yProps(1)}
            />
          </Tabs>
        </>
      )}
      {value === 0 && (
        <PreviousTrans
          isAdd={transactionData.isAdd}
          terms={previousTerms}
          editorText={transactionData.text}
          pdfUrl={transactionData.pdfUrl}
          handleEditorChange={handleGenerate}
          handleTermsChange={handleTermsChange}
          pdfRequest={pdfRequest}
          setPdfRequest={setPdfRequest}
        />
      )}

      {value === 1 &&
        (!displayfile || !transactionData.text ? (
          <Box className={classes.drapZoneHolder}>
            <DarpzoneAllTypes
              files={transactionData.file}
              acceptedFiles={acceptedFiles}
              title={"Drag.Drop.Text"}
              onChange={(files) => {
                if (files.length) {
                  handleUpload(files);
                  setDisplayfile(true);
                }
              }}
            />
          </Box>
        ) : (
          <>
            <Box>
              <IconLabelButtons
                title={<IntlMessages id="UploadNewFile" />}
                icon=""
                handleButtonClick={() => {
                  setTransactionData({
                    ...transactionData,
                    isUpload: true,
                    pdfUrl: "",
                    text: null,
                    file: [],
                  });
                  setDisplayfile(false);
                }}
              />
            </Box>
            {transactionData.text && (
              <iframe
                className={classes.frame}
                width="100%"
                height="800px"
                src={getFileURL(transactionData.text)}
              />
            )}
          </>
        ))}
    </div>
  );
}
