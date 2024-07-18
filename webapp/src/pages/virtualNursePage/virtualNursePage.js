import { Button, CircularProgress } from "@mui/material";
import React from "react";
import { useEffect, useState, useRef } from "react";
import PageHeader from "../../components/pageHeader/pageHeader";
import AssistantInput from "../../components/assistantInput/assistantInput";
import ChatDisplay from "../../components/chatDisplay/chatDisplay";
import axios from "axios";
import API from "../../api";

function VirtualNursePage() {
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const question = "I am diagnosed with dementia stage 2, what diet should I follow?";

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition. Please try with Chrome.');
      return;
    }

    const recognitionInstance = new window.webkitSpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = 'en-US';

    recognitionInstance.onstart = () => {
      setIsListening(true);
    };

    recognitionInstance.onresult = async (event) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setText(question);

      if (finalTranscript) {
        recognitionInstance.stop();
        setIsListening(false);
        setLoading(true);
        console.log(finalTranscript);
        // getResponse(question).then( async (data) => {
        // const createVideo = await axios.post(API.local_test+"/create-talk", { input: data.answer });
        // console.log(createVideo);
        // const video_id = createVideo.data.id;
        // console.log(video_id);
        // setTimeout( async () => {
          getVideo("randomID");
        // }, 10000);
        // });

      }
    };

    const getVideo = async (video_id) => {
      // const videoResponse = await axios.get(API.local_test+"/get-talk?id=" + video_id);
  
      // // if undefined, call getVideo again
      // if(videoResponse.data.result_url === undefined){
      //   setTimeout(() => {
      //     getVideo(video_id);
      //   }, 2000);
      // } 

      const video = document.getElementById("video");
      // set video source
      setLoading(false);
      video.src = "/1721335236355.mp4";
      video.play();
    }

    const getResponse = async (query) => {
      // axios post
      const response = await axios.post(API.wearos+"/chatbot", { message: query });
      console.log(response.data);
      // check if response.data is not empty by checking response.data.answer
      if(response.data.answer){
        return response.data;
      }
      return { answer: "Sorry, I didn't get that!" };
    }
  

    recognitionInstance.onerror = (event) => {
      console.error(event.error);
      stopListening();
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
    };

    recognitionInstance.start();
    recognitionRef.current = recognitionInstance;
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return (
    <>
      <PageHeader title={"Assistant"}/>
      {/* <Button onClick={isListening ? stopListening : startListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </Button> */}
      <p>{text}</p>
      <div className="flex flex-row justify-center items-center">
        {isLoading &&
        <CircularProgress className={isLoading ? 'block' : 'hidden'} />
        }
      </div>

      <video src="" id="video"></video>
      <AssistantInput startListening={startListening} stopListening={stopListening} isListening={isListening}/>
    </>
  );
}

export default VirtualNursePage;