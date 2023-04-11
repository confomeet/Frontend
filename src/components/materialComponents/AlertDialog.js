// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import useStyles from "../../styles/pagesStyles/alertStyle";
// import {
//   TypographyMui as Typography,
//   ButtonMui as Button,
//   BoxMui as Box,
//   GridMui as Grid,
// } from "./Material";

// import { Dialog, Slide, DialogContent } from "@mui/material";
// import clsx from "clsx";
// import { store } from "../../redux/store";
// // import HTMLparser from "html-react-parser";
// import actions from "redux/actions/groups/alert";
// const { clearAlertObject, setAlertObject } = actions;

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export const dispatchSetAlertObject = async (data, getNotes) => {
//   store.dispatch(setAlertObject({ data }));
//   const waitForResponse = async () => {
//     let state = store.getState();
//     if (state.alert.Response !== null) {
//       return { ...state.alert.Response };
//     } else {
//       await new Promise((resolve) => setTimeout(resolve, 777));
//       return waitForResponse();
//     }
//   };
//   let res = await waitForResponse();
//   if (getNotes) {
//     await getNotes(res.response, res.notes);
//   }
//   return res.response;
// };
// export default function AlertDialog() {
//   const { alert } = useSelector((state) => state);
//   const classes = useStyles();
//   const [alertNotes, setAlertNotes] = useState("");
//   const icones = {
//     warning: "/images/Footer/warning.png",
//     success: "/images/Footer/success.png",
//     error: "/images/Footer/error.png",
//     question:
//       localStorage.getItem("lang") === "ar"
//         ? "/images/Footer/question.png"
//         : "/images/Footer/question.png",
//   };

//   const dispatch = useDispatch();

//   let {
//     hasCancelBtn,
//     open,
//     icon,
//     title,
//     content,
//     onConfirmBtnChange,
//     confirmBtnName,
//     confirmBtn,
//     onCancelBtnChange,
//     cancelBtnName,
//     hasNotes,
//   } = alert.AlertObject;

//   const handleClose = (btnType) => {
//     switch (btnType) {
//       case 0:
//         onCancelBtnChange && onCancelBtnChange();
//         dispatch(clearAlertObject({ data: { response: false, notes: "" } }));
//         break;
//       case 1:
//         onConfirmBtnChange && onConfirmBtnChange();
//         dispatch(
//           clearAlertObject({ data: { response: true, notes: alertNotes } })
//         );
//         break;
//       default:
//         break;
//     }
//   };
//   useEffect(() => {
//     (async () => {})();
//   }, [alert]);
//   return (
//     <Box className={classes.AlertBox}>
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         aria-labelledby="alert-dialog-slide-title"
//         aria-describedby="alert-dialog-slide-description"
//         className={clsx(classes.dialogContent)}
//       >
//         <DialogContent>
//           <Box className={classes.DialogContentBox}>
//             <Box width="150px">
//               <img src={icones[icon]} />
//             </Box>
//             <Box>
//               <Typography className={classes.Alertitle}>
//                 {/* {typeof title === "string" ? HTMLparser(title) : title} */}
//               </Typography>
//             </Box>
//             {content && (
//               <Grid>
//                 <Box className={classes.AlertextBox}>
//                   <Typography className={classes.Alertext}>
//                     {/* {typeof content === "string"
//                       ? HTMLparser(content)
//                       : content} */}
//                   </Typography>
//                 </Box>
//               </Grid>
//             )}
//             <Box className={classes.AlertAgree}>
//
//               {hasCancelBtn && (
//                 <Button
//                   variant="contained"
//                   onClick={() => {
//                     handleClose(0);
//                   }}
//                   color="#ffffff"
//                 >
//                   {cancelBtnName || "Alert.no"}
//                 </Button>
//               )}
//               {confirmBtn ? (
//                 confirmBtn({ onClick: () => handleClose(1) })
//               ) : (
//                 <Button
//                   variant="contained"
//                   autoFocus
//                   onClick={() => {
//                     handleClose(1);
//                   }}
//                   color="#ffffff"
//                 >
//                   {confirmBtnName || (hasCancelBtn ? "Alert.yes" : "Alert.ok")}
//                 </Button>
//               )}
//             </Box>
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// }
