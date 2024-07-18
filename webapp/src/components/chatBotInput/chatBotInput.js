import React from "react";
import "./chatBotInput.css";
import { useState } from "react";
import axios from "axios";

function ChatBotInput({pushChat}) {
  const [query, setQuery] = useState("");
  const handlePushChat = (query) => {
    pushChat(query, "sender");
    getResponse(query).then((data) => {
      pushChat(data.answer, "receiver");
    });
    setQuery("");
  }

  const getResponse = async (query) => {
    // axios post
    const response = await axios.post("https://wear-os.onrender.com/chatbot", { message: query });
    console.log(response.data);
    // check if response.data is not empty by checking response.data.answer
    if(response.data.answer){
      return response.data;
    }
    return { answer: "Sorry, I didn't get that!" };
  }

  return (
    <div className="h-[12vh] w-full bg-white absolute bottom-0 left-0 px-2 mb-2 flex justify-between items-center">
      <div className="w-[85%]">
        <div class="chatinput-container">
          <input
            type="text"
            class="chatinput-input"
            placeholder="Type..."
            autoComplete="false"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button class="chatinput-send" onClick={() => handlePushChat(query)}>
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.38212 20.3999L19.8238 12.9199C19.9834 12.8431 20.1196 12.7149 20.2152 12.5513C20.3109 12.3877 20.3619 12.196 20.3619 11.9999C20.3619 11.8038 20.3109 11.6121 20.2152 11.4485C20.1196 11.2849 19.9834 11.1567 19.8238 11.0799L4.38212 3.5999C4.24842 3.534 4.10229 3.50675 3.95693 3.52061C3.81157 3.53447 3.67156 3.589 3.54951 3.6793C3.42746 3.76959 3.32723 3.8928 3.25785 4.0378C3.18847 4.18281 3.15213 4.34506 3.1521 4.5099L3.14325 9.1199C3.14325 9.6199 3.47067 10.0499 3.91312 10.1099L16.4169 11.9999L3.91312 13.8799C3.47067 13.9499 3.14325 14.3799 3.14325 14.8799L3.1521 19.4899C3.1521 20.1999 3.79808 20.6899 4.38212 20.3999Z"
                fill="#455154"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button type="button" class="mic">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatBotInput;
