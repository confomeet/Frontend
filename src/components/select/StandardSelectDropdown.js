import React from "react";
import { TextField, Autocomplete, Chip, Avatar, Box } from "../muiComponents";
import useStyles from "./StandardSelectDropdownStyle";
import { ClearIcon } from "../icons";
import ToolTip from "../toolTip/ToolTip";

const filterSelectedObjects = (list) => {
  if (!list || !list.length) return [];
  return [...new Map(list.map((item) => [item.id, item])).values()];
};
export default function StandardSelectDropdown({
  title,
  items,
  onChange,
  defaultValue,
  error,
  helperText,
  disabled,
  required,
  InputLabelProps,
  multiple,
  keyIdx,
  handleClear,
  name,
  onClose,
  placeholder,
  ...props
}) {
  const classes = useStyles();
  let textProps = {};
  if (!Array.isArray(defaultValue))
    textProps.defaultValue =
      defaultValue > -1 &&
      items.length > 0 &&
      items.filter((item) => item.id === Number(defaultValue))[0]?.text;
  return (
    <div className={classes.roundTypeSelect}>
      <Autocomplete
        {...props}
        {...props}
        onClose={onClose ? onClose : () => null}
        clearIcon={
          handleClear ? (
            <ClearIcon onClick={() => handleClear()} fontSize="small" />
          ) : null
        }
        key={keyIdx}
        name={name}
        disableCloseOnSelect={multiple}
        filterSelectedOptions={multiple}
        multiple={multiple}
        required={required}
        disabled={disabled}
        inputProps={{
          autoComplete: "new-password",
        }}
        id="demo-select-with-search"
        value={
          Array.isArray(defaultValue)
            ? defaultValue || []
            : defaultValue
            ? defaultValue > -1 &&
              items.length > 0 &&
              items.filter((item) => item.id === defaultValue)[0]
            : null
        }
        options={items?.filter((item) => item.text) || []}
        onChange={(event, newValue) => {
          if (!newValue || !onChange) return;

          onChange(multiple ? filterSelectedObjects(newValue) : newValue);
        }}
        autoHighlight
        getOptionLabel={(item, i) => item?.text || item?.description || ``}
        renderOption={(props, item) => (
          <Box {...props} display="flex">
            <Box className={classes.optionsStyle}>
              {item.text}&nbsp;{item.description && `(${item.description})`}
            </Box>
          </Box>
        )}
        renderTags={(value, getTagProps) =>
          value.map(({ text }, index) => (
            <ToolTip
              title={
                items.filter((item) => item.text === text)[0]?.toolTip || ""
              }
              placement="top"
            >
              <Chip
                avatar={props.disableChipAvatar ? null : <Avatar />}
                variant="outlined"
                label={text}
                {...getTagProps({ index })}
              />
            </ToolTip>
          ))
        }
        renderInput={(params, input) => (
          <TextField
            {...textProps}
            required={required}
            error={error}
            helperText={helperText}
            {...params}
            label={title}
            variant="standard"
            InputLabelProps={InputLabelProps}
            autoComplete={false}
            placeholder={placeholder}
            name={name}
          />
        )}
        className={classes.formControl}
      />
    </div>
  );
}
