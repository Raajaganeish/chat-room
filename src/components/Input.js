import React from "react";
import { Attachment, ImageIcon } from "../images/Image";

const Input = () => {
  return (
    <div className="inputContainer">
      <input type="text" placeholder="Type Something" />
      <div className="sendArea">
        <Attachment />
        <input type="file" id="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <ImageIcon />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
