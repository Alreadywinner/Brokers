import React from "react";
import "./SignIn.css";
import login from "../../assests/login.jpg";
import { Link } from "react-router-dom";

const SignIn:React.FC = () => {
    return(
        <div>
            <div className = "main">
                <section className = "signin">
                    <div className = "signin-container">
                        <div className = "signin-img">
                            <h1>Welcome to the Seller Dashboard !</h1>
                            <img src = {login} alt = "Login" />
                        </div>
                        <div className = "signin-content">
                        <h2 className = "login-heading">Login</h2>
                        <form className = "signin-form">
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
                            <p className = "term">Dont have an account yet? &nbsp; <Link to = "/Signup">Join Us</Link></p>
                        </form>
                        </div>
                    </div> 
                </section>
            </div>
        </div>
    );
}

export default SignIn;