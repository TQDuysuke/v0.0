import React, { useState } from 'react';
import './Auth.scss'
import Vector from '../icon/login-background.svg'

const Auth = ({ onData }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  var userForm ={
    "email": null,
    "password": null,
    "checkbox": null,
  }
function handleSubmit(e){
  e.preventDefault();
  userForm.email = e.target[0].value
  userForm.password = e.target[1].value 
  onData(userForm)
}
function LoginForm() {
  // Xử lý logic của form đăng nhập
  return (
    <form onSubmit={handleSubmit}>
    <div className="SubTitle">
      <h5>Welcome</h5>
      <h1>Sign In to ESD Platform</h1>
    </div>
    <div className="LoginForm">
      <p>Email<br/><input type="email" placeholder='Type your email' /></p>
      <p>Password<br/><input type="password" placeholder='Type your password'/></p>
      <input type="submit" value={'Sign In'} />
    </div>
    <h4 onClick={toggleForm}>Don't have an account? Sign Up</h4>
  </form>
  );
}

function RegisterForm() {
  // Xử lý logic của form đăng ký
  return (
        <form>
          <div className="SubTitle">
            <h5>Welcome</h5>
            <h1>Create a new account</h1>
          </div>
          <div className="LoginForm">
            <p>Email<br/><input type="email" placeholder='Type your email'/></p>
            <p>Password<br/><input type="password" placeholder='Type your password'/></p> 
            <p>Password confirm<br/><input type="password" placeholder='Type your password again'/></p>
            <p><input type="checkbox" name="Term" id="TermCheck" /> Agree to Terms and Conditions</p>
            <input type="submit" value={'Create an account'} />
          </div>
          <h4 onClick={toggleForm}>You have an account? Sign In</h4>
        </form>
  );
}
  return (
    <div className='Background'>
      <div className='Login'>
        <div className='Title'>
          <h1>EDS Platform</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.</p>
          <img className='LoginVector' src={Vector} alt="application vector" />
        </div>
        {isLoginForm ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  )
}

export default Auth