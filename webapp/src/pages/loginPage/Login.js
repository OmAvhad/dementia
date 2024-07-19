import React from 'react';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="Login">
      <div className="Ellipse1"></div>
      <div className="Ellipse2"></div>
      <div className="WelcomeBack">Welcome Back!<br/></div>
      <div className="TextField">
        <input type="email" className="Placeholder" placeholder="Enter E-mail" />
      </div>
      <div className="TextField">
        <input type="password" className="Placeholder" placeholder="Enter password" />
      </div>
      
      <button className="Button" onClick={()=>window.location.href = "/"} >Log In</button>
      <div className="or-container">
        <div className="Vector1"></div>
        <div className="Or">OR</div>
        <div className="Vector2"></div>
      </div>
      <button className="GoogleButton"><FaGoogle /> Login with Google</button>
      <a href="#" className="ForgotPassword">FORGOT PASSWORD ?</a>
      <div className="AccountOptions">
        <span>Don’t have an account?</span> <a href="#" className="SignUp" onClick={()=>window.location.href = "/signup"}>Sign Up</a>
      </div>
      <div className="BarsHomeIndicator">
        {/* <div className="Line" /> */}
      </div>
    </div>
  );
}

export default Login;
