import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Post from './components/Post';
function App() {
  return (
   <div className="app">
    <Header/>
    <div className="appbar">
    <Sidebar/>
    <Feed/>
    </div>
   </div>
  );
}

export default App;
