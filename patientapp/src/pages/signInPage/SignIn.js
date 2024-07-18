import React from 'react';
import './SignIn.css';
import profileImage from '../../components/profile.png';

const SignIn = () => {
    return (
        <div className="SignUp">
            <div className="SignUp-img">
            <img src="signup.png" alt="Brain Icon" className="logo-signup" />
            </div>
            
            <div className="Welcome">Welcome!<br/></div>
            <div className="Avatar">
                <img src={profileImage} alt="Avatar" />
            </div>
            <div className="TextField">
                <input type="text" className="Placeholder" placeholder="Enter Full name" />
            </div>
            <div className="TextField">
                <input type="email" className="Placeholder" placeholder="Enter E-mail" />
            </div>
            <div className="TextField">
                <input type="password" className="Placeholder" placeholder="Enter password" />
            </div>
            <div className="TextField">
                <input type="password" className="Placeholder" placeholder="Re-enter password" />
            </div>
            <button className="Button">Sign Up</button>
            <div className="AccountOptions">
                <span>Already have an account?</span> <a href="#" className="Login">LOGIN</a>
            </div>
            <div className="BarsHomeIndicator">
                {/* <div className="Line" /> */}
            </div>
        </div>
    );
}
    

export default SignIn;
