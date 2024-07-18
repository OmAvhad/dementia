import React, { useState } from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import BottomNav from "../../components/bottomNav/bottomNav";
import "./QuizGame.css";
import profile1 from "../../images/profile1.png";
import profile2 from "../../images/profile2.png";
import profile3 from "../../images/profile3.png";
import profile4 from "../../images/profile4.png";

const questions = [
    {
        profile: profile1,
        name: "Aditya"
    },
    {
        profile: profile2,
        name: "Sidra"
    },
    {
        profile: profile3,
        name: "Shruti"
    },
    {
        profile: profile4,
        name: "Annappa"
    }
];

const QuizGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [showCongratulations, setShowCongratulations] = useState(false);

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput.trim().toLowerCase() === questions[currentQuestion].name.toLowerCase()) {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
                setUserInput("");
            } else {
                setShowCongratulations(true);
            }
        } else {
            alert("Incorrect! Please try again.");
        }
    };

    return (
        <div className="bg-[#F7F7F7] min-h-screen flex flex-col justify-between">
            <DashboardHeader />
            <div className="quiz-container p-4 flex flex-col items-center">
                {showCongratulations ? (
                    <h2 className="text-2xl font-bold">Hurrah! You did it!</h2>
                ) : (
                    <form onSubmit={handleSubmit} className="quiz-form">
                        <img src={questions[currentQuestion].profile} alt="Profile" className="quiz-image" />
                        <input 
                            type="text" 
                            value={userInput} 
                            onChange={handleInputChange} 
                            placeholder="Enter the name" 
                            className="quiz-input"
                        />
                        <button type="submit" className="quiz-button">Submit</button>
                    </form>
                )}
            </div>
            <BottomNav />
        </div>
    );
}

export default QuizGame;
