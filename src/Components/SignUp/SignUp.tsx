import React,{ useEffect,useState } from "react";
import { Link } from "react-router-dom";
import login from "../../assests/login.jpg";
import Splash from "../Splash/Splash";
import "./SignUp.css";
const SignUp: React.FC = () => {
    const [showContent,setShowContent] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        },5000);
        return () => {clearTimeout(timer)}
    },[]);
    return(
        <div>
            {showContent === false ? (
                <Splash />
            ):(
            <div className = "main">
                    <section className = "signin">
                    <div className = "signin-container">
                        <div className = "signin-img">
                            <h1 className = "main-heading">Welcome to the Seller Dashboard !</h1>
                            <img src = {login} alt = "Login" />
                        </div>
                    <div className = "signin-content">
                        <h1 className = "login-heading">Register</h1>
                        <form className = "signin-form">
                            <div className = "form-group">
                                <div className = "inner-group">
                                    <label>First Name</label>
                                    <input type="text"className = "signUp-input"/>
                                </div>
                                <div className = "inner-group">
                                    <label>Last Name</label>
                                    <input type="text" className = "signUp-input"/>
                                </div>
                            </div>
                            <div className = "form-group">
                                <div className = "inner-group">
                                    <label>Phone Number</label>
                                    <input type="number" className = "signUp-input"/>
                                </div>
                                <div className = "inner-group">
                                    <label>Email</label>
                                    <input type="email" className = "signUp-input"/>
                                </div>
                            </div>
                            <div className = "form-group">
                                <div className = "inner-group">
                                    <label>Password</label>
                                    <input type="password" className = "signUp-input"/>
                                </div>
                                <div className = "inner-group">
                                    <label>Confirm Password</label>
                                    <input type="password" className = "signUp-input"/>
                                </div>
                            </div>
                            <div className = "terms">
                                <input type="checkbox" className="checkbox"/>&nbsp;&nbsp;I Accept to the Terms & Conditions
                            </div>
                            <div className = "terms">
                                <Link to = "/dashboard"><button className = "login-btn">Create Account</button></Link>
                            </div>
                            <p className = "terms-2">Already have an account?&nbsp; <Link to = "/Brokers">Log in</Link></p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        )}
        </div>
    );
}
export default SignUp;