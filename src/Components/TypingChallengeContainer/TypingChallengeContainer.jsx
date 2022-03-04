import React from "react";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import { TypingChallenge } from "../TypingChallenge/TypingChallenge";
import './TypingChallengeContainer.css'
const TypingChallengeContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted
}) => {
    return (
        <div className="typing-challenge-container">
            { /** details section */}
            <div className="details-container">
                <ChallengeDetailsCard cardName="Words" cardValue={wpm} />
                <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
                <ChallengeDetailsCard cardName="Speed" cardValue={words} />
            </div>
            <div className="typewriter-container">
                <TypingChallenge
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted} />
            </div>
        </div>
    );
}

export default TypingChallengeContainer;