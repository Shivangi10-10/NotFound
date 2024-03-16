import React, { useState } from "react";
import ChatBot from "./ChatBot";
import { BsFillChatFill } from "react-icons/bs";
import "./Button.css";

const Button = () => {
 const [showChatBot, setShowChatBot] = useState(false);

 const display = () => {
    (showChatBot)?setShowChatBot(false):setShowChatBot(true);
 };

 return (
    <>
      <button className="fab-container" onClick={display}>
        <BsFillChatFill size={20} />
      </button>
      <ChatBot show={showChatBot}/>
    </>
 );
};

export default Button;