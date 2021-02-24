import React from "react";
import splash from "../../assests/splash.gif";
import "./splash.css";
const Splash = () => {
    return(
        <div className = "splash-styling">
            <img src = {splash} alt = "splash-screen" />
        </div>
    );
}
export default Splash;