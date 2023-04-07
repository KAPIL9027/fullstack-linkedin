import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  return (
   <div className="header">
    <div className="header_left">
     <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/>
     <div className="header_search">
     <SearchIcon className="bar"/>
     <input className="search-bar" type="text"/>
     </div>
    </div>
    <div className="header_right">
     <HeaderOption title="Home"
     Icon={HomeIcon}/>
     <HeaderOption title="My Network"
     Icon={SupervisorAccountIcon}/>
     <HeaderOption title="Jobs"
     Icon={BusinessCenterIcon}/>
     <HeaderOption title="Messaging"
     Icon={ChatIcon}/>
     <HeaderOption title="Notifications"
     Icon={NotificationsIcon}/>
     <HeaderOption title="Me" avatar="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.806864528.1676277689&semt=sph"/>
    </div>
   </div>
  )
}

export default Header