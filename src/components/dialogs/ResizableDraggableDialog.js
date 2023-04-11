import React, { useState } from "react";

import { Resizable } from "re-resizable";
import Draggable from "react-draggable";

import {
  IconButton,
  Button,
  Box,
  DialogContent,
  DialogTitle,
  Paper,
} from "components/muiComponents";
import {
  CloseIcon,
  Minimize,
  Maximize,
  Fullscreen,
  OpenNewWindowIcon,
  RiDragMove2Fill,
} from "../icons";
import { dialogStyle } from "./style";
import { useWindowSize } from "hooks";

import clsx from "clsx";

const SCREEN_SIZE = {
  MAX: 1,
  MIN: 2,
  FULL_SCREEN: 3,
};

const getEventHandler = (func) => ({
  onClick: func,
  onTouchStart: func,
});
const PaperComponent = ({ children, ...props }) => (
  <Draggable
    bounds="parent"
    handle="#draggable-dialog-title"
    cancel={'[class*="MuiDialogContent-root"]'}
    position={
      props.screenSize === SCREEN_SIZE.FULL_SCREEN ? { x: 0, y: 0 } : null
    }
  >
    <Paper {...props}> {children}</Paper>
  </Draggable>
);

const ResizableDraggableDialog = ({
  children,
  open,
  setOpen,
  handleOpenNewWindow,
}) => {
  const classes = dialogStyle();

  const [screenSize, setScreenSize] = useState(SCREEN_SIZE.MAX);

  const [size, setSize] = useState({
    height: `${window.innerWidth < 600 ? "100" : "75"}vh`,
    width: `${window.innerWidth < 600 ? "100" : "75"}vw`,
  });

  useWindowSize(() => {
    if (window.innerWidth < 600) {
      setSize({
        height: "100vh",
        width: "100vw",
      });
      return;
    }

    if (window.innerWidth >= 600) {
      setSize({
        height: "75vh",
        width: "75vw",
      });
    }
  });
  const Header = () => {
    return (
      <div className="d-flex" style={{ background: "#FFF" }}>
        <div
          style={{ cursor: "move", flex: "auto", margin: "15px 0 0 23px" }}
          id="draggable-dialog-title"
        >
          <RiDragMove2Fill />
        </div>
        <div className="icons d-flex">
          <div>
            <IconButton
              {...getEventHandler(() => {
                setOpen(false);
              })}
            >
              <CloseIcon />
            </IconButton>
          </div>

          {screenSize !== SCREEN_SIZE.MAX && (
            <IconButton
              {...getEventHandler(() => {
                setSize({ width: "75vw", height: "75vh" });
                setScreenSize(SCREEN_SIZE.MAX);
              })}
            >
              <Maximize />
            </IconButton>
          )}
          {screenSize !== SCREEN_SIZE.MIN && (
            <IconButton
              {...getEventHandler(() => {
                setSize({ width: "30vw", height: "99vh" });
                setScreenSize(SCREEN_SIZE.MIN);
              })}
            >
              <Minimize />
            </IconButton>
          )}
          {screenSize !== SCREEN_SIZE.FULL_SCREEN && (
            <IconButton
              {...getEventHandler(() => {
                setSize({ width: "100vw", height: "100vh" });
                setScreenSize(SCREEN_SIZE.FULL_SCREEN);
              })}
            >
              <Fullscreen />
            </IconButton>
          )}

          {handleOpenNewWindow && (
            <IconButton {...getEventHandler(() => handleOpenNewWindow())}>
              <OpenNewWindowIcon />
            </IconButton>
          )}
        </div>
      </div>
    );
  };

  const getNewSize = async (d) => {
    let { innerWidth, innerHeight } = window;
    innerWidth = d.width / innerWidth;
    innerHeight = d.height / innerHeight;
    return {
      width: `${Number(size.width.replace("vw", "")) + innerWidth}vw`,
      height: `${Number(size.height.replace("vh", "")) + innerHeight}vh`,
    };
  };
  return (
    open && (
      <PaperComponent
        className={clsx(classes.paper, {})}
        screenSize={screenSize}
      >
        <DialogTitle id="draggable-dialog-title">
          <Header />
        </DialogTitle>
        <Resizable
          size={size}
          onResizeStop={(e, direction, ref, d) => {
            setSize(getNewSize(d));
          }}
        >
          <DialogContent>{children}</DialogContent>
        </Resizable>
      </PaperComponent>
    )
  );
};

export default ResizableDraggableDialog;
