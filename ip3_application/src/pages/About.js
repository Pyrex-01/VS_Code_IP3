import React from 'react';
import AboutMission from './components/aboutComponents/about-mission';
import AboutTeam from './components/aboutComponents/about-team';

function About() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

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
            <p>{!data ? "Loading..." : data}</p>

            <div className="Footer">
        <p className="foot ">This project was created by students of Glasgow Caledonian University</p>
        <p>2023</p>
        </div>
        </div>
    )
}

export default About;
