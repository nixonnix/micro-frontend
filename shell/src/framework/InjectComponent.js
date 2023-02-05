import React, { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom";
import { Drawer, Dialog } from "@material-ui/core";
import { loadComponent } from "./utils/loadComponent";
import Widget from "./Widget";
import ComponentError from '../ErrorBoundary/ComponentError';

const ModalFrame = ({ children, open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {children}
    </Dialog>
  );
};
const DrawerFrame = ({ open, children, onClose }) => {
  // return <div style={{'border': '1px solid red'}}>{children}</div>
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      {children}
    </Drawer>
  );
};
const InterstitialFrame = ({ children, open, onClose }) => {
  const onBtnClick = (event) => {
    console.log("btn clicked", event);
    event.stopPropagation();
    onClose();
  };
  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      //   variant="permanent"
    >
      <div style={{ width: "100vw", height: "100vh" }}>
        <div
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            right: 0,
          }}
          onClick={onBtnClick}
        >
          X
        </div>
        <div>{children}</div>
      </div>
    </Drawer>
  );
};
const InlineFrame = ({ children }) => {
  return <div style={{ border: "1px solid yellow" }}>{children}</div>;
};
const VariableComponent = (props) => {
  const [details, setDetails] = useState({context: '',as: 'modal', el: "injectRoot"});
  const [open, setOpen] = useState(false);
  const bc = useMemo(() => {
    return new BroadcastChannel("load_components");
  }, []);
  
  const { height } = props;

  bc.onmessage = (event) => {
    setDetails({ context: event.data.context || "error", type: "component", as:  event.data?.as || "modal", el: event.data?.el || "injectRoot"});
    setOpen(true);
  };

  if (!details.context) {
    return "";
  }

  const onClose = () => {
    console.log("on close called!!");
    setOpen(false);
  };

  let FrameComponent = null;
  switch (details.as) {
    case "modal":
      FrameComponent = ModalFrame;
      break;
    case "drawer":
      FrameComponent = DrawerFrame;
      break;
    case "interstitial":
      FrameComponent = InterstitialFrame;
      break;
    case "inline":
      FrameComponent = InlineFrame;
      break;
    default:
      return ({ children }) => <>{children}</>;
  }

  const Component = React.lazy(loadComponent(details));
  return ReactDOM.createPortal(
    <div
      style={{
        position: details.as === "inline"?'static': "static",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: details.as === "interstitial" && open ? "1202" : "auto",
      }}
    >
      <FrameComponent open={open} onClose={onClose}>
        <Widget
          height={height || "auto"}
          initialStyles={{ minWidth: "25vw", height: details.as === "inline"?'auto':"100vh" }}
        >
          <ComponentError>
            <Component />
          </ComponentError>
        </Widget>
      </FrameComponent>
    </div>,
    document.getElementById(details.el) || document.getElementById("injectRoot")
  );
  //   return <div></div>;
};

export default VariableComponent;
