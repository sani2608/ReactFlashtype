import React from 'react'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
import { TryAgain } from '../TryAgain/TryAgain';

import './TestContainer.css';

export const TestContainer = ({ words, characters, wpm }) => {
    let timeRemaining = 5;


    return (
        <div className='test-container'>
            {
                timeRemaining > 0 ? (
                    <TypingChallengeContainer
                        words={words}
                        characters={characters}
                        wpm={wpm}
                    />
                ) : (
                    <div className='try-again-cont'>
                        <TryAgain words={words} characters={characters} wpm={wpm} />
                    </div>

                )
            }
        </div>
    )
}