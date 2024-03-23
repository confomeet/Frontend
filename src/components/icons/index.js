import React from "react";
import AttachmentIcon from "@mui/icons-material/Attachment";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SaveIcon from "@mui/icons-material/Save";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import SearchIcon from "@mui/icons-material/Search";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import GroupIcon from "@mui/icons-material/Group";
import FolderIcon from "@mui/icons-material/Folder";
import {
  Clear,
  Add,
  LocationOn,
  Notes,
  Edit,
  CalendarToday,
  Create,
  MailOutline,
  Visibility,
  VisibilityOff,
  PersonOutline,
  Menu,
  ChevronLeft,
  ChevronRight,
  Language,
  NotificationsNone,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import {
  BsEnvelope,
  BsCameraVideoFill,
  BsBookmarkStarFill,
  BsCheckAll,
  BsClipboardPlus,
  BsClipboardCheck,
  BsFlag,
  BsFlagFill,
  BsChatText,
  BsCameraVideo,
  BsArrowUpRightSquare,
  BsBell,
  BsCheck2All,
  BsGridFill,
  BsFillPlayFill,
} from "react-icons/bs";
import {
  BiMessageSquareDetail,
  BiMailSend,
  BiTimeFive,
  BiExpand,
  BiFullscreen,
  BiCalendarStar,
  BiCabinet,
} from "react-icons/bi";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

import {
  AiOutlineMinus,
  AiOutlineEdit,
  AiFillEye,
  AiOutlineFullscreenExit,
  AiOutlineArrowsAlt,
  AiOutlineInfoCircle,
  AiOutlineCheck,
  AiFillFilePdf,
  AiOutlineReload,
} from "react-icons/ai";
import {
  IoCopyOutline,
  IoLogOutOutline,
  IoLogInOutline,
  IoExitOutline,
  IoCalendar,
  IoCalendarClearOutline,
  IoCalendarClear,
  IoArrowBack,
} from "react-icons/io5";
import {
  IoMdNotificationsOutline,
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDropright,
  IoMdArrowDropleft,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import {
  FiMoreVertical,
  FiCalendar,
  FiCheck,
  FiUser,
  FiUsers,
  FiPhoneMissed,
} from "react-icons/fi";
import {
  FaRegEdit,
  FaUsers,
  FaFolderOpen,
  FaPlus,
  FaArrowRight,
} from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import {
  RiUserSettingsLine,
  RiAdminLine,
  RiAdminFill,
  RiVipCrown2Fill,
  RiCloseFill,
  RiDeleteBin5Line,
  RiDragMove2Fill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { CgMenuLeftAlt, CgMenuRightAlt } from "react-icons/cg";
import { GoGlobe } from "react-icons/go";
import { TiDelete, TiGroup, TiThMenu, TiVideo } from "react-icons/ti";
import { GiAlarmClock, GiNotebook, GiCardExchange } from "react-icons/gi";
import { ImPhoneHangUp, ImLink, ImUsers, ImStatsDots } from "react-icons/im";
import { TbListDetails } from "react-icons/tb";
import {
  MdExpandMore,
  MdOutlineEdit,
  MdNotificationsActive,
  MdSms,
  MdEventBusy,
  MdOutlineEditCalendar,
} from "react-icons/md";
import LeftArrowIcon from "./left-arrow";

const _AiOutlineFullscreenExit = (props) => (
  <AiOutlineFullscreenExit {...props} />
);

const _DocumentIcon = (props) => <AiFillFilePdf {...props} />;

const _SMSIcon = (props) => <MdSms {...props} />;

const _NoteIcon = (props) => <GiNotebook {...props} />;

const _ChangeCabinet = (props) => <GiCardExchange {...props} />;

const _CabinetIcon = (props) => <BiCabinet {...props} />;

const _OutIcon = (props) => <IoExitOutline {...props} />;

const _MultipleUsers = (props) => <GroupIcon {...props} />;

const _OpenNewWindowIcon = (props) => <BsArrowUpRightSquare {...props} />;

const _ReminderIcon = (props) => <GiAlarmClock {...props} />;

const _BiFullscreen = (props) => <BiFullscreen {...props} />;

const _BiExpand = (props) => <BiExpand {...props} />;

const _Video = (props) => <BsCameraVideo {...props} />;

const _Flag = (props) => <BsFlag {...props} />;

const _BsFlagFill = (props) => <BsFlagFill {...props} />;
const _BsFillPlayFill = (props) => <BsFillPlayFill {...props} />;
const _Clock = (props) => <BiTimeFive {...props} />;

const _CheckList = (props) => <BsClipboardCheck {...props} />;

const _Check = (props) => <FiCheck {...props} />;

const _MailSend = (props) => <BiMailSend {...props} />;

const _HiOutlinePhone = (props) => <HiOutlinePhone {...props} />;

const _HiOutlineMail = (props) => <HiOutlineMail {...props} />;

const _Description = (props) => <BiMessageSquareDetail {...props} />;

const _SubNodeIcon = (props) => <BsClipboardPlus {...props} />;

const _Participants = (props) => <FiUsers {...props} />;

const _BackICon = (props) => <IoIosArrowBack {...props} />;

const _ForwardIcon = (props) => <IoIosArrowForward {...props} />;
const _IoCalendar = (props) => <IoCalendar {...props} />;
const _View = (props) => <AiFillEye {...props} />;

const _DoubleCheckIcon = (props) => <BsCheckAll {...props} />;

const _User = (props) => <FiUser {...props} />;
const _FcStatistics = (props) => <FcStatistics {...props} />;
const _Calendar = (props) => <FiCalendar {...props} />;

const _KingIcon = (props) => <RiVipCrown2Fill {...props} />;

const _MainIcon = (props) => <BsBookmarkStarFill {...props} />;

const _Notificatios = (props) => <IoMdNotificationsOutline {...props} />;

const _RiAdminFill = (props) => <RiAdminFill {...props} />;

const _RiAdminLine = (props) => <RiAdminLine {...props} />;

const _TiDelete = (props) => <TiDelete {...props} />;

const _CameraVideoFill = (props) => <BsCameraVideoFill {...props} />;

const _PenEdit = (props) => <AiOutlineEdit {...props} />;

const _FaRegEdit = (props) => <FaRegEdit {...props} />;
const _BiCalendarStar = (props) => <BiCalendarStar {...props} />;
const _MoreVertical = (props) => <FiMoreVertical {...props} />;

const _CopyOutline = (props) => <IoCopyOutline {...props} />;

const _GlobeIcon = (props) => <GoGlobe {...props} />;

const _Minus = (props) => <AiOutlineMinus {...props} />;

const _Envelope = (props) => <BsEnvelope {...props} />;

const _HomeIcon = (props) => <HomeIcon {...props} />;

const _BusinessIcon = (props) => <BusinessIcon {...props} />;

const _PhoneIphoneIcon = (props) => <PhoneIphoneIcon {...props} />;

const _AlternateEmailIcon = (props) => <AlternateEmailIcon {...props} />;

const _SaveIcon = (props) => <SaveIcon {...props} />;

const _ManageAccountsIcon = (props) => <RiUserSettingsLine {...props} />;

const _ArrowForwardIosIcon = (props) => <ArrowForwardIosIcon {...props} />;

const _AttachmentIcon = (props) => <AttachmentIcon {...props} />;

const _InsertPhotoIcon = (props) => <InsertPhotoIcon {...props} />;

const _Menu = (props) => <Menu {...props} />;

const _CgMenuLeftAlt = (props) => <CgMenuLeftAlt {...props} />;

const _CgMenuRightAlt = (props) => <CgMenuRightAlt {...props} />;

const _ChevronLeft = (props) => <ChevronLeft {...props} />;

const _ChevronRight = (props) => <ChevronRight {...props} />;

const _Logout = (props) => <IoLogOutOutline {...props} />;

const _Login = (props) => <IoLogInOutline {...props} />;

const _Language = (props) => <Language {...props} />;

const _NotificationsNone = (props) => <NotificationsNone {...props} />;

const _ExpandMore = (props) => <ExpandMore {...props} />;

const _ExpandLess = (props) => <ExpandLess {...props} />;

const _ClearIcon = (props) => <Clear {...props} />;

const _EditIcon = (props) => <Edit {...props} />;

const _AddIcon = (props) => <Add {...props} />;
const _MdEventBusy = (props) => <MdEventBusy {...props} />;
const _MdOutlineEditCalendar = (props) => <MdOutlineEditCalendar {...props} />;

const _TbListDetails = (props) => <TbListDetails {...props} />;
const _IoArrowBack = (props) => <IoArrowBack {...props} />;
const _CloseIcon = (props) => <RiCloseFill {...props} />;
const _RiDragMove2Fill = (props) => <RiDragMove2Fill {...props} />;
const _RiDeleteBin5Line = (props) => <RiDeleteBin5Line {...props} />;
const _PeopleOutlineIcon = (props) => <PeopleOutlineIcon {...props} />;

const _CancelIcon = (props) => <CancelIcon {...props} />;

const _CheckCircleIcon = (props) => <CheckCircleIcon {...props} />;

const _LocationOnIcon = (props) => <LocationOn {...props} />;

const _NotesIcon = (props) => <Notes {...props} />;

const _CalendarTodayIcon = (props) => <CalendarToday {...props} />;

const _CreateIcon = (props) => <Create {...props} />;

const _MailOutlineIcon = (props) => <MailOutline {...props} />;

const _VisibilityIcon = (props) => <Visibility {...props} />;

const _VisibilityOffIcon = (props) => <VisibilityOff {...props} />;

const _PersonOutlineIcon = (props) => <PersonOutline {...props} />;

const _MdExpandMore = (props) => <MdExpandMore {...props} />;
const _MdNotificationsActive = (props) => <MdNotificationsActive {...props} />;

const _MdOutlineEdit = (props) => <MdOutlineEdit {...props} />;

const _BusinessCenterOutlinedIcon = (props) => (
  <BusinessCenterOutlinedIcon {...props} />
);

const _QueryBuilderOutlinedIcon = (props) => (
  <QueryBuilderOutlinedIcon {...props} />
);
const _SettingsInputComponentIcon = (props) => (
  <SettingsInputComponentIcon {...props} />
);
const _SearchIcon = (props) => <SearchIcon {...props} />;
const _AutorenewIcon = (props) => <AutorenewIcon {...props} />;

const _BsChatText = (props) => <BsChatText {...props} />;

const _TiGroup = (props) => <TiGroup {...props} />;
const _TiVideo = (props) => <TiVideo {...props} />;

const _AiOutlineArrowsAlt = (props) => <AiOutlineArrowsAlt {...props} />;
const _AiOutlineInfoCircle = (props) => <AiOutlineInfoCircle {...props} />;
const _AiOutlineCheck = (props) => <AiOutlineCheck {...props} />;

const _ImPhoneHangUp = (props) => <ImPhoneHangUp {...props} />;
const _ImLink = (props) => <ImLink {...props} />;
const _ImUsers = (props) => <ImUsers {...props} />;
const _ImStatsDots = (props) => <ImStatsDots {...props} />;
const _FiPhoneMissed = (props) => <FiPhoneMissed {...props} />;
const _OpenFolder = (props) => <FaFolderOpen {...props} />;
const _FolderIcon = (props) => <FolderIcon {...props} />;
const _MiniArrowDropright = (props) => <IoMdArrowDropright {...props} />;
const _MiniArrowDropleft = (props) => <IoMdArrowDropleft {...props} />;
const _BsCheck2All = (props) => <BsCheck2All {...props} />;
const _IoCalendarClearOutline = (props) => (
  <IoCalendarClearOutline {...props} />
);
const _IoIosInformationCircleOutline = (props) => (
  <IoIosInformationCircleOutline {...props} />
);
const _RiArrowDownSLine = (props) => <RiArrowDownSLine {...props} />;
const _TiThMenu = (props) => <TiThMenu {...props} />;
const _BsGridFill = (props) => <BsGridFill {...props} />;
const _IoCalendarClear = (props) => <IoCalendarClear {...props} />;
const _FaPlus = (props) => <FaPlus {...props} />;
const _FaArrowRight = (props) => <FaArrowRight {...props} />;
const _AiOutlineReload = (props) => <AiOutlineReload {...props} />;

export {
  _Description as Description,
  _Participants as Participants,
  _BackICon as BackICon,
  _SubNodeIcon as SubNodeIcon,
  _ArrowForwardIosIcon as ArrowForwardIosIcon,
  _Menu as Menu,
  _CgMenuLeftAlt as CgMenuLeftAlt,
  _CgMenuRightAlt as CgMenuRightAlt,
  _ChevronLeft as ChevronLeft,
  _ChevronRight as ChevronRight,
  _Logout as Logout,
  _Login as Login,
  _Language as Language,
  _NotificationsNone as NotificationsNone,
  _ExpandMore as ExpandMore,
  _ExpandLess as ExpandLess,
  _ClearIcon as ClearIcon,
  _EditIcon as EditIcon,
  _AddIcon as AddIcon,
  _BsFillPlayFill as BsFillPlayFill,
  _MdOutlineEditCalendar as MdOutlineEditCalendar,
  _MdEventBusy as MdEventBusy,
  _TbListDetails as TbListDetails,
  _IoArrowBack as IoArrowBack,
  _CloseIcon as CloseIcon,
  _RiDragMove2Fill as RiDragMove2Fill,
  _RiDeleteBin5Line as RiDeleteBin5Line,
  _PeopleOutlineIcon as PeopleOutlineIcon,
  _CancelIcon as CancelIcon,
  _CheckCircleIcon as CheckCircleIcon,
  _LocationOnIcon as LocationOnIcon,
  _NotesIcon as NotesIcon,
  _CalendarTodayIcon as CalendarTodayIcon,
  _Calendar as Calendar,
  _CreateIcon as CreateIcon,
  _MailOutlineIcon as MailOutlineIcon,
  _VisibilityIcon as VisibilityIcon,
  _VisibilityOffIcon as VisibilityOffIcon,
  _PersonOutlineIcon as PersonOutlineIcon,
  _AttachmentIcon as AttachmentIcon,
  _InsertPhotoIcon as InsertPhotoIcon,
  _ManageAccountsIcon as ManageAccountsIcon,
  _SaveIcon as SaveIcon,
  _HomeIcon as HomeIcon,
  _BusinessIcon as BusinessIcon,
  _PhoneIphoneIcon as PhoneIphoneIcon,
  _AlternateEmailIcon as AlternateEmailIcon,
  _Envelope as Envelope,
  _Minus as Minus,
  _CopyOutline as CopyOutline,
  _MoreVertical as MoreVertical,
  _FaRegEdit as FaRegEdit,
  _BiCalendarStar as BiCalendarStar,
  _PenEdit as PenEdit,
  _CameraVideoFill as CameraVideoFill,
  _GlobeIcon as GlobeIcon,
  _Notificatios as Notificatios,
  _TiDelete as TiDelete,
  _RiAdminFill as RiAdminFill,
  _RiAdminLine as RiAdminLine,
  _MdExpandMore as ExpandMoreIcon,
  _MdNotificationsActive as MdNotificationsActive,
  _MdOutlineEdit as MdOutlineEdit,
  _MainIcon as MainIcon,
  _KingIcon as KingIcon,
  _DoubleCheckIcon as DoubleCheckIcon,
  _User as User,
  _FcStatistics as FcStatistics,
  _View as View,
  _MailSend as MailSend,
  _HiOutlinePhone as HiOutlinePhone,
  _HiOutlineMail as HiOutlineMail,
  _CheckList as CheckList,
  _Check as Check,
  _Clock as Clock,
  _Flag as Flag,
  _BsFlagFill as BsFlagFill,
  _BusinessCenterOutlinedIcon as BusinessCenterOutlinedIcon,
  _QueryBuilderOutlinedIcon as QueryBuilderOutlinedIcon,
  _SettingsInputComponentIcon as SettingsInputComponentIcon,
  _BsChatText as BsChatText,
  _Video as Video,
  _ForwardIcon as ForwardIcon,
  _BiExpand as Maximize,
  _AiOutlineFullscreenExit as Minimize,
  _BiFullscreen as Fullscreen,
  _SearchIcon as SearchIcon,
  _AutorenewIcon as AutorenewIcon,
  _TiGroup as TiGroup,
  _TiVideo as TiVideo,
  _OpenNewWindowIcon as OpenNewWindowIcon,
  _AiOutlineArrowsAlt as AiOutlineArrowsAlt,
  _AiOutlineInfoCircle as AiOutlineInfoCircle,
  _AiOutlineCheck as AiOutlineCheck,
  _ReminderIcon as ReminderIcon,
  _ImPhoneHangUp as ImPhoneHangUp,
  _ImLink as ImLink,
  _ImUsers as ImUsers,
  _ImStatsDots as ImStatsDots,
  _IoCalendar as IoCalendar,
  _FiPhoneMissed as PhoneBusy,
  _MultipleUsers as MultipleUsers,
  _NoteIcon as NoteIcon,
  _OutIcon as OutIcon,
  _ChangeCabinet as ChangeCabinetIcon,
  _CabinetIcon as CabinetIcon,
  _DocumentIcon as DocumentIcon,
  _SMSIcon as SMSIcon,
  _OpenFolder as OpenFolder,
  _FolderIcon as FolderIcon,
  _MiniArrowDropright as MiniArrowDropright,
  _MiniArrowDropleft as MiniArrowDropleft,
  _BsCheck2All as BsCheck2All,
  _IoCalendarClearOutline as IoCalendarClearOutline,
  _IoIosInformationCircleOutline as IoIosInformationCircleOutline,
  _RiArrowDownSLine as RiArrowDownSLine,
  _TiThMenu as TiThMenu,
  _BsGridFill as BsGridFill,
  _IoCalendarClear as IoCalendarClear,
  _FaPlus as FaPlus,
  _FaArrowRight as FaArrowRight,
  _AiOutlineReload as AiOutlineReload,
  LeftArrowIcon
};
