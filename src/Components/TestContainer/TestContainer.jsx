import React from 'react'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import { TryAgain } from '../TryAgain/TryAgain';

import './TestContainer.css';

export const TestContainer = ({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    startAgain
}) => {
    // let timeRemaining = 5;

    return (
        <div className='test-container'>
            {
                timeRemaining > 0 ? (
                    <TypingChallengeContainer
                        words={words}
                        characters={characters}
                        wpm={wpm}
                        timeRemaining={timeRemaining}
                        timerStarted={timerStarted}
                        selectedParagraph={selectedParagraph}
                        testInfo={testInfo}
                        onInputChange={onInputChange}
                    />
                ) : (
                    <div className='try-again-cont'>
                            <TryAgain
                                words={words}
                                characters={characters}
                                wpm={wpm}
                                startAgain={startAgain}

                            />
                    </div>

                )
            }
        </div>
    )
}