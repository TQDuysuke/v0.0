import React from 'react';
import './Device.scss';
import AddIcon from '@mui/icons-material/Add';

const Addnew = () => {
  return (
    <div className="device-card">
        <div className="addclick">
            <AddIcon sx={{ fontSize: 100 }} color="disabled" />
        </div>
    </div>
  );
};

export default Addnew;
