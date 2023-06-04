import ReactLogo from "../images/React-icon.svg.png"


function HeaderComponent(){
    return(
        <div>
            <nav className="headercontainer">
                <img src = {ReactLogo} alt = "logo" className="logoimg"/>
                <h1 className="logoimgtxt">
                    ReactFacts
                </h1>
                <h3 className="righttoptxt">
                    React Project - 1
                </h3>
            </nav>
        </div>
    )
};


export default HeaderComponent;