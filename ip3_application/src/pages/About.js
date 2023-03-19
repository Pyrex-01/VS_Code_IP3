import React from "react";

const About= () => {

        return (
            <div className="screen">
                <div className='header'>
                    <div className="about">
                    <h className="h_about">About us</h>
                    </div>
                </div>

            < div className="left-card">
                 <div class="row">
                
                    <div className="col-md-4"> 
                        <div className="card-header">
                        <h class="card-title">Our Mission</h>
                        </div>
                        <div className="card-body">
                        <p class="card-text border ">The Mission of the project is to enable users from around the world to track planes that are shown on a real-time map. 
                                             Additionally,noffer the users the ability to view information like plane details, weather, the estimation of planes' CO2 emissions, 
                                             and suggestions of new locations that aviation enthusiasts can explore and exchange their experienses through our blog page . 
                        </p>
                        </div>
                        
                        <div className="col-md-2">
                        <img></img>
                    </div>
                    </div> 
                 </div>
            </div>

            

            < div className="right-card">
                 <div class="row">

                <div className="col-md-2">

                    </div>
                    <div className="col-md-4"> 
                        <div className="card-header">
                        <h class="card-title_2">Our Team</h>
                        </div>
                        <div className="card-body">
                        <p class="card-text_2 border">Info about the team
                        </p>
                        </div>
                        
                        
                    </div> 
                 </div>
            </div>


      <div className="Footer_1">
        <p className="foot ">This project was created by students of Glasgow Caledonian University</p>
        <p>2023</p>
      </div>
              
</div>
            

        )
}

export default About;
