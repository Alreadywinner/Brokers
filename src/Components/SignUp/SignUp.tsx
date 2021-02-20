import React from "react";
import { Link } from "react-router-dom";
import login from "../../assests/login.jpg";
import "./SignUp.css";
const SignUp: React.FC = () => {
    return(
        <div className = "main">
            <section className = "signin">
                <div className = "signin-container">
                    <div className = "signin-img">
                        <h1>Welcome to the Seller Dashboard !</h1>
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
                                <button className = "login-btn">Create Account</button>
                            </div>
                            <p className = "terms-2">Already have an account?&nbsp; <Link to = "/Brokers">Log in</Link></p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default SignUp;