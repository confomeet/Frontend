import { IoCalendarClearOutline, SearchIcon } from "components/icons";
import { ar } from "date-fns/esm/locale";
import { enUS } from "date-fns/locale";
import { useEffect, useRef, useState } from "react";
import { DateRangePicker, createStaticRanges } from "react-date-range";
import { useSelector } from "react-redux";
import { Button, Popover, TextField } from "../muiComponents";
import StaticDateRanges from "./staticDateRange";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function DateRange(props) {
  const outSideClickRef = useRef(null);
  const { appDateFormat, isRTL } = useSelector(
    (state) => state.settingsReducer.settings
  );
  const [selectedRange, setRange] = useState({
    startDate: props.dateRange?.startDate || new Date(),
    endDate: props.dateRange?.endDate || new Date(),
    key: "selection",
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const getSelectedDateTextValue = () => {
    const startDateText = Date.displayDate(
      selectedRange.startDate,
      appDateFormat
    );
    const endDateText = Date.displayDate(selectedRange.endDate, appDateFormat);

    let textArr = [];
    if (startDateText) textArr.push(startDateText);
    if (endDateText) textArr.push(endDateText);
    return textArr.join(" - ");
  };

  useEffect(() => {
    if (!props.dateRange) return;
    if (
      props.dateRange.startDate === selectedRange.startDate &&
      props.dateRange.endDate === selectedRange.endDate
    )
      return;

    setRange((prev) => ({
      ...prev,
      startDate: props.dateRange.startDate,
      endDate: props.dateRange.endDate,
    }));
  }, [props.dateRange]);

  return (
    <div className="date-range d-flex align-center" ref={outSideClickRef}>
      <TextField
        variant="standard"
        value={getSelectedDateTextValue()}
        onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <IoCalendarClearOutline
              onClick={(e) => setAnchorEl(open ? null : e.currentTarget)}
            />
          ),
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      >
        <DateRangePicker
          locale={isRTL ? ar : enUS}
          weekStartsOn={1}
          onChange={(item) => {
            setRange(item.selection);
            props.handleDateRangeChange({
              ...item.selection,
            });
          }}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={[selectedRange]}
          direction="horizontal"
          staticRanges={createStaticRanges(StaticDateRanges())}
          inputRanges={[]}
        />
        {props.handleSearch && (
          <Button
            size="small"
            variant="text"
            className="medium-btn secondary searchbtn"
            endIcon={<SearchIcon />}
            onClick={() => {
              props.handleSearch();
              setAnchorEl(null);
            }}
          >
            {Object.translate("LABEL.SEARCH")}
          </Button>
        )}
      </Popover>
    </div>
  );
}
