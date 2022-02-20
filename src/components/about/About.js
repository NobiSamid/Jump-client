import React from 'react';
import './About.css';

//////////////// about page : so simple as that /////////////////////

const About = () => {
    return (
        <div>
            <div className="mission">
                <div className="msn-txt">
                    <h1>Our Mission</h1>
                    <p className="msn-p">
                        We are here with an Idea that there will be no boundary for tourist.I's our responsibility to to fulfill your most exiting dream tour like Bungee jumping, ParaGliding, Sky-Diving, Skuba-Diving and many more adventuras events like this.
                        You don't have to worry about all those things like wheere to go what to do and all other stuff. We will provide all kind of services to make sure that you would be able to do those exiting and adventuras activity.
                        We are connected with over the 200 counties around the world.It doesn't matter where are you from you just have to fulfill out criteria.
                        In breaf we are here to make you feel comfortable to do such things.
                        for testing purposes.
                    </p>
                </div>
                <div className="msn-img-div">
                    <img className="msn-img" src="https://www.tantalusvillas.com/uploads/areainfo/gh.jpg" alt="Mission"></img>
                </div>
            </div>

            {/************************* About us => Vision part **********************/}
            <div className="vision">
                <div className="vsn-img">
                    <img src="https://www.xtremespots.com/wp-content/uploads/2013/06/Wingsuit-Flying-team-in-A%C3%A9rodrome-de-Spa-La-Sauveni%C3%A8re.jpg" alt="vision-preview"/>
                </div>
                <div className="vsn-txt">
                    <h1>Our Vision</h1>
                    <p>
                        Currently we are offering Sky-diving , Bungee-jumping, Scuba-diving, Wingsuit-flying, Jetovator, Paragliding and Hot air Baloon festival.
                        Our vission is to make all these activites so familiar to everybody that anyone dare to do these stuff. Make our beloved people Unstoppable.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;