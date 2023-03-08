import React from 'react';
import AboutMission from './components/aboutComponents/about-mission';
import AboutTeam from './components/aboutComponents/about-team';

const About = () => {
    return (
        <div>
            <div class="row d-inline-block about-height">
                <h1 class="col text-center">About Us</h1>
            </div>
            <p></p>
            
                <AboutMission />
            <br></br>
                <AboutTeam />
        </div>
    )
}

export default About;