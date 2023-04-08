import React from 'react'
import './Sidebar.css';
import { Avatar } from '@mui/material';
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-top">
        <img alt="background"
        src="https://images.pexels.com/photos/1287142/pexels-photo-1287142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
        <Avatar className="user-profile"/>
        <h2 className="">Kapil</h2>
        <h4 className="mail-id">sharmaakapil01@gmail.com</h4> 
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
            
        </div>
    </div>
  )
}

export default Sidebar