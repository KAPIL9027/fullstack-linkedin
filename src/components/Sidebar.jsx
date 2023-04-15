import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Sidebar.css';
import { Avatar } from '@mui/material';
function Sidebar() {
    const user = useSelector(selectUser);
    const createRecent = (topic)=>{
    return (<div className="recent">
        <span className="side__hash">#</span>
        <p>{topic}</p>
         </div>);
    }
  return (
    <div className="sidebar">
        <div className="sidebar-top">
        <img alt="background"
        src="https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Avatar src={user.profileUrl}className="user-profile">{user.email[0]}</Avatar>
        <h2 className="">{user.displayName}</h2>
        <h4 className="mail-id">{user.email}</h4> 
        </div>
        <div className="sidebar-stats">
            <div className="sidebar-stat">
            <h3 className="stat-heading">
                Who viewed you
            </h3>
            <h4 className="stat-number">
                2,345
            </h4>
            </div>

            <div className="sidebar-stat">
            <h3 className="stat-heading">
                Views on Post
            </h3>
            <h4 className="stat-number">
                2,345
            </h4>
            </div>
            
        </div>
        <div className="sidebar-bottom">
            <p className="recent-heading">Recent</p>
            {createRecent("react.js")}
            {createRecent("angular.js")}
            {createRecent("vue.js")}
            {createRecent("node.js")}
        </div>
    </div>
  )
}

export default Sidebar