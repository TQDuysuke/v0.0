import React from 'react'
import './Auth.scss'
// import Icon from '../icon/eds-logo.svg'
import Vector from '../icon/login-background.svg'

const Auth = () => {
  return (
    <div className='Background'>
      <div className='Login'>
        <div className='Title'>
          <h1>EDS Platform</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.</p>
          <img className='LoginVector' src={Vector} alt="application vector" />
        </div>
        {/* <form id='LoginForm'>
          <div className="SubTitle">
            <h5>Welcome</h5>
            <h1>Sign In to ESD Platform</h1>
          </div>
          <div className="LoginForm">
            <p>Email<br/><input type="email" /></p>
            <p>Password<br/><input type="password" /></p>
            <input type="button" value={'Sign In'} />
          </div>
          <h4>Don't have an account? Sign Up</h4>
        </form> */}
        <form id='CreateNew'>
          <div className="SubTitle">
            <h5>Welcome</h5>
            <h1>Create a new account</h1>
          </div>
          <div className="LoginForm">
            <p>Email<br/><input type="email" /></p>
            <p>Password<br/><input type="password" /></p> 
            <p>Password confirm<br/><input type="password" /></p>
            <input type="button" value={'Create an account'} />
          </div>
          <h4>You have an account? Sign In</h4>
        </form>
      </div>
    </div>
  )
}

export default Auth