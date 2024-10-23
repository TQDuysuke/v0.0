import React from 'react';
import './User.scss';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
const User = (props) => {
  var UserName = 'User name';
  var Role = 'User';
  UserName = props.Profile.UserName;
  Role = props.Profile.Role;
  return (
    <div className='Ublock'>
    <div className='User'>
        <div className="Icon">
            <AccountCircleTwoToneIcon sx={{ fontSize: 44}}/>
        </div>
        <h3 className='UserName'>{UserName} <br/>
          <span className='Sub'>
              {Role}
          </span>
        </h3>
    </div>
    </div>
  )
}

export default User