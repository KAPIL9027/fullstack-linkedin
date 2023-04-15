import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './HeaderOption.css';
import { Avatar } from '@mui/material';
function HeaderOption({title,Icon,avatar,onClick}) {
  const user = useSelector(selectUser);
  return (
    <div className="icon" onClick={onClick}>
     {Icon && <Icon className="home-icon"/>}
    {avatar && (<Avatar className="avatar" src={user?.profileUrl}>{user?.email[0]}</Avatar>)}
     <h3 className="header-icon-text">{title}</h3>
    </div>
  )
}

export default HeaderOption