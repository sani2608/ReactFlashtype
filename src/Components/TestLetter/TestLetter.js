import React from 'react'

import './TestLetter.css'

export const TestLetter = ({ individualLetterInfo }) => {
    const { status } = individualLetterInfo;
    console.log(status);

    const statusClass = {
        correct: "test-letter-correct",
        incorrect: "test-letter-incorrect",
        notAttempted: "test-letter-not-attempted"
    }[status];
    console.log(statusClass);

    // let statusClass;
    // if (status === "correct") {
    //     statusClass = "test-letter-correct"
    // } else if (status === "incorrect") {
    //     statusClass = "test-letter-not-attempted";
    // } else {
    //     statusClass = "test-letter-not-attempted";
    // }
    return (
        <span className={`test-letter ${statusClass}`}>
            {individualLetterInfo.testLetter}
        </span>
    )
}
