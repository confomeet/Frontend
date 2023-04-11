import { Button } from "components/muiComponents";
import FormikTranslation from "components/translations/FormikTranslation";
export default function NewEventTypeForm(props) {
  return (
    <>
      <FormikTranslation title={Object.translate("LABEL.TITLE")} />
      <Button
        variant="contained"
        className="medium-btn "
        disableElevation
        onClick={props.onClick}
      >
        {Object.translate("BUTTONS.SAVE")}
      </Button>
    </>
  );
}
