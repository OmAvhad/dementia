import React from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import ChatBotInput from "../../components/chatBotInput/chatBotInput";
import ChatDisplay from "../../components/chatDisplay/chatDisplay";
import { useState } from "react";

function ChatBotPage() {
  const [chatsList, setChatsList] = useState([]);

  const pushChat = (message, type) => {
    // append to chatsList
    setChatsList(prevChatsList => [...prevChatsList, { message, type }]);
    console.log(type, chatsList)
  };

  return (
    <>
      <PageHeader title={"Chat"}/>
      <ChatDisplay chatsList={chatsList}/>
      <ChatBotInput pushChat={pushChat}/>
    </>
  );
}

export default ChatBotPage;
