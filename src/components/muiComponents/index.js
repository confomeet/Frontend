import React from "react";
import {
  Paper,
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  Box,
  TextField,
  Popover,
  Pagination,
  Modal,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText,
  Autocomplete,
  Chip,
  Switch,
  FormControlLabel,
  Avatar,
  Slide,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  AppBar,
  Toolbar,
  Grid,
  InputLabel,
  Divider,
  Snackbar,
  Container,
  SnackbarContent,
  AvatarGroup,
  Badge,
  Drawer,
  Fab,
  Tooltip,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
  SpeedDial,
  SpeedDialAction,
  Menu,
  MenuItem,
  FormControl,
  Select,
  CssBaseline,
  Collapse,
  TextareaAutosize,
  OutlinedInput,
  InputAdornment,
  Hidden,
  Radio,
  RadioGroup,
  FormLabel,
  FormGroup,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";

import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";

import MuiAlert from "@mui/material/Alert";

const _CssBaseline = (props) => <CssBaseline {...props} />;

const _Collapse = (props) => <Collapse {...props} />;

const _MuiDrawer = (props) => <MuiDrawer {...props} />;

const _Paper = (props) => <Paper {...props} />;

const _Badge = (props) => <Badge {...props} />;

const _AvatarGroup = (props) => <AvatarGroup {...props} />;

const _Container = (props) => <Container {...props} />;

const _Snackbar = ({ children, ...props }) => (
  <Snackbar {...props}>{children}</Snackbar>
);

const _Tooltip = ({ children, ...props }) => (
  <Tooltip {...props}>{children}</Tooltip>
);

const _Stack = ({ children, ...props }) => <Stack {...props}>{children}</Stack>;

const _Alert = React.forwardRef((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

const _SnackbarContent = ({ children, ...props }) => (
  <SnackbarContent {...props}>{children}</SnackbarContent>
);

const _DialogContentText = (props) => <DialogContentText {...props} />;

const _Divider = (props) => <Divider {...props} />;

const _Avatar = (props) => <Avatar {...props} />;

const _InputLabel = (props) => <InputLabel {...props} />;

const _Button = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

const _IconButton = ({ children, ...props }) => (
  <IconButton {...props}>{children}</IconButton>
);

const _Grid = (props) => <Grid {...props} />;

const _Box = (props) => <Box {...props} />;

const _FormControlLabel = (props) => <FormControlLabel {...props} />;

const _Switch = (props) => <Switch {...props} />;

const _TextField = ({ value, ...props }) => (
  <TextField value={value || ""} {...props} />
);

const _Chip = (props) => <Chip {...props} />;

const _Autocomplete = (props) => <Autocomplete {...props} />;

const _Popover = ({ children, ...props }) => (
  <Popover {...props}>{children}</Popover>
);

const _Pagination = (props) => <Pagination {...props} />;

const _Modal = ({ children, ...props }) => <Modal {...props}>{children}</Modal>;

const _DialogContent = (props) => <DialogContent {...props} />;

const _DialogActions = (props) => <DialogActions {...props} />;

const _DialogTitle = ({ children, ...props }) => (
  <DialogTitle {...props}>{children}</DialogTitle>
);

const _Dialog = ({ children, ...props }) => (
  <Dialog {...props}>{children}</Dialog>
);
const _Slide = ({ children, ...props }) => <Slide {...props}>{children}</Slide>;

const _Accordion = ({ children, ...props }) => (
  <Accordion {...props}>{children}</Accordion>
);

const _AccordionSummary = ({ children, ...props }) => (
  <AccordionSummary {...props}>{children}</AccordionSummary>
);

const _AccordionDetails = ({ children, ...props }) => (
  <AccordionDetails {...props}>{children}</AccordionDetails>
);

const _Typography = ({ children, ...props }) => (
  <Typography {...props}>{children}</Typography>
);

const _List = ({ children, ...props }) => <List {...props}>{children}</List>;

const _ListItem = ({ children, ...props }) => (
  <ListItem {...props}>{children}</ListItem>
);

const _ListItemButton = ({ children, ...props }) => (
  <ListItemButton {...props}>{children}</ListItemButton>
);

const _ListItemText = ({ children, ...props }) => (
  <ListItemText {...props}>{children}</ListItemText>
);

const _ListItemIcon = ({ children, ...props }) => (
  <ListItemIcon {...props}>{children}</ListItemIcon>
);

const _AppBar = ({ children, ...props }) => (
  <AppBar {...props}>{children}</AppBar>
);

const _Toolbar = ({ children, ...props }) => (
  <Toolbar {...props}>{children}</Toolbar>
);

const _ButtonGroup = ({ children, ...props }) => (
  <ButtonGroup {...props}>{children}</ButtonGroup>
);
const _Drawer = ({ children, ...props }) => (
  <Drawer {...props}>{children}</Drawer>
);
const _Fab = ({ children, ...props }) => <Fab {...props}>{children}</Fab>;

const _Card = ({ children, ...props }) => <Card {...props}>{children}</Card>;

const _CardActions = ({ children, ...props }) => (
  <CardActions {...props}>{children}</CardActions>
);
const _CardContent = ({ children, ...props }) => (
  <CardContent {...props}>{children}</CardContent>
);
const _CardHeader = ({ children, ...props }) => (
  <CardHeader {...props}>{children}</CardHeader>
);
const _Tab = ({ children, ...props }) => <Tab {...props}>{children}</Tab>;
const _Tabs = ({ children, ...props }) => <Tabs {...props}>{children}</Tabs>;
const _ToggleButton = ({ children, ...props }) => (
  <ToggleButton {...props}>{children}</ToggleButton>
);
const _ToggleButtonGroup = ({ children, ...props }) => (
  <ToggleButtonGroup {...props}>{children}</ToggleButtonGroup>
);
const _SpeedDial = ({ children, ...props }) => (
  <SpeedDial {...props}>{children}</SpeedDial>
);
const _SpeedDialAction = ({ children, ...props }) => (
  <SpeedDialAction {...props}>{children}</SpeedDialAction>
);

const _Menu = ({ children, ...props }) => <Menu {...props}>{children}</Menu>;
const _MenuItem = ({ children, ...props }) => (
  <MenuItem {...props}>{children}</MenuItem>
);
const _FormControl = ({ children, ...props }) => (
  <FormControl {...props}>{children}</FormControl>
);
const _Select = ({ children, ...props }) => (
  <Select {...props}>{children}</Select>
);

const _TextareaAutosize = (props) => <TextareaAutosize {...props} />;
const _OutlinedInput = (props) => <OutlinedInput {...props} />;
const _InputAdornment = (props) => <InputAdornment {...props} />;
const _Hidden = (props) => <Hidden {...props} />;
const _ButtonMui = (props) => {
  return (
    <Button
      onClick={props.onClick}
      color={props.color}
      className={props.className}
      variant={props.variant}
      endIcon={props.endIcon}
      startIcon={props.startIcon}
      disableElevation
      size={props.size}
    >
      {props.children}
    </Button>
  );
};

const _Radio = (props) => <Radio {...props} />;
const _RadioGroup = ({ children, ...props }) => (
  <RadioGroup {...props}>{children}</RadioGroup>
);
const _FormLabel = ({ children, ...props }) => (
  <FormLabel {...props}>{children}</FormLabel>
);
const _FormGroup = ({ children, ...props }) => (
  <FormGroup {...props}>{children}</FormGroup>
);
export {
  _Button as Button,
  _TextField as TextField,
  _Popover as Popover,
  _Pagination as Pagination,
  _Dialog as Dialog,
  _DialogTitle as DialogTitle,
  _Autocomplete as Autocomplete,
  _Chip as Chip,
  _Switch as Switch,
  _FormControlLabel as FormControlLabel,
  _Box as Box,
  _Grid as Grid,
  _Avatar as Avatar,
  _Slide as Slide,
  _DialogContent as DialogContent,
  _DialogActions as DialogActions,
  _Accordion as Accordion,
  _AccordionSummary as AccordionSummary,
  _AccordionDetails as AccordionDetails,
  _Typography as Typography,
  _IconButton as IconButton,
  _List as List,
  _ListItem as ListItem,
  _ListItemButton as ListItemButton,
  _ListItemText as ListItemText,
  _ListItemIcon as ListItemIcon,
  _AppBar as AppBar,
  _Toolbar as Toolbar,
  _ButtonGroup as ButtonGroup,
  _InputLabel as InputLabel,
  _DialogContentText as DialogContentText,
  _Divider as Divider,
  _Snackbar as Snackbar,
  _Container as Container,
  _Alert as Alert,
  _SnackbarContent as SnackbarContent,
  _Stack as Stack,
  _AvatarGroup as AvatarGroup,
  _Badge as Badge,
  _Drawer as Drawer,
  _Fab as Fab,
  _Tooltip as Tooltip,
  _Card as Card,
  _CardActions as CardActions,
  _CardContent as CardContent,
  _CardHeader as CardHeader,
  _Tab as Tab,
  _Tabs as Tabs,
  _ToggleButtonGroup as ToggleButtonGroup,
  _ToggleButton as ToggleButton,
  _Paper as Paper,
  _SpeedDial as SpeedDial,
  _SpeedDialAction as SpeedDialAction,
  _Menu as Menu,
  _MenuItem as MenuItem,
  _FormControl as FormControl,
  styled,
  tooltipClasses,
  _Select as Select,
  _MuiDrawer as MuiDrawer,
  _CssBaseline as CssBaseline,
  _Collapse as Collapse,
  _Modal as Modal,
  _TextareaAutosize as TextareaAutosize,
  _OutlinedInput as OutlinedInput,
  _ButtonMui as ButtonMui,
  _InputAdornment as InputAdornment,
  _Hidden as Hidden,
  _Radio as Radio,
  _RadioGroup as RadioGroup,
  _FormLabel as FormLabel,
  _FormGroup as FormGroup,
};
