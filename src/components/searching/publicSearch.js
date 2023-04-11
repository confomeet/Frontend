import { Close } from "@mui/icons-material";
import { Box, Divider, TextField } from "components/muiComponents";
import { SearchIcon } from "../icons";
import ToolTip from "../toolTip/ToolTip";

export default function publicSearch(props) {
  return (
    <div className="search d-flex align-center">
      <TextField
        variant="standard"
        placeholder={Object.translate("LABEL.SEARCH")}
        InputProps={{
          disableUnderline: true,
        }}
        value={props.searchParams?.topic || props.searchParams?.text}
        onChange={(e) => {
          const topic = e.target.value;
          props.handleSearchParamsChange("topic", topic);
        }}
        onKeyDown={(e) => {
          if (!["Enter"].includes(e.key) || !props.handleSearch) return;

          e.preventDefault();
          props.handleSearch();
        }}
      />

      <Box
        width="32px"
        onClick={() => props.setOpenFilters(!props.openFilters)}
      >
        <ToolTip title={Object.translate("BUTTONS.SEARCH")} placement="top">
          <SearchIcon />
        </ToolTip>
      </Box>
    </div>
  );
}
