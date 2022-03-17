import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import './Login.scss'
import LoginImageForm from '../images/commbot-login.png'
import PlatformImage from '../images/platform.png'
import User from '../images/user.png'
import Password from '../images/password.png'
import Eye from '../images/eye.png'

const Login = () => {
  return (
    
      <div className="login">
        
          
            <div className="login-text">
              <h1>Omni channel</h1>
              <h2>Platform</h2>

              <img
                src={PlatformImage}
                alt="Girl in a jacket"
                

              />
            </div>
          
         
            <div className="login-form">
              <img
                src={LoginImageForm}
                alt="Girl in a jacket"
               
                className='loginformimage'
              />
<div className='welcome'>

              <h1 >Welcome Back!</h1>
              <hr style={{ width: '60px', color: '#32BE8A' }} />
</div>

              <div className="user">
                <img src={User} alt="Girl in a jacket" width="38" height="40" />
                <span className='username-text'>Enter UserName</span>
              </div>

              <div className="password">
                <img
                  src={Password}
                  alt="Girl in a jacket"
                  width="31"
                  height="40"
                />
                  Enter Password
                
<div className="eye_div"> 
                <img src={Eye} alt="Girl in a jacket" width="29" height="20" className='eye-img' />
</div>
              </div>
              <div>
                <button variant="primary" className="login-button">
                  Login
                </button>
              </div>
              <div className='form-footer-text' >

                Powered By
                <span className='smartvision' >  smartvision.ae </span>
              </div>
            </div>

         
        
      </div>
   
  )
}

export default Login
