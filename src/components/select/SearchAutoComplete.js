import { TextField, Box, Autocomplete } from "components/muiComponents";
import { Chip } from "components/muiComponents";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

const SearchAutoComplete = (props) => {
  const { autoCompleteProps, textFieldProps } = props;
  return (
    <Autocomplete
      {...autoCompleteProps}
      onChange={(e, value) =>
        autoCompleteProps?.onChange && autoCompleteProps.onChange(value)
      }
      getOptionLabel={(item, i) =>
        item?.label || item?.text || item?.fullName || item?.description || ``
      }
      renderTags={(value, getTagProps) =>
        value?.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={index}
            variant="outlined"
            label={
              option?.label ||
              option?.text ||
              option?.fullName ||
              option?.description ||
              ``
            }
            clickable={true}
            deleteIcon={
              <Box sx={{ display: "flex" }}>
                <HighlightOffTwoToneIcon
                  sx={{ marginInline: "0 7px !important" }}
                  onClick={() =>
                    autoCompleteProps?.handleChipClear &&
                    autoCompleteProps?.handleChipClear(option)
                  }
                />
              </Box>
            }
            disabled={autoCompleteProps.chipDisabled}
          />
        ))
      }
      renderOption={(props, item) => (
        <Box {...props} display="flex">
          <Box>
            {item?.text || item?.label || item?.fullName}&nbsp;
            {(item?.description || item?.email) &&
              `(${item?.description || item?.email})`}
          </Box>
        </Box>
      )}
      renderInput={(props) => (
        <TextField {...props} {...textFieldProps} fullWidth />
      )}
    />
  );
};

export default SearchAutoComplete;
