import React from "react";
import { TextField, Autocomplete, Chip, Avatar } from "../muiComponents";
import useStyles from "./SelectDropdownFeildStyle";
import { ClearIcon } from "../icons";
import ToolTip from "../toolTip/ToolTip";

export default function SelectDropdownFeild({
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
          newValue && onChange(newValue);
        }}
        autoHighlight
        getOptionLabel={(item, i) =>
          item?.description || item?.text || `option-${i}`
        }
        renderOption={(props, item) => (
          <div {...props}>
            <span className={classes.optionsStyle}>{item.text}</span>
            {item.description && (
              <span className={classes.descriptionStyle}>
                {item.description}
              </span>
            )}
          </div>
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
          />
        )}
        className={classes.formControl}
      />
    </div>
  );
}
