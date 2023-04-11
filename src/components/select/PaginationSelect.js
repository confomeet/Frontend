import * as React from "react";
import { MenuItem, FormControl, Select } from "components/muiComponents";

export default function PaginationSelect(props) {
  return (
    <FormControl size="small">
      <Select
        labelId="select-small"
        id="select-small"
        value={props.value}
        displayEmpty
        onChange={props.onChange}
        style={props.style}
        variant="standard"
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={100}>100</MenuItem>
      </Select>
    </FormControl>
  );
}
