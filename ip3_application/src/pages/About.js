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
        <div>
            <div className="header">
                <h>About Us</h>
            </div>
            <p></p>

            <AboutMission />
            <br></br>
            <AboutTeam />
            <br></br>
            <p>{!data ? "Loading..." : data}</p>
        </div>
    )
}

export default About;
