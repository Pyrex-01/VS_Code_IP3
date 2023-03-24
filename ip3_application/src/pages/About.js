import React, { useState, useEffect } from 'react';
import axios from 'axios'
import AboutMission from './components/aboutComponents/about-mission';
import AboutTeam from './components/aboutComponents/about-team';

const About = props => {

    useEffect(() => {
        axios.get('/api/hello')
            .then(res => setState(res.data))
    }, [])

    const [state, setState] = useState('')

    return (
        <div className="screen">
            <div className='header'>
                <div className="about">
                    <h className="h_about">About us</h>
                </div>
            </div>

            <p></p>

            <AboutMission />
            <br></br>
            <AboutTeam />
            <br></br>
            <p>{state}</p>

            <div className="Footer">
                <p className="foot ">This project was created by students of Glasgow Caledonian University</p>
                <p>2023</p>
            </div>
        </div>
    )
};

export default About;
