import { AddIcon, BsGridFill, TiThMenu } from "components/icons";
import ToggleButtons from "components/materialComponents/ToggleButtons";
import { Box, Button } from "components/muiComponents";
import { DisplayType as ContactsDisplayType } from "constantData";
import PageHeading from "videoComponents/typographyGeneral/PageHeading";
import { contactsStyles } from "./style";

const ContactsToggleButtons = [
  {
    value: ContactsDisplayType.table,
    label: ContactsDisplayType.table,
    icon: <TiThMenu />,
    Tooltip: "Table",
    arTooltip: "جدول",
  },
  {
    value: ContactsDisplayType.grid,
    label: ContactsDisplayType.grid,
    icon: <BsGridFill />,
    Tooltip: "Cards",
    arTooltip: "بطاقات",
  },
];
export default function ContactsHeader(props) {
  const classes = contactsStyles();

  return (
    <Box>
      <Box className={classes.myContactsHeader}>
        <PageHeading />
        <Box display="flex" className={classes.toggleBox}>
          <ToggleButtons
            view={props.view}
            handleChange={props.handleChange}
            btns={ContactsToggleButtons}
          />
          <Button
            color="primary"
            size="small"
            className={classes.addContactButton}
            startIcon={<AddIcon />}
            onClick={() => props.switchAdd(true)}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
}
