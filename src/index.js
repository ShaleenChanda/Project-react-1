import ReactDOM from "react-dom";
import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";
import "./styles.css"

function App(){
    return(
        <div>
            <HeaderComponent/>
            <MainComponent/>
        </div>
    )
};


ReactDOM.render(<App/>, document.getElementById("root"));