import React, { useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import User from '../User/User'
import './Home.scss'

const Home = (props) => {
  const [Infor, SetInfor] = useState(" ");
  getData(props.User.uid)
  return (
    <div className='Main'>
      <div className="Profile">
        <User Profile = {Infor}/>
      </div>
      <div className="Container">
        a
      </div>
    </div>
  )
  function getData(userId) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `user/${userId}/Profile`)).then((snapshot) => {
      if (snapshot.exists()) {
        SetInfor(snapshot.val());  
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}

export default Home