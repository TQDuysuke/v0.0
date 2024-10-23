import './App.scss'
import './firebase'
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Auth from './Auth/Auth'
import Home from './components/Home/Home';

const App = () => {
  const [Login, SetLogin] = useState(false);
  const handleDataFromChild = (data) => {
    if(data.email && data.password){
      console.log(data);
      const auth = getAuth();
      signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
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
      {Login ? <Home/> : <Auth onData={handleDataFromChild}/>}
    </div>
  )
}

export default App