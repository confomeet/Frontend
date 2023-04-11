import { CleaningServices } from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LaunchIcon from "@mui/icons-material/Launch";
import LoopIcon from "@mui/icons-material/Loop";
import PieChartIcon from "@mui/icons-material/PieChart";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import TableChartIcon from "@mui/icons-material/TableChart";
import TranslateOutlinedIcon from "@mui/icons-material/TranslateOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button, Tooltip } from "components/muiComponents";

import { push } from "connected-react-router";
import React from "react";
import { RiFileExcel2Line } from "react-icons/ri";
import swal from "sweetalert2";
import { postData } from "../../redux/network/api";
import store from "../../redux/store";
import { useStyles, useStylesBootstrap } from "./actionButtonsStyle";
import { useNavigate } from "react-router";

function BootstrapTooltip(props) {
  const classes = useStylesBootstrap();
  return <Tooltip arrow classes={classes} {...props} />;
}
export default function IconLabelButtons(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const permissions = props.permissions
    ? props.permissions
    : {
        add: 1,
        editAny: 1,
        editOwn: 1,
        deleteOwn: 1,
        deleteAny: 1,
        approve: 1,
        publish: 1,
        publishAfterApprove: 1,
        accessAdministrationInterface: 1,
        view: 1,
      };

  const Add_url = props.Add_url ? props.Add_url : "#";
  const Add_Elements_url = props.Add_Elements_url
    ? props.Add_Elements_url
    : "#";
  const AddLink_url = props.AddLink_url ? props.AddLink_url : "#";
  const Edit_url = props.Edit_url ? props.Edit_url : "#";
  const View_url = props.View_url ? props.View_url : "#";
  const Translate_url = props.Translate_url ? props.Translate_url : "#";
  const Setting_url = props.Setting_url ? props.Setting_url : "#";
  const ids = props.ids ? props.ids : [];
  const Delete_endPoint = props.Delete_endPoint ? props.Delete_endPoint : "";
  const Block_endPoint = props.Block_endPoint ? props.Block_endPoint : "";
  const UnBlock_endPoint = props.UnBlock_endPoint ? props.UnBlock_endPoint : "";
  const Archive_endPoint = props.Archive_endPoint ? props.Archive_endPoint : "";
  const Unarchive_endPoint = props.Unarchive_endPoint
    ? props.Unarchive_endPoint
    : "";
  const Publish_endPoint = props.Publish_endPoint ? props.Publish_endPoint : "";
  const UnPublish_endPoint = props.UnPublish_endPoint
    ? props.UnPublish_endPoint
    : "";

  const Export_url = props.Export_url ? props.Export_url : "#";
  const Analytics_url = props.Analytics_url ? props.Analytics_url : "#";
  const Results_url = props.Results_url ? props.Results_url : "#";
  const Update_url = props.Update_url ? props.Update_url : "#";
  const Calendar_url = props.Calendar_url ? props.Calendar_url : "#";

  const btn_Add = props.btn_Add;
  const btn_Add_Elements = props.btn_Add_Elements;
  const btn_AddLink = props.btn_AddLink;
  const btn_Edit = props.btn_Edit;
  const btn_Publish = props.btn_Publish;
  const btn_Unpublish = props.btn_Unpublish;
  const btn_Archive = props.btn_Archive;
  const btn_Unarchive = props.btn_Unarchive;
  const btn_Delete = props.btn_Delete;
  const btn_Block = props.btn_Block;
  const btn_UnBlock = props.btn_UnBlock;
  const btn_Translate = props.btn_Translate;
  const btn_View = props.btn_View;
  const btn_Calendar = props.btn_Calendar;
  const text_Add = props.text_Add ? props.text_Add : "New";
  const text_Add_Elements = props.text_Add_Elements
    ? props.text_Add_Elements
    : "Add Elements";
  const text_Add2 = props.text_Add2 ? props.text_Add2 : "add link";
  const btn_Setting = props.btn_Setting;

  const btn_Export = props.btn_Export;
  const btn_Analytics = props.btn_Analytics;
  const btn_Excel = props.btn_Excel;
  const btn_Results = props.btn_Results;
  const btn_Update = props.btn_Update;
  const text_Calendar = props.text_Calendar
    ? props.text_Calendar
    : "Reservations";
  const API = (index) => {
    let endPoint = "";
    switch (index) {
      case 1:
        endPoint = Delete_endPoint;
        break; //1 for Delete
      case 2:
        endPoint = Archive_endPoint;
        break; //2 for Archive
      case 3:
        endPoint = Publish_endPoint;
        break; //3 for Publish
      case 4:
        endPoint = UnPublish_endPoint;
        break; //4 for UnPublish
      case 5:
        endPoint = Unarchive_endPoint;
        break; //5 for Unarchive

      case 6:
        endPoint = Block_endPoint;
        break; //5 for Block

      case 7:
        endPoint = UnBlock_endPoint;
        break; //5 for Block
    }
    const options = {
      headers: {
        token: localStorage.getItem("JWT"),
      },
    };
    swal
      .fire({
        title: Object.translate("WARNING.SURE"),
        showCancelButton: true,
        confirmButtonColor: "rgb(112, 148, 168)",
        cancelButtonColor: "rgb(112, 148, 168)",
        cancelButtonText: "No",
        confirmButtonText: "Yes",
      })
      .then((result) => {
        if (result.value) {
          postData(`/api/${endPoint}`, ids, { ...options }).then((res) => {
            swal
              .fire({
                position: "center",
                icon: "success",
                title: Object.translate("WARNING.SUCCESS"),
                showConfirmButton: false,
                timer: 1500,
              })
              .then((result) => {
                window.location.reload();
              });
          });
        }
      });
  };
  return (
    <div className={classes.buttonGroup}>
      {btn_Add && permissions.add ? (
        <Button
          variant="contained"
          color="primary"
          className={[classes.button, classes.contained]}
          startIcon={<AddCircleIcon />}
          onClick={() => {
            window.navigateTo(Add_url);
          }}
        >
          {text_Add}
        </Button>
      ) : (
        ""
      )}
      {btn_Add_Elements ? (
        <BootstrapTooltip title={text_Add_Elements}>
          <Button
            variant="contained"
            color="primary"
            className={[classes.button, classes.contained]}
            startIcon={<AddCircleIcon />}
            onClick={() => {
              store.dispatch(push(Add_Elements_url));
            }}
          >
            {text_Add_Elements}
          </Button>
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_AddLink ? (
        <BootstrapTooltip title={text_Add2}>
          <Button
            variant="contained"
            color="primary"
            className={[classes.button, classes.contained]}
            startIcon={<AddCircleIcon />}
            onClick={() => {
              store.dispatch(push(AddLink_url));
            }}
          >
            {text_Add2}
          </Button>
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_View ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.VIEW")}>
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<VisibilityIcon className={classes.icons} />}
            onClick={() => {
              store.dispatch(push(View_url));
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}

      {btn_Edit && permissions["editAny"] ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.EDIT")}>
          <Button
            variant="outlined"
            color="primary"
            className={[classes.button, classes.outlined]}
            startIcon={<EditIcon className={classes.icons} />}
            onClick={() => {
              // store.dispatch(push(Edit_url));
              navigate(Edit_url);
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Export ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.EXPORT")}>
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<LaunchIcon className={classes.icons} />}
            onClick={() => {
              store.dispatch(push(Export_url));
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Excel ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.EXCEL")}>
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<RiFileExcel2Line className={classes.icons} />}
            onClick={props.handleExcel}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}

      {btn_Publish && permissions["publish"] ? (
        <BootstrapTooltip title="Publish">
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<CloudDoneIcon className={classes.icons} />}
            onClick={() => {
              API(3);
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Unpublish ? (
        <BootstrapTooltip title="UnPublish">
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<CloudOffIcon className={classes.icons} />}
            onClick={() => {
              API(4);
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Delete && permissions["deleteAny"] ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.TRASH")}>
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<DeleteIcon className={classes.icons} />}
            onClick={props.onDelete}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Block ? (
        <BootstrapTooltip title="Block">
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<BlockOutlinedIcon />}
            onClick={() => {
              API(6);
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}

      {btn_UnBlock ? (
        <BootstrapTooltip title="Unblock">
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<CheckCircleOutlineOutlinedIcon />}
            onClick={() => {
              API(7);
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}

      {btn_Archive ? (
        <BootstrapTooltip title="Archive">
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<ArchiveOutlinedIcon />}
            onClick={() => {
              API(2);
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Unarchive ? (
        <BootstrapTooltip title="Unarchive">
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<UnarchiveOutlinedIcon />}
            onClick={() => {
              API(5);
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}

      {btn_Translate ? (
        <BootstrapTooltip title="Translate">
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            // startIcon={<SettingsOutlinedIcon />}
            onClick={() => {
              store.dispatch(push(Translate_url));
            }}
            startIcon={<TranslateOutlinedIcon />}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Setting ? (
        <BootstrapTooltip title="Setting">
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            onClick={() => {
              window.open(Setting_url, "_blank");
            }}
            startIcon={<SettingsOutlinedIcon />}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}

      {btn_Analytics ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.ANALYTICS")}>
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<PieChartIcon className={classes.icons} />}
            onClick={() => {
              store.dispatch(push(Analytics_url));
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Results ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.RESULTS")}>
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<TableChartIcon className={classes.icons} />}
            onClick={() => {
              store.dispatch(push(Results_url));
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Update ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.UPDATE")}>
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<LoopIcon className={classes.icons} />}
            onClick={() => {
              store.dispatch(push(Update_url));
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
      {btn_Calendar ? (
        <BootstrapTooltip title={Object.translate("BUTTONS.CALENDAR")}>
          <Button
            variant="outlined"
            color="default"
            className={[classes.button, classes.outlined]}
            startIcon={<DateRangeIcon className={classes.icons} />}
            onClick={() => {
              store.dispatch(push(Calendar_url));
            }}
          />
        </BootstrapTooltip>
      ) : (
        ""
      )}
    </div>
  );
}
