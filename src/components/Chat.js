import React from "react";
import { Camera, AddFriend, ThreeDots } from "../images/Image";
import Input from "./Input";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="chatContainer">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <Camera />
          <AddFriend />
          <ThreeDots />
        </div>
      </div>
      <div className="messageContainer">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <Input />
    </div>
  );
};

export default Chat;
