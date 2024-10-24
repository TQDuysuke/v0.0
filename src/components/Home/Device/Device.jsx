import React, { useState } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import {DevChart} from '../Datatemplate';
import ChartJS from './ChartJS/ChartJS'
import './Device.scss';

const Device = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ChartData, SetChart] = useState(DevChart);
    getData(props.uid, props.id);
    const togglePopup = () => {
      getData(props.uid, props.id);
      console.log(ChartData);
      setIsOpen(!isOpen);
    };
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };
  return (
    <div>
        <div onClick={togglePopup} className="device-card">
            <div className="device-item">
            <span className="title">{props.name} information</span>
            </div>
        <div className="info-container">
            <div className="device-item">
            <span className="label">Water Level:</span>
            <span className="value">{props.waterlevel} cm</span>
            </div>
            <div className="device-item">
            <span className="label">Rainfall:</span>
            <span className="value">{props.rainfall} ppm</span>
            </div>
            <div className="device-item">
            <span className="label">Battery:</span>
            <span className="value">{props.battery} volt</span>
            </div>
            <div className="device-item">
            <span className="label">Flood:</span>
            <span className="value">{props.flood} %</span>
            </div>
        </div>
        <span className="label">Last update: </span>
        <span className="value">{formatTimestamp(props.lastupdate)}</span>
        </div>
        {isOpen && (
        <div className="popup">
          <div className="popup-inner">
            <h2>{props.name} data preview {formatTimestamp(props.lastupdate).slice(0, 10)}</h2>
            <div className="popupchart">
                <ChartJS data = {ChartData}/>
                <ChartJS data = {ChartData}/>
                <ChartJS data = {ChartData}/>
                <ChartJS data = {ChartData}/>
            </div>
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
  function getData(userId, path) {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `user/${userId}/DataLoger/${path}`)).then((snapshot) => {
      if (snapshot.exists()) {
        SetChart(snapshot.val());  
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
};

export default Device;
