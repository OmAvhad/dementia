import React, { useEffect } from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import PersonlizedSearchInput from "../../components/personlizedSearchInput/personlizedSearchInput";
import PersonlizedSearchDisplay from "../../components/PersonlizedSearchDisplay/PersonlizedSearchDisplay";
import { useState } from "react";

function PersonlizedSearch() {
    const [chatsList, setChatsList] = useState([]);

  const pushChat = (message, type) => {
    // append to chatsList
    setChatsList(prevChatsList => [...prevChatsList, { message, type }]);
    console.log(type, chatsList)
  };

  useEffect(()=>{
    var objDiv = document.getElementById("chat-container");
    if(objDiv)
      objDiv.scrollTop = objDiv.scrollHeight
  }, [chatsList])

  return (
    <>
      <PageHeader title={"Personalized Chat"}/>
      <PersonlizedSearchDisplay chatsList={chatsList}/>
      <PersonlizedSearchInput pushChat={pushChat}/>
    </>
  );
}

export default PersonlizedSearch;