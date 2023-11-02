import React, { useState } from "react";
import "./loginSignup.css";

// Import de assets
import email from '../Assets/email.png';
import password from '../Assets/password.png';
import person from '../Assets/person.png';

const LoginSignup = () => { // Cambiado a "LoginSignup" con la primera letra en mayúscula
    const [action, setAction] = useState("Sign Up");
    
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : <div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder="Name" />
                    </div>}
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>
            <div className="Forgot-password">Lost Password? <span>Click Here!</span></div>
            <div className="submit-conatiner">
                <div className={action === "Login" ? "submit gray" : "submit"}onClick={()=>{setAction("Sign Up")}}>Sign up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"}onClick={()=>{setAction("Log In")}}>Login</div>
            </div>
        </div>
    );
}

export default LoginSignup;
