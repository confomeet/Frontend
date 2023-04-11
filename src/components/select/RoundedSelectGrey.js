import React from "react";

import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
} from "components/muiComponents";
import useStyles from "./SelectDropdownFeildStyle";

export default function RoundedSelectGrey({
  title,
  rows,
  selectValue,
  handleSelectChange,
  disabled,
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <FormControl variant="filled" className={classes.RoundedSelect}>
        <InputLabel
          InputProps={{
            disableUnderline: true,
          }}
          id="open-select-label"
        >
          {title && <Box>{title} </Box>}
        </InputLabel>
        <Select
          labelId="open-select-label"
          id="open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={selectValue}
          onChange={(e) => handleSelectChange && handleSelectChange(e)}
          disableUnderline
          disabled={disabled}
          MenuProps={{
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "left",
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "left",
            },
            getContentAnchorEl: null,
          }}
        >
          {rows &&
            rows.length &&
            rows.map((row) => {
              return (
                <MenuItem
                  className={classes.selectContent}
                  name={row.id}
                  value={row.value}
                >
                  <Box id={row.value} />
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
}
