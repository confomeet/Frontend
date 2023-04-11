import DateTimePickerField from "components/dateTimePicker";
import { Box } from "components/muiComponents";
import StandardSelectDropdown from "components/select/StandardSelectDropdown";
import { useEffect, useState } from "react";
import { getDaysRankingList, getReccuringDays, getRepeatList } from "utils";
import TextFeildGeneral from "videoComponents/textFeildGeneral/TextFeildGeneral";
import { eventsStyles } from "./style";

const maxIntervalDays = 25;
const maxIntervalWeeks = 5;
const maxIntervalMonths = 12;

const ReccurinDaysForm = (props) => {
  const classes = eventsStyles();

  return (
    <Box className={classes.daysBox}>
      <Box className={classes.repeatByAny}>
        <TextFeildGeneral
          label={Object.translate("RRule.REPEAT_EVERY_X_DAYS")}
          type="number"
          value={props.interval}
          onChange={props.handleIntervalChange}
        />
      </Box>

      <Box className={classes.untilBox}>
        <DateTimePickerField
          dateLabel={Object.translate("RRule.UNTIL")}
          name="untilDate"
          variant="standard"
          value={props.untilDate}
          onChange={props.handleUntilDateChage}
          showTime={true}
        />
      </Box>
    </Box>
  );
};

const ReccurinWeeksForm = (props) => {
  const classes = eventsStyles();

  return (
    <>
      <Box className={classes.weeksBox}>
        <Box className={classes.repeatByAny}>
          <TextFeildGeneral
            label={Object.translate("RRule.REPEAT_EVERY_X_WEEKS")}
            variant="standard"
            type="number"
            InputProps={{
              disableUnderline: true,
            }}
            value={props.interval}
            onChange={props.handleIntervalChange}
            fullWidth
          />
        </Box>
        <Box className={classes.untilBox}>
          <DateTimePickerField
            dateLabel={Object.translate("RRule.UNTIL")}
            name="untilDate"
            variant="standard"
            value={props.untilDate}
            onChange={props.handleUntilDateChage}
            showTime={true}
          />
        </Box>
      </Box>
      <Box className={classes.repeatByAny}>
        <Box>
          <StandardSelectDropdown
            title={Object.translate("RRule.REPEAT_EVERY_X_DAYS")}
            disableChipAvatar={true}
            multiple={true}
            defaultValue={props.reccuringDays || []}
            items={getReccuringDays()}
            onChange={(list) => props.handleReccuringDays(list)}
          />
        </Box>
      </Box>
    </>
  );
};

const ReccurinMonthsForm = (props) => {
  const classes = eventsStyles();

  return (
    <>
      <Box className={classes.monthBox}>
        <Box className={classes.repeatByAny}>
          <TextFeildGeneral
            label={Object.translate("RRule.REPEAT_EVERY_X_MONTHS")}
            type="number"
            value={props.interval}
            onChange={props.handleIntervalChange}
          />
        </Box>
        <Box className={classes.untilBox}>
          <DateTimePickerField
            dateLabel={Object.translate("RRule.UNTIL")}
            name="untilDate"
            value={props.untilDate}
            onChange={props.handleUntilDateChage}
            showTime={true}
          />
        </Box>
      </Box>
      <Box className={classes.repeatByAny}>
        <Box>
          <StandardSelectDropdown
            title={Object.translate("RRule.REPEAT_EVERY_X_DAYS")}
            defaultValue={props.reccuringDays[0]?.id || []}
            items={getReccuringDays()}
            onChange={(obj) => props.handleReccuringDays([obj])}
          />
        </Box>
      </Box>
      <Box>
        <Box>
          <StandardSelectDropdown
            title={Object.translate("RRule.RANK")}
            disableChipAvatar={true}
            multiple={true}
            defaultValue={props.selectedDaysRanking || []}
            items={getDaysRankingList()}
            onChange={(list) => props.handleDaysRankingChange(list)}
          />
        </Box>
      </Box>
    </>
  );
};

const RecurringEvents = ({ rRule = null, handleRRuleChange = () => null }) => {
  const classes = eventsStyles();

  const [repeat, setRepeat] = useState(getRepeatList()[0]);
  const [interval, setInterval] = useState(1);
  const [untilDate, setUntilDate] = useState(new Date());
  const [reccuringDays, setReccuringDays] = useState([]);
  const [selectedDaysRanking, setSelectedDaysRanking] = useState([
    getDaysRankingList()[0],
  ]);

  const handleIntervalChange = (ev) => {
    let value = Number(ev.target.value);
    checkIntervalValue(value);
  };

  const handleDaysRankingChange = (rankList) =>
    setSelectedDaysRanking(rankList);

  const checkIntervalValue = (value) => {
    if (!value || isNaN(value) || value < 1) {
      setInterval(1);
      return 1;
    }
    let newValue;
    switch (repeat.freq) {
      case Date.Reccuringdata.DAILY:
        newValue = value > maxIntervalDays ? maxIntervalDays : value;
        break;
      case Date.Reccuringdata.WEEKLY:
        newValue = value > maxIntervalWeeks ? maxIntervalWeeks : value;
        break;
      case Date.Reccuringdata.MONTHLY:
        newValue = value > maxIntervalMonths ? maxIntervalMonths : value;
        break;
      case Date.Reccuringdata.YEARLY:
        newValue = value;
        break;
      default:
        newValue = 1;
        break;
    }

    setInterval(newValue);
    return newValue;
  };

  const handleUntilDateChage = (date) => {
    setUntilDate(date);
  };

  const handleReccuringDays = (list) => {
    if (!list.length) return;
    setReccuringDays(list);
  };
  const renderReccuringForm = () => {
    const formProps = {
      interval,
      handleIntervalChange,
      untilDate,
      handleUntilDateChage,
      reccuringDays,
      handleReccuringDays,
      selectedDaysRanking,
      handleDaysRankingChange,
    };
    switch (repeat.freq) {
      case Date.Reccuringdata.DAILY:
        return <ReccurinDaysForm {...formProps} />;

      case Date.Reccuringdata.WEEKLY:
        return <ReccurinWeeksForm {...formProps} />;

      case Date.Reccuringdata.MONTHLY:
        return <ReccurinMonthsForm {...formProps} />;
      default:
        return null;
    }
  };
  useEffect(() => {
    const newInterval = checkIntervalValue(interval);
    let rule = rRule;
    if (!rRule) rule = {};
    rule.interval = newInterval;
    rule.until = untilDate;
    if (repeat && repeat.freq) rule.freq = repeat.freq;
    else delete rule.freq;

    if (reccuringDays.length) rule.byweekday = reccuringDays.map((d) => d.day);
    else delete rule.byweekday;

    if (selectedDaysRanking.length)
      rule.bysetpos = selectedDaysRanking.map((e) => e.id);
    else delete rule.bysetpos;

    handleRRuleChange(rule);
  }, [interval, untilDate, repeat, reccuringDays, selectedDaysRanking]);

  return (
    <Box className={classes.advancedBox}>
      <Box className={classes.repeatByAny}>
        <StandardSelectDropdown
          title={Object.translate("RRule.REPEAT")}
          defaultValue={repeat.id || null}
          items={getRepeatList()}
          onChange={(obj) => {
            setRepeat(obj);
            setReccuringDays(
              obj.freq === Date.Reccuringdata.DAILY
                ? []
                : [getReccuringDays()[0]]
            );
          }}
        />
      </Box>
      {renderReccuringForm()}
    </Box>
  );
};

export default RecurringEvents;
