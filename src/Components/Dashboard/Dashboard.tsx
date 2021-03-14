import React,{useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import FlyerCards from "../FlyerCards/FlyerCards";
import './Dashboard.css';
import CreateFlyer from "../Modals/CreateFlyer";
const Dashboard:React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    return(
        <div>
            {showModal &&(
                <CreateFlyer visible = {showModal} setShowModal = {setShowModal}/>
            )}
            <nav className = "dashboard-nav">
                <h1>Dashboard</h1>
                <FontAwesomeIcon icon = {faUser} size = "2x"/>
            </nav>
            <div className = "dasboard-content">
                <h2>Browse Flyers</h2>
                <button className = "create-flyer" onClick = {() => {setShowModal(true)}}>create a flyer</button>
            </div>
            <div className = "flyer-container">
                <FlyerCards />
                <FlyerCards />
                <FlyerCards />
                <FlyerCards />
                <FlyerCards />
            </div>
        </div>
    );
};

export default Dashboard;