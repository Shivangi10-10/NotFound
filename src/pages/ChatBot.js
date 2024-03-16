import React from "react";
import './ChatBot.css';
const ChatBot = (props) => {

 return (
    <div className="chat-bot" style={{display:(props.show)?"block":"none"}}>
        <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/35c06392-ec84-4fd8-aaec-0a9c38688667">
</iframe>
    </div>
 );
};

export default ChatBot;