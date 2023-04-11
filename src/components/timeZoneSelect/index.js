import TimezoneSelect from "react-timezone-select";
import { FormControl } from "components/muiComponents";

export default function TimeZone(props) {
  return (
    <FormControl>
      <TimezoneSelect
        value={props?.value}
        onChange={props?.onChange}
        name={props?.name}
        variant={props?.variant}
        placeholder={props?.placeholder}
        timezones={props?.timezones}
        isDisabled={props.disabled}
      />
    </FormControl>
  );
}
