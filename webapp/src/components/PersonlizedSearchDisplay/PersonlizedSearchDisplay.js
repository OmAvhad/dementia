import React, { useState } from "react";
import "./PersonlizedSearchDisplay.css";
import Rag from "../rag/RAG"

const dummy = [
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
  { message: "Hii, How are you?", type: "sender" },
  { message: "Hello, I am fine!", type: "receiver" },
];

function PersonlizedSearchDisplay({chatsList}) {
  return (
    <div className="max-h-[83vh] overflow-y-scroll w-full px-4" id="chat-container">
      {chatsList.map((value) => {
        return (
          <div
            className={`flex ${
              value.type === "sender" ? "justify-end" : "justify-start"
            }`}
          >
            <div className={`chat-box ${value.type}`}>
              { value.type === "sender" ? (<p>{value.message}</p>) : (<Rag message={value.message}/>)}
              {/* <span class="status">Delivered</span> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PersonlizedSearchDisplay;
