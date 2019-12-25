import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      <div
        className="ui standard modal visible active"
        onClick={e => e.stopPropagation()}
      >
        <div className="header">{props.name}</div>
        <div className="content">{props.country}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
