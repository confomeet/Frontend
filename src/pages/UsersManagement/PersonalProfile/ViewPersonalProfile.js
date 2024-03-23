import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import { HiOutlineMail, HiOutlinePhone, User } from "components/icons";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "components/muiComponents";
import { useState } from "react";
import { pProfileStyles } from "./style";
import { editProfilePhoto } from "redux/network/users";
import { useSelector } from "react-redux";
import { TiGroup, TiVideo } from "components/icons";
import { useEffect } from "react";

export default function ViewPersonalProfile(props) {
  const { users } = useSelector((state) => state);
  const classes = pProfileStyles();
  const [file, setFile] = useState([]);
  const [viewData, setViewData] = useState(null);

  const handleChange = async (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    let body = new FormData();
    body.append("UserPhoto", e.target.files[0]);
    await editProfilePhoto(body);
  };

  useEffect(() => {
    if (Object.isObjectEmpty(users?.getProfileInfoComplete))
      return setViewData(null);
    setViewData(users?.getProfileInfoComplete);
  }, [users?.getProfileInfoComplete]);

  useEffect(() => {
    if (!users?.getProfileImgComplete) return setFile([]);
    let file = new File([users?.getProfileImgComplete], "");
    setFile(URL.createObjectURL(file));
  }, [users?.getProfileImgComplete]);

  return (
    <Grid container className={classes.avatarContainer}>
      <Grid item xs={12} lg={4} md={4} sm={3.5}>
        <Box className={classes.avatarBox}>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept={[".png", ".jpg", ".jpeg", ".tiff", ".apng", ".pjpeg"]}
              type="file"
              onChange={handleChange}
            />
            <PhotoCamera />
          </IconButton>

          <Button
            component="span"
            className={classes.upLoad}
            padding="0!important"
          ></Button>
          <Avatar className={classes.avatar}>
            <img src={file} className={classes.imgUpload} />
          </Avatar>
          <Typography className={classes.fullNameTypo}>
            {viewData?.fullName}
          </Typography>
        </Box>
      </Grid>
      <Divider orientation="vertical" />
      <Grid
        item
        xs={12}
        lg={8}
        md={8}
        sm={8.5}
        className={classes.infoMainGrid}
      >
        <Box className={classes.infoBox}>
          <User className={classes.infoIcon} />
          <Typography className={classes.infoHolder}>
            {Object.translate("LABEL.USERFULLNAME")}
          </Typography>
          <Typography className={classes.inHolder}>
            {viewData?.fullName}
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <User className={classes.infoIcon} />
          <Typography className={classes.infoHolder}>
            {Object.translate("LABEL.USERNAME")}
          </Typography>
          <Typography className={classes.inHolder}>
            {viewData?.userName || viewData?.email || ""}
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <HiOutlineMail className={classes.infoIcon} />
          <Typography className={classes.infoHolder}>
            {Object.translate("LABEL.EMAIL")}
          </Typography>
          <Typography className={classes.inHolder}>
            {viewData?.email}
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <HiOutlinePhone className={classes.infoIcon} />
          <Typography className={classes.infoHolder}>
            {Object.translate("LABEL.PHONE")}
          </Typography>
          <Typography className={classes.inHolder}>
            {viewData?.phoneNumber}
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <User className={classes.infoIcon} />
          <Typography className={classes.infoHolder}>
            {Object.translate("LABEL.USERROLE")}
          </Typography>
          <Typography className={classes.inHolder}>
            {Array.isArray(props?.userRoles) && props?.userRoles.length
              ? props?.userRoles?.map((row) => row?.label)?.join(" , ")
              : ""}
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <TiGroup className={classes.infoIcon} />
          <Typography className={classes.infoHolder}>
            {Object.translate("LABEL.USER_GROUPS")}
          </Typography>
          <Typography className={classes.inHolder}>
            {Array.isArray(viewData?.userGroups) && viewData?.userGroups
              ? viewData?.userGroups?.map((row) => row?.value)?.join(" , ")
              : ""}
          </Typography>
        </Box>
        <Box className={classes.infoBox}>
          <TiVideo className={classes.infoIcon} />
          <Typography className={classes.infoHolder}>
            {Object.translate("LABEL.CREATE_CONF_LINK")}
          </Typography>
          <Typography noWrap="true" className={classes.inHolder}>
            {viewData?.createConfLink}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
