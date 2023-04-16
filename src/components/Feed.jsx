import {useState,React,useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageOption from './ImageOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Widgets from './Widgets';
import Post from './Post.jsx';
import {db}  from '../firebase.js';
import firebase from 'firebase/compat/app';
import FlipMove from 'react-flip-move';
function Feed() {
  const [posts,setPosts] = useState([]);
  const [input,setInput] = useState("");
  const user = useSelector(selectUser)
  useEffect(()=>{
  db.collection("posts").
  orderBy("timestamp","desc").
  onSnapshot((snapshot)=>
  setPosts(
    snapshot.docs.map((doc)=> (
      {
        id: doc.id,
        data: doc.data()
      }
    ))
    
  ))
  
  },[]);

  const sendPost = (e)=>{
   e.preventDefault();
   db.collection("posts").add({
    name: user.displayName,
    description: user.email,
    message: input,
    photoUrl: user.profileUrl || "",
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
   });
   setInput('');
  }
  return (
    <div className="feed">
        <div className="feed__input__container">
        <div className="feed__input">
            <CreateIcon/>
            <form onSubmit={sendPost}>
            <input value={input} onChange={(e)=> setInput(e.target.value)}
             className="feed__input__text" type="text"/>
            <button className="feed-btn" type="submit"></button>
            </form>
        </div>
        <div className="image__options">
        <ImageOption ImageIcon={ImageIcon} title="Photo" color="#70B5F9"></ImageOption>
        <ImageOption ImageIcon={SubscriptionsIcon} title="Video" color="#E7A33E"></ImageOption>
        <ImageOption ImageIcon={EventNoteIcon} title="Event" color="#C0CBCD"></ImageOption>
        <ImageOption ImageIcon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"></ImageOption>
        </div>
        </div>
        
        <div className="posts">
        <FlipMove>
          {posts.map((post)=> (
            
           <Post key={post.id} name={post.data.name} description={post.data.description} message={post.data.message}
           photoUrl={post.photoUrl} 
            />
          ))}
          </FlipMove>
        </div>
        
       
    </div>
  )
}

export default Feed