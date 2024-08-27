import React, { useState } from 'react';
import './App.scss'
import Auth from './Auth/Auth'
import Home from './components/Home/Home';

const App = () => {
  const [Login, SetLogin] = useState(false);
  const handleDataFromChild = (data) => {
    if(data.email){
      SetLogin(true);
    }
  };
  return (
    <div className='Background'>
      {Login ? <Home/> : <Auth onData={handleDataFromChild}/>}
    </div>
  )
}

export default App