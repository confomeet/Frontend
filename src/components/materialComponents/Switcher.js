import { Switch, FormControlLabel } from "components/muiComponents";

const Switcher = (props) => (
  <FormControlLabel
    label={props.label}
    control={
      <Switch
        defaultChecked={props.defaultChecked}
        focusVisibleClassName=".Mui-focusVisible"
        onChange={(e, checked) =>
          props.handleSwitchChange && props.handleSwitchChange(checked)
        }
        checked={props.switchToggle}
      />
    }
    labelPlacement={props.labelPlacement || "start"}
  />
);

export default Switcher;
