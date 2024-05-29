import React from 'react'
import "./css/LoginSignup.css"

export default function Login() {
  return (
    <div className='login-Signup'>
      <div className="flexcol login-signup-container">
        <h2>SignUp</h2>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name..' autoComplete="off"/>
          <input type="email" placeholder='Email Address..' autoComplete="off" />
          <input type="password" placeholder='Password..'autoComplete="off"/>
        </div>

        <button className='button'>continue</button>
        <p className="liginsignUo-login">Already have account ? <span>Login here..</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id='' />
          <p style={{color:"gray"}}>By continuing, i agree to the terms of privacy policy.</p>
        </div>
      </div>

    </div>
  )
}
