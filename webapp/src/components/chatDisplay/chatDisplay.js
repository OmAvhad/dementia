import React, { useState } from "react";
import "./chatDisplay.css";

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

function ChatDisplay({chatsList}) {

  return (
    <div className="max-h-[83vh] overflow-y-scroll w-full px-4">
      {chatsList.map((value) => {
        return (
          <div
            className={`flex ${
              value.type === "sender" ? "justify-end" : "justify-start"
            }`}
          >
            <div className={`chat-box ${value.type}`}>
              <p>{value.message}</p>
              {/* <span class="status">Delivered</span> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ChatDisplay;
