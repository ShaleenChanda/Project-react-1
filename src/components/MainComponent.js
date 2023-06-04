import ReactSecondimage from "../images/reactjs-icon 2.svg"



function MainComponent(){
    return(
        <main className="maincontainer">
            <h1 className="maintitle">Fun facts about React</h1>
            <img  src ={ReactSecondimage} alt="secondlog" className="secondreactlogo" />
            <ul className="maincontentlist">
                <li className="l1">Was first released in 2013</li>
                <li className="l2">Was orginally created by Jordan Walke</li>
                <li className="l3">Has well over 100k stars on Github</li>
                <li className="l4">Is maintained by Facebook</li>
                <li className="l5">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
};

export default MainComponent;