import HeroImage from "../images/Group 77.svg"

function HeroCompoenent(){
    return(

            <div className="flexbox-hero-container">
                <img src= {HeroImage} alt="Images" className="hero-image"/>
            <h1 className="header-1-hero-section">
                Online Experiences
            <h3 className="header-3-hero-section">
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </h3>
            </h1>
            </div>

    )
};

export default HeroCompoenent;