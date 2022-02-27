import React from 'react'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';
// import { TryAgain } from '../TryAgain/TryAgain';

import './TestContainer.css';

export const TestContainer = ({ words, characters, wpm }) => {
    return (
        <div className='test-container'>
            <TypingChallengeContainer
                words={words}
                characters={characters}
                wpm={wpm}
            />
        </div>
    )
}