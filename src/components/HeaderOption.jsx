import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@mui/material';
function HeaderOption({title,Icon,avatar,onClick}) {
  return (
    <div className="icon" onClick={onClick}>
     {Icon && <Icon className="home-icon"/>}
    {avatar && <Avatar className="avatar" src={avatar}/>}
     <h3 className="header-icon-text">{title}</h3>
    </div>
  )
}

export default HeaderOption