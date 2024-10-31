import React, { useState , useEffect , useRef } from 'react';
import { getDatabase, ref, child, get } from "firebase/database";
import {DevChart} from '../Datatemplate';
import ChartJS from './ChartJS/ChartJS'
import './Device.scss';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
var formattedDate ;
const Device = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isConfig, setConfig] = useState(false);
    const [ChartData, SetChart] = useState(DevChart);
    const [rfValues, setRfValues] = useState([]);
    const [fldValues, setFldValues] = useState([]);
    const [wlValues, setWlValues] = useState([]);
    const [batValues, setBatValues] = useState([]);
    const [KeyTime, setKeyTime] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
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
      formattedDate = formatDate(selectedDate);
      console.log(formattedDate);
      
      // console.log(ChartData.Data["2024-10-31"]);
      if (ChartData.Data[formattedDate]) {
        setRfValues(extractValues(formattedDate, "RF"));
        setFldValues(extractValues(formattedDate, "FLD"));
        setWlValues(extractValues(formattedDate, "WL"));
        setBatValues(extractValues(formattedDate, "BAT"));
        setKeyTime(Object.keys(ChartData.Data[formattedDate]));
        console.log(true);
      } else {
        console.log(false);
        setRfValues(null);
        setFldValues(null);
        setWlValues(null);
        setBatValues(null);
        setKeyTime(null);
      }
      setConfig(false);
      setIsOpen(!isOpen);
    };
    const toggleDaypick=()=>{
      setConfig(!isConfig);
      console.log(1);
      
    }
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
    const formatDate = (date) => {
      const year = date.getFullYear();
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const day = ("0" + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    };
  return (
    <div>
        <div onClick={toggleDaypick} className="device-card">
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
        {isConfig && (
            <div className="popup">
              <div className="popupDate">
                <h2>Choose day to show data</h2>
                <div className="date-picker-wrapper">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="yyyy-MM-dd"
                  />
                </div>
               <button className='buttonT' onClick={togglePopup}>Open data</button>
              </div>
            </div>
      )}
          {isOpen && (
          <div className="popup">
          <div className="popup-inner">
            <h2>{props.name} data preview {formattedDate}</h2>
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
