import * as React from "react";
import { Autocomplete, Avatar, Chip, TextField } from "./index";

export default function CustomAutocomplete({
  multiple = false,
  freesolo = false,
  value,
  limitTags = 2,
  options = [],
  onChange = () => {},
  defaultValue,
  error,
  helperText,
  label,
  textFieldValue,
  textFieldOnChange,
  textFieldOnKeyDown,
  textFieldOnPaste,
  textFieldPlaceholder,
  ...additionalProps
}) {
  const ref = React.useRef();

  const getOptionLabel = (option) => {
    const { mainText, subText, subText2 } = option;
    let replaceText = "{{subText}}, {{subText2}}";
    let text = mainText;
    if (subText) replaceText = replaceText.replace("{{subText}}", subText);
    else replaceText = replaceText.replace("{{subText}}, ", "");
    if (subText2) replaceText = replaceText.replace("{{subText2}}", subText2);
    else replaceText = replaceText.replace(", {{subText2}}", "");

    if (replaceText) text = text + " (" + replaceText + ")";

    return text;
  };
  return (
    <Autocomplete
      popupIcon={false}
      ref={ref}
      filterSelectedOptions
      multiple={multiple}
      freesolo={freesolo}
      limitTags={limitTags}
      options={options}
      onChange={(e, value) => onChange(value)}
      getOptionLabel={getOptionLabel}
      defaultValue={defaultValue}
      value={value}
      renderOption={(props, option) => (
        <div {...props}>{getOptionLabel(option)}</div>
      )}
      clearOnBlur={false}
      inputValue={textFieldValue}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          // InputProps={{ disableUnderline: true }}
          variant="standard"
          value={textFieldValue}
          onChange={textFieldOnChange}
          onKeyDown={textFieldOnKeyDown}
          onPaste={textFieldOnPaste}
          error={error}
          helperText={helperText}
          autoComplete="new-password"
          placeholder={textFieldPlaceholder}
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            avatar={<Avatar />}
            label={
              <>
                <div>{option.mainText}</div>
                <div>{option.subText || option.subText2}</div>
              </>
            }
            {...getTagProps({ index })}
          />
        ))
      }
      {...additionalProps}
    />
  );
}
