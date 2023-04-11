import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useTheme } from "@mui/styles";
import { HiOutlinePhone } from "components/icons";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  CardActions,
  Button,
} from "components/muiComponents";
import ToolTip from "../toolTip/ToolTip";

import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { AiOutlineHome, AiOutlineMobile } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { VscEdit } from "react-icons/vsc";
import { Minus, PenEdit } from "../icons";
import { contactsCardStyle } from "./style";
import { useSelector } from "react-redux";

export default function ContactsCard({
  switchEdit,
  handleDelete,
  id,
  name,
  email,
  mobile,
  home,
  office,
  joinMeeting,
  userId,
  contactId,
}) {
  const classes = contactsCardStyle();
  const { contacts } = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const Details = [
    {
      icon: <AiOutlineMobile />,
      value: mobile || Object.translate("VALUE.UNKNOWN"),
      name: Object.translate("CONTACT.mobile"),
    },
    {
      icon: <IoBusinessOutline />,
      value: office || Object.translate("VALUE.UNKNOWN"),
      name: Object.translate("CONTACT.office"),
    },
  ];
  const actions = [
    {
      onClick: switchEdit,
      icon: <PenEdit />,
      name: Object.translate("BUTTONS.EDIT"),
    },
    {
      onClick: () => handleDelete(id),
      icon: <Minus />,
      name: Object.translate("BUTTONS.TRASH"),
    },
  ];

  return (
    <Card elevation={0} sx={{ minWidth: 275 }} className={classes.ContactCard}>
      <CardHeader
        avatar={
          <>
            <Avatar aria-label="avatar">
              {name ? name[0] : "U"}
              {
                <span
                  className={
                    contactId &&
                    contacts.getActiveContactsComplete?.includes(contactId)
                      ? "status-online"
                      : "status-offline"
                  }
                ></span>
              }
            </Avatar>
            <Box
              display="flex"
              flexDirection="column"
              className={classes.ContactCardDetails}
            >
              <ToolTip title={name} placement="top">
                <Typography gutterBottom variant="h6" component="h6">
                  {name || Object.translate("VALUE.UNKNOWN")}
                </Typography>
              </ToolTip>

              <ToolTip title={email} placement="top">
                <Typography variant="body2" color="text.secondary">
                  {email || Object.translate("VALUE.UNKNOWN")}
                </Typography>
              </ToolTip>
            </Box>
          </>
        }
      />
      <CardContent>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          aria-label="contacts"
        >
          {Details.map((d) => (
            <ToolTip title={d.name} placement="top">
              <ListItem disablePadding>
                <ListItemIcon>{d.value ? d.icon : ""}</ListItemIcon>
                <ListItemText primary={d.value ? d.value : ""} />
              </ListItem>
            </ToolTip>
          ))}
        </List>
      </CardContent>
      <Divider flexItem className="actionsDivider" />
      <CardActions disableSpacing className={classes.cardActions}>
        <Divider className="actionsDivider" />
        <Box className={classes.cardActionsButtons}>
          <ToolTip title={Object.translate("BUTTONS.TRASH")} placement="top">
            <Button
              className="joinButton"
              startIcon={<FaRegTrashAlt />}
              onClick={() => handleDelete(id)}
            ></Button>
          </ToolTip>
          <Divider
            flexItem
            orientation="vertical"
            variant="middle"
            className="actionsDivider"
          />
          <ToolTip title={Object.translate("BUTTONS.EDIT")} placement="top">
            <Button
              startIcon={<VscEdit />}
              onClick={switchEdit}
              className="copyOutlineButton"
            ></Button>
          </ToolTip>
          <Divider
            flexItem
            orientation="vertical"
            variant="middle"
            className="actionsDivider"
          />
          <ToolTip title={Object.translate("LABEL.CALL")} placement="top">
            <Button
              startIcon={<HiOutlinePhone />}
              className="editEventButton"
              onClick={(e) =>
                joinMeeting({ name, email, mobile, id, userId, contactId })
              }
            ></Button>
          </ToolTip>
        </Box>
      </CardActions>
    </Card>
  );
}
