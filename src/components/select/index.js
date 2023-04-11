import Select from "@mui/material/Select";
import { RiArrowDownSLine } from "components/icons";
import { FormControl, MenuItem } from "components/muiComponents";
import * as React from "react";

export default function SelectSmall() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl size="small">
      <Select
        labelId="select-small"
        id="select-small"
        value={value}
        displayEmpty
        onChange={handleChange}
        variant="standard"
        IconComponent={() => <RiArrowDownSLine />}
      >
        <MenuItem value="">{Object.translate("LABEL.ALL")}</MenuItem>
        <MenuItem value={10}>Meetings</MenuItem>
        <MenuItem value={20}>Contacts</MenuItem>
      </Select>
    </FormControl>
  );
}
