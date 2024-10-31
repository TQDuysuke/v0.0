import React, { useState , useEffect , useRef } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import {DevChart} from '../Datatemplate';
import ChartJS from './ChartJS/ChartJS'
import './Device.scss';

const Device = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ChartData, SetChart] = useState(DevChart);
    const [rfValues, setRfValues] = useState([]);
    const [fldValues, setFldValues] = useState([]);
    const [wlValues, setWlValues] = useState([]);
    const [batValues, setBatValues] = useState([]);
    const [KeyTime, setKeyTime] = useState([]);
    const Loaded = useRef(false);
    useEffect(() => {
      if (!Loaded.current) {
        getData(props.uid, props.id);
        Loaded.current = true;
      }
      return () => {
      };
      });

    const togglePopup = () => {
      if(!ChartData){
        getData(props.uid, props.id);
      }
      // console.log(ChartData.Data["2024-10-31"]);
      if (ChartData.Data["2024-10-31"]) {
        setRfValues(extractValues("2024-10-31", "RF"));
        setFldValues(extractValues("2024-10-31", "FLD"));
        setWlValues(extractValues("2024-10-31", "WL"));
        setBatValues(extractValues("2024-10-31", "BAT"));
        setKeyTime(Object.keys(ChartData.Data["2024-10-31"]));
      }
      setIsOpen(!isOpen);
    };
    const formatTimestamp = (timestamp) => {
        const date = new Date(timestamp * 1000); 
        const year = date.getFullYear();
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const hours = ("0" + date.getHours()).slice(-2);
        const minutes = ("0" + date.getMinutes()).slice(-2);
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };
    const extractValues = (date, key) => {
      const valuesArray = [];
      const times = Object.keys(ChartData.Data[date]);
      times.forEach(time => {
        valuesArray.push(ChartData.Data[date][time][key]);
      });
      return valuesArray;
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
                <ChartJS time = {KeyTime} dat = {wlValues} name = "Water level" color = "#1B9CFC"/>
                <ChartJS time = {KeyTime} dat = {rfValues} name = "Rain fall" color = "#00B4D8"/>
                <ChartJS time = {KeyTime} dat = {fldValues} name = "Flood Likelihood" color = "#FF9F43"/>
                <ChartJS time = {KeyTime} dat = {batValues} name = "Battery" color = "#FF6B6B"/>
            </div>
            <button className='button-9' onClick={togglePopup}>CLOSE DATA VIEWER</button>
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
        // console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
};

export default Device;
