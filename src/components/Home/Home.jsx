import React, { useState , useEffect , useRef } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import {DeviceTemmplate} from './Datatemplate';
import User from '../User/User'
import Devices from './Device/Device';
import Addnew from './Device/Addnew';
import './Home.scss'

const Home = (props) => {
  const [Infor, SetInfor] = useState(" ");
  const [Device, SetDevice] = useState(DeviceTemmplate);
  const Loaded = useRef(false);
  useEffect(() => {
    if (!Loaded.current) {
      getData(props.User.uid, "Profile")
      getData(props.User.uid, "Device")
      Loaded.current = true;
    }
    return () => {
    };
    });
  return (
    <div className='Main'>
      <div className="Profile">
        <User Profile = {Infor}/>
      </div>
      <div className="Container">
        <div className="Cards">
        {Object.keys(Device).map((id) => (
          Device[id].Name && (
            <Devices
              key={id}
              id={id}
              uid={props.User.uid}
              lastupdate={Device[id].LastTime}
              battery={Device[id].Monitoring.BAT}
              flood={Device[id].Monitoring.FLD}
              rainfall={Device[id].Monitoring.RF}
              waterlevel={Device[id].Monitoring.WL}
              name={Device[id].Name}
            />
              )
            ))}
          <Addnew/>
        </div>
      </div>
    </div>
  )
  function getData(userId, path) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `user/${userId}/${path}`)).then((snapshot) => {
      if (snapshot.exists()) {
        if(path === "Profile"){
          SetInfor(snapshot.val());  
        }else if(path === "Device"){
          SetDevice(snapshot.val())
        }
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}

export default Home