import React from "react";
import "./assistantInput.css";
import { useState } from "react";
import axios from "axios";
import API from "../../api";
import { Button } from "@mui/material";


function AssistantInput({isListening, startListening, stopListening }) {

  return (
    <div className="h-[12vh] w-full bg-white absolute bottom-0 px-2 mb-2 flex flex-row justify-center items-center">
      <div className={`border ${isListening ? 'border-blue-500 rounded-full p-4 ' : ''}`}>
        <div className={`border ${isListening ? 'border-blue-500 rounded-full p-3' : ''}`}>
          <div className="flex justify-center items-center border-none">
            <Button  onClick={isListening ? stopListening : startListening} type="button" class="mic">
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
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssistantInput;
