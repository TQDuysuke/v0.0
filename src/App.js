import React, { useState } from 'react';
import './App.scss'
import Auth from './Auth/Auth'

const App = () => {
  const [Login, SetLogin] = useState(false);
  const handleDataFromChild = (data) => {
    // console.log(data);
    if(data.email){
      SetLogin(true);
    }
  };
  return (
    <div className='Background'>
      {Login ? <div/> : <Auth onData={handleDataFromChild}/>}
    </div>
  )
}

export default App