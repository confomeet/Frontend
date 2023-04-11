import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  avatarGrid: {
    padding: "2rem",
    display: "flex",
    alignItems: "center",
    background: "#F7F9FD",
    display: "flex",
    borderRadius: "24px",
    justifyContent: "space-between",
  },

  edit: {
    "&.active": {
      border: "1px solid #ccc",
      borderColor: "#2684FF",

      padding: "0px 10px 0px 30px",
      borderRadius: "20px",
      background: "#f9f9f9",
    },
  },
  avatar: {
    width: 125,
    borderRadius: 25,
    border: "7px solid",
    textTransform: "capitalize",
    height: 125,
  },
  userName: {
    fontWeight: "600",
    lineHeight: "48px",
    fontSize: theme.globals.fontSize.s * 2,
    color: "#464255",
    "&.active": {
      border: "1px solid #ccc",
      borderColor: "#2684FF",
      padding: "1px",
      borderRadius: "20px",
      padding: "0px 10px 0px 30px",
      alignItems: "center",
    },
  },
  userCountry: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "48px",
    color: "#464255",
    "&.active": {
      border: "1px solid #ccc",
      borderColor: "#2684FF",
      padding: "1px",
      borderRadius: "20px",
      padding: "0px 10px 0px 30px",
      alignItems: "center",
      margin: "7px",
    },
  },
  active: {
    border: "1px solid #ccc",
  },
  button: {
    width: "27%",
    cursor: "pointer",
    font: "inherit",
    border: "none",
    backgroundColor: "#3B8DEE",
    color: "white",
    padding: "0.75rem 1rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "18px",
    fontWeight: "bold",
  },

  icons: {
    fontSize: theme.globals.fontSize.xs * 2 + 1,
  },

  subcard: {
    display: "flex",
    padding: "10px",
    background: "#F7F9FD",
    alignItems: "center",
    borderRadius: "24px",
    height: "70px",
    margin: "10px",
  },
  title: {
    width: "27%",
    color: "#A3A3A3",
    fontSize: theme.globals.fontSize.s - 1,
  },
  titleTimeInfo: {
    width: "15%",
    color: "#A3A3A3",
    fontSize: theme.globals.fontSize.s - 1,
  },

  icon: {
    width: "10%",
    color: "#A3A3A3",
  },
  Timeicon: {
    width: "5%",
    color: "#A3A3A3",
  },
  topmarg: {
    marginTop: "70px",
    "& .Mui-disabled": {
      border: "0!important",
    },
  },
  MainTimeSelectBox: {
    borderColor: "hsl(0, 0%, 80%)",
    "& .MuiInput-underline:before": {
      borderBottom: "none!important",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none!important",
    },
    "& .MuiInputBase-formControl": {
      border: "1px solid",
      borderColor: "#2684FF",
      background: "white",
      borderRadius: "4px",
      padding: "0px 17px 0px 20px",
      width: "100%",
    },
  },
  MainDateSelectBox: {
    "& .MuiInput-underline:before": {
      borderBottom: "none!important",
    },
    "& .MuiInput-underline:after": {
      borderBottom: "none!important",
    },
    "& .MuiInputBase-formControl": {
      border: "1px solid",
      background: "white",
      width: "100%",
      borderColor: "#2684FF",
      borderRadius: "4px",
      padding: "0px 40px 0px 25px",
    },
  },
  topFont: {
    fontWeight: "500",
    fontSize: theme.globals.fontSize.xs * 2 + 1,
    lineHeight: "36px",

    color: "#464255",
    margin: "10px",
  },
  dateform: {
    fontSize: theme.globals.fontSize.s - 1,
    width: "40%",
    color: "#464255",
  },
  "& .active": {
    border: "1px solid",
    borderRadius: "5px",
    paddingRight: "25px",
  },
  timeform: {
    fontSize: theme.globals.fontSize.s - 1,
    width: "40%",
    color: "#464255",
  },
  "& .active": {
    border: "1px solid",
    borderRadius: "5px",
    paddingRight: "25px",
  },
  clickeButton: {
    padding: "15px 40px 15px 40px",
    margin: "20px",
  },
  editsubcard: {
    display: "flex",
    padding: "10px",
    background: "#F7F9FD",
    alignItems: "center",
    borderRadius: "24px",
    height: "100px",
    margin: "10px",
  },
  editTitle: {
    width: "27%",
    color: "#A3A3A3",
    fontSize: theme.globals.fontSize.s - 1,
    padding: "0px 0px 0px 30px",
  },
}));

export default useStyles;
