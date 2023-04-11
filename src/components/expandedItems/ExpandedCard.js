import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
  Typography,
} from "../../components/muiComponents";
import { HiOutlineMail, HiOutlinePhone } from "../icons";
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

export default function Expandedcard({ data }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = style();
  return (
    <Card elevation={0} className={clsx(classes.expandedCard, "d-flex-column")}>
      <CardHeader
        title={data.fullName}
        action={<span className="badge"></span>}
        subheader={
          <div className="d-flex between align-center">
            <Typography variant="caption"> </Typography>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </div>
        }
      />
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
