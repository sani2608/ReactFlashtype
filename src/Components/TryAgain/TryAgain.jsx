import React from 'react'
import './TryAgain.css';

export const TryAgain = ({ words, characters, wpm, startAgain }) => {
    return (
        <div className='try-again-container'>
            <h1>Test Results</h1>
            <div className='result-container'>
                <p>
                    <b>Characters:</b> {characters}
                </p>
                <p>
                    <b>Words:</b> {words}
                </p>
                <p>
                    <b>Speed:</b> {wpm} wpm
                </p>
            </div>
            <div>
                <button
                    onClick={() => startAgain()}
                    className='end-buttons start-again-button'>
                    Re-try
                </button>
                <button
                    className='end-buttons share-button'
                    onClick={() => {
                        window.open("https://www.leetcode.com/sanikumar")
                    }}>
                    Share
                </button>
                <button
                    className='end-buttons tweet-button'
                    onClick={() => {
                        window.open("https://www.codechef.com/users/sa2608");
                    }}
                >
                    Tweet
                </button>
            </div>
        </div>
    )
}
