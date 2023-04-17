import React from 'react';
import {useDispatch} from 'react-redux';
import { auth } from '../firebase';
import { logout } from '../features/userSlice';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = ()=>{
   dispatch(logout());
   auth.signOut();
  }
  return (
   <div className="header">
    <div className="header_left">
     <img className="linkedin-image" src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"/>
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
     <HeaderOption onClick={logoutOfApp} title="Me" avatar={true}/>
    </div>
   </div>
  )
}

export default Header