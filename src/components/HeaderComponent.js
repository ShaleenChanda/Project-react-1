import navLogo from "../images/Vector.svg"


function HeaderComponent(){
    return(
        <nav className="headerNav">
            <img src={navLogo} alt="NavLogo" className="navLogo" />
        </nav>
    )
};

export default HeaderComponent;