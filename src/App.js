// import './App.scss'
import './firebase'
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Auth from './Auth/Auth'
import Home from './components/Home/Home';

const App = () => {
  const [Login, SetLogin] = useState(false);
  const [User, SetUser] = useState();
  const handleDataFromChild = (data) => {
    if(data.email && data.password){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        SetUser(userCredential.user)
        SetLogin(true);
      })
      .catch((error) => {
        SetLogin(false);
        const errorMessage = error.code;
        console.log(errorMessage);
      }); 
    }
  };
  return (
    <div className='Background'>
      {Login ? <Home User = {User}/> : <Auth onData={handleDataFromChild}/>}
    </div>
  )
}

export default App