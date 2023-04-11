import { styled } from "@mui/material/styles";
import FormikSelectDropdownFeild from "FormikComponents/select/FormikSelectDropdownFeild";
import { Box, Button, Grid } from "components/muiComponents";
import { CONTACTS_TYPES } from "constantData";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { filterCompaniesReq, getContactByIdReq } from "redux/network/contacts";
import { getModifiedContact } from "utils";
import TextField from "../../../FormikComponents/textFields/TextField";
import { contactsStyles } from "../style";
import { addContactPhoto } from "redux/network/contacts";
import { convertToFile } from "redux/network/functions";
let timeout;

const valuesArrToFile = ["office", "country", "city", "website", "address"];

const CompanyTab = (props) => {
  const { common, contacts } = useSelector((state) => state);
  const classes = contactsStyles();
  const Input = styled("input")({
    display: "none",
  });

  const [file, setFile] = useState([]);

  const handleChange = async (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));

    if (props?.toggleEdit) {
      let body = new FormData();
      body.append("UserPhoto", e.target.files[0]);
      await addContactPhoto({ contactId: props.editObj?.id }, body);
    }
    if (props?.toggleAdd) {
      let body = new FormData();
      body.append("UserPhoto", e.target.files[0]);
      props?.setImageData(body);
    }
  };

  const [companiesGroup, setCompaniesGroup] = useState([]);

  const handleInputChange = async (e, text, values) => {
    if (timeout) clearTimeout(timeout);
    if (!text || text.length < 3) {
      setCompaniesGroup([]);
      return;
    }
    timeout = setTimeout(async () => {
      let newCompany = await filterCompaniesReq({
        text,
      });
      newCompany = getModifiedContact(newCompany?.data?.result || []);
      setCompaniesGroup(newCompany || []);
    }, 500);
  };

  useEffect(() => {
    (async () => {
      if (
        !props.toggleEdit ||
        !props.editObj?.companyId ||
        Object.isObjectEmpty(contacts.getContactByIdComplete)
      )
        return;
      setCompaniesGroup(
        [
          {
            id: props.editObj.companyId,
            text: contacts.getContactByIdComplete?.displayName,
            description: contacts.getContactByIdComplete?.email,
          },
        ] || []
      );
    })();
  }, [props.toggleEdit, props.editObj, contacts.getContactByIdComplete]);

  useEffect(() => {
    if (!props.toggleEdit) return setFile([]);
    if (!contacts?.getContactImgComplete) return setFile([]);
    let file = new File([contacts?.getContactImgComplete], "");
    setFile(URL.createObjectURL(file));
  }, [props.toggleEdit, contacts?.getContactImgComplete]);

  useMemo(async () => {
    if (!props.toggleAdd || !props.formik.values.companyId) return;
    let chosenComp = await getContactByIdReq({
      id: props.formik.values.companyId,
    });
    chosenComp = chosenComp?.data?.result || null;
    if (!chosenComp) return;
    valuesArrToFile.map((row) => {
      if (!props?.formik?.values[row])
        props?.formik.setFieldValue(row, chosenComp[row]);
    });
    props?.formik.setFieldValue("type", CONTACTS_TYPES.SECTION);
  }, [props.formik.values.companyId, props.toggleAdd]);

  return (
    <Grid container>
      <Grid container xs={12} sm={12} md={9} lg={9} className="lgContainer">
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.NAME")}
            className="input"
            name="displayName"
            id="displayName"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <FormikSelectDropdownFeild
            InputProps={{ disableUnderline: true }}
            title={Object.translate("LABEL.BELONGS_TO")}
            name="companyId"
            options={companiesGroup}
            multiple={false}
            defaultValue={props.formik.values.companyId || null}
            onInputChange={async (e, text) => {
              await handleInputChange(e, text);
            }}
            handleClear={() => props.formik.setFieldValue("companyId", null)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.PHONE")}
            className="input"
            name="office"
            id="office"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.MOBLIE")}
            className="input"
            name="mobile"
            id="mobile"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.EMAIL")}
            className="input"
            name="email"
            id="email"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.WEBSITE")}
            className="input"
            name="website"
            id="website"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <FormikSelectDropdownFeild
            InputProps={{ disableUnderline: true }}
            title={Object.translate("LABEL.COUNTRY")}
            name="country"
            options={common.AllCountries}
            multiple={false}
            defaultValue={props.formik.values.country || null}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.CITY")}
            className="input"
            name="city"
            id="city"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.contactFld}>
          <TextField
            label={Object.translate("LABEL.ADDRESS")}
            className="input"
            name="address"
            id="address"
            variant="standard"
            type="text"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} className={classes.photoGrid}>
        <Box className={classes.photo}>
          <img src={file} className={classes.imgUpload} />
        </Box>
        <label htmlFor="contained-button-file">
          <Input
            accept={[".png", ".jpg", ".jpeg", ".tiff", ".apng", ".pjpeg"]}
            id="contained-button-file"
            multiple
            type="file"
            onChange={handleChange}
          />
          <Button component="span" className={classes.addPhoto}>
            {Object.translate("LABEL.ADD_PHOTO")}
          </Button>
        </label>
      </Grid>
    </Grid>
  );
};

export default CompanyTab;
