import React from "react";
import './TypingChallenge.css';


export const TypingChallenge = ({ selectedParagraph, timeRemaining, timerStarted }) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">
                    00:
                    {
                        timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`
                    }
                </p>
                <p className="timer-info">{
                    !timerStarted === true && "start typing to begin the test"
                }</p>
            </div>
            <div className="textarea-container">
                <div className="textarea-left">
                    <div className="textarea test-paragraph">
                        {selectedParagraph}
                    </div>
                </div>

                <div className="textarea-right">
                    <textarea
                        className="textarea"
                        placeholder="start typing here">
                    </textarea>
                </div>
            </div>
        </div>
    )
}
