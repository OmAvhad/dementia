import React, { useState } from "react";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";
import BottomNav from "../../components/bottomNav/bottomNav";
import bellIcon from "../../images/bell.png"; // Replace with your bell icon
import "./SpeechTherapy.css";

const questions = [
    "My name is John Doe.",
    "I live in London.",
    "I was born on January 1st.",
    "I love to read books.",
    "My favorite color is blue."
];

const SpeechTherapy = () => {
    const [checkedItems, setCheckedItems] = useState(new Array(questions.length).fill(false));

    const handleCheck = (index) => {
        const newCheckedItems = [...checkedItems];
        newCheckedItems[index] = !newCheckedItems[index];
        setCheckedItems(newCheckedItems);
    };

    return (
        <div className="bg-st min-h-screen flex flex-col justify-between">
            <DashboardHeader />
            <div className="speech-therapy-container p-4">
                <h2 className="text-center text-2xl font-bold mb-4">Speech Therapy Questions</h2>
                <div className="questions-grid">
                    {questions.map((question, index) => (
                        <div 
                            key={index} 
                            className={`question-card ${checkedItems[index] ? 'checked' : ''}`}
                            onClick={() => handleCheck(index)}
                        >
                            <img src={bellIcon} alt="Bell Icon" className="bell-icon" />
                            <p>{question}</p>
                            <input 
                                type="checkbox" 
                                checked={checkedItems[index]} 
                                onChange={() => handleCheck(index)}
                                className="hidden-checkbox"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <BottomNav />
        </div>
    );
}

export default SpeechTherapy;
