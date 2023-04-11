import { getDateRanges } from "utils";

const dateRanges = getDateRanges();
const StaticDateRanges = () => [
  {
    label: Object.translate("DATE_RANGES.YESTERDAY"),
    range: () => dateRanges.yesterday,
  },
  {
    label: Object.translate("DATE_RANGES.TODAY"),
    range: () => dateRanges.today,
  },
  {
    label: Object.translate("DATE_RANGES.TOMORROW"),
    range: () => dateRanges.tomorrow,
  },
  {
    label: Object.translate("DATE_RANGES.LAST_WEEK"),
    range: () => dateRanges.lastWeek,
  },
  {
    label: Object.translate("DATE_RANGES.THIS_WEEK"),
    range: () => dateRanges.thisWeek,
  },
  {
    label: Object.translate("DATE_RANGES.NEXT_WEEK"),
    range: () => dateRanges.nextWeek,
  },
  {
    label: Object.translate("DATE_RANGES.LAST_MONTH"),
    range: () => dateRanges.lastMonth,
  },
  {
    label: Object.translate("DATE_RANGES.THIS_MONTH"),
    range: () => dateRanges.thisMonth,
  },
  {
    label: Object.translate("DATE_RANGES.NEXT_MONTH"),
    range: () => dateRanges.nextMonth,
  },
];

export default StaticDateRanges;
