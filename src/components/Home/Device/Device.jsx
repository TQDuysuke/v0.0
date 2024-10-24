import React from 'react';
import './Device.scss';

const Device = (props) => {
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
        <div className="device-card">
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
    </div>
  );
  
};

export default Device;
