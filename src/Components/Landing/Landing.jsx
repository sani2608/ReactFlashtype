import React from 'react';
import flash from './../../assets/hero.png';
import './Landing.css';
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" data-aos-duration="800" className="landing-left">
                <h1 className='landing-header'>can you type...</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ["Fast?", "Correct?", "Quick"],
                            autoStart: true,
                            loop: true,
                        }} />
                </div>
            </div>
            <div data-aos="fade-left" className="landing-right" data-aos-duration="800">
                <img className="flash-image" src={flash} alt="hero" />
            </div>
        </div>
    )

}

export default Landing;
