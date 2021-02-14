import React from "react";
import "./SignIn.css";
import login from "../../assests/login.jpg";
import { Link } from "react-router-dom";

const SignIn:React.FC = () => {
    return(
        <div>
            <div className = "container">
            <div className = "login-img-login">
                <img src = {login} alt = "Login" /> 
            </div>
            <div className = "signin-form">
                <h1 className = "main-heading">Login</h1>
                <form>
                    <div className = "form-grouping">
                        <div className = "inner-grouping">
                            <label>Email</label>
                            <input type="email" className = "signin-input"/>
                        </div>
                        <div className = "inner-grouping">
                            <label>Password</label>
                            <input type="password" className = "signin-input"/>
                        </div>
                    </div>
                    <div className = "term">
                        <button className = "login-btn">Log In</button>
                    </div>
                    <p className = "term">Dont have an account yet? &nbsp; <Link to = "/Brokers">Join Us</Link></p>
                </form>
            </div>
        </div>
        </div>
    );
}

export default SignIn;