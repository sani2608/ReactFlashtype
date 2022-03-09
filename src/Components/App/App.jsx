import React from 'react';
import { ChallengeSection } from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';
import { SAMPLE_PARAGRAPH } from '../../data/sampleParagraph';

const TotalTime = 60;
const serviceUrl = 'http://metaphorpsum.com/paragraphs/1/9';
const DefaultState = {
    selectedParagraph: "",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    characters: 0,
    wpm: 0,
    testInfo: []
};


class App extends React.Component {
    state = DefaultState;

    fetchNewParagraphFallback = () => {
        const data = SAMPLE_PARAGRAPH[Math.floor(Math.random() * SAMPLE_PARAGRAPH.length)];
        const selectedParagraphArray = data.split("");
        const testInfo = selectedParagraphArray.map((selectedLetter) => {
            return {
                testLetter: selectedLetter,
                status: "notAttempted",
            };
        });
        this.setState({ ...DefaultState, testInfo: testInfo, selectedParagraph: data });
    }

    fetchNewParagraph = () => {
        fetch(serviceUrl)
            .then(response => response.text())
            .then((data) => {
                // this.setState({ selectedParagraph: data });
                const selectedParagraphArray = data.split("");
                const testInfo = selectedParagraphArray.map((selectedLetter) => {
                    return {
                        testLetter: selectedLetter,
                        status: "notAttempted",
                    };
                });            
                this.setState({ ...DefaultState, testInfo: testInfo, selectedParagraph: data });
            });
    }

    componentDidMount() {
        this.fetchNewParagraphFallback();
    }

    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            const timeSpent = TotalTime - this.state.timeRemaining;
            const wpm = timeSpent > 0
                ? (this.state.words / timeSpent) * TotalTime
                : 0;
            if (this.state.timeRemaining > 0)
                this.setState({ timeRemaining: this.state.timeRemaining - 1, wpm: parseInt(wpm) });
            else
                clearInterval(timer);
        }, 1000);
    };

    startAgain = () => this.fetchNewParagraphFallback();

    handleUserInput = (inputValue) => {
        if(!this.state.timerStarted) this.startTimer();


        /**
         * !1. handle the underflow case - all the characters should be shown
         * 2. handle the overflow case - early exit
         * 3. andle the backspace
         *              - mark the [index +1] element as not attempted (irrespective of index is < 0)
         *              - but dont forget to check for the overflow case here
         *                  (index +1 -> out of bound, when index === length -1)    
         * 4. Update the status in the test info
         *              - Find out the last character in the inputValue and its's index
         *             - check i fhte character at same index in tiestinfor state matches
         *             - yes -> correct
         *            - no -> incorrect 
         * 5. Irrespective of the case, char, words and speed (wpm) can be updated.
         */
        const characters = inputValue.length;
        const words = inputValue.split(" ").length;
        const index = characters - 1;
        //underflow case
        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: "notAttempted"
                    },
                    ...this.state.testInfo.slice(1)
                ],
                characters,
                words
            });
            return;
        }
        //overflow case
        if (index >= this.state.selectedParagraph.length) {
            this.setState({ characters, words });
            return;
        }

        //make a copy of testinfo
        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1)) {
            testInfo[index + 1].status = "notAttempted";
        }
        //check for the correct typed letter
        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        //update the testinfo
        testInfo[index].status = isCorrect ? "correct" : "incorrect";

        //update the state
        this.setState({ testInfo, words, characters });
    }

    render() {
        return (
            <div className="app">
                <Nav />
                <Landing />
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    wpm={this.state.wpm}
                    characters={this.state.characters}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                    startAgain={this.startAgain}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
