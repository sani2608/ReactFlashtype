import React from 'react';
import { ChallengeSection } from '../ChallengeSection/ChallengeSection';
import Footer from '../Footer/Footer';
import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import './App.css';

const TotalTime = 60;
const serviceUrl = 'http://metaphorpsum.com/paragraphs/1/9';



class App extends React.Component {
    state = {
        selectedParagraph: "My name is sani.",
        timerStarted: true,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0
    }

    componentDidMount() {
        fetch(serviceUrl)
            .then(response => response.text())
            .then(information => {
                this.setState({ selectedParagraph: information });
            })
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
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
