import React from 'react';
import AboutMission from './components/aboutComponents/about-mission';
import AboutTeam from './components/aboutComponents/about-team';

const About = () => {
    return (
        <div>
            <div className="header">
                <h>About Us</h>
            </div>
            <p></p>
            
                <AboutMission/>
            <br></br>
                <AboutTeam/>
        </div>
    )
}

export default About;
