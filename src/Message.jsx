import React from "react";
import "./Message.css"

export const Message = (props) => {
  return (
    <div className="Message">
      <h3 className="Message_text">{props.text} told me</h3>
    </div>
  );
};
