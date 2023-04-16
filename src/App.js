import {useSelector,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login,logout } from './features/userSlice';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

import Post from './components/Post';
import {selectUser} from './features/userSlice';
import Login from './components/Login';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth)
      {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      }
      else
      {
        dispatch(logout());
      }
    })
  },[])
  return (
   <div className="app">
    <Header/>
    {!user ? (
      <Login/> ):
      (
        <div className="appbar">
    <Sidebar/>
    <Feed/>
    
    </div>
      )
    }
   </div>
  );
}

export default App;
