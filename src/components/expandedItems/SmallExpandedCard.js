import { styled } from "@mui/material/styles";
import clsx from "clsx";
import * as React from "react";
import {
  Box,
  Card,
  CardHeader,
  Collapse,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "../../components/muiComponents";
import { HiOutlineMail, HiOutlinePhone } from "../icons";
import Popup from "./Popup";
import style from "./style";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SmallExpandedCard({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = style();
  return (
    <Card elevation={0} className={clsx(classes.miniExpandedCard, "d-flex")}>
      <CardHeader title={data.fullName} />
      <Popup />
      1111
      <Box className="d-flex-column">
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <List>
            <ListItem>
              <ListItemIcon>
                <HiOutlinePhone />
              </ListItemIcon>
              <ListItemText
                primary={data.mobile || Object.translate("VALUE.UNKNOWN")}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HiOutlineMail />
              </ListItemIcon>
              <ListItemText
                primary={data.email || Object.translate("VALUE.UNKNOWN")}
              />
            </ListItem>
          </List>
        </Collapse>
      </Box>
    </Card>
  );
}
