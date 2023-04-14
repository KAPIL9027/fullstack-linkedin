import {useSelector} from 'react-redux';

import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Post from './components/Post';
import {selectUser} from './features/userSlice';
import Login from './components/Login';
function App() {
  const user = useSelector(selectUser);
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
