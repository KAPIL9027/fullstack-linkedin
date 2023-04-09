import React from 'react'
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageOption from './ImageOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
function Feed() {
  return (
    <div className="feed">
        <div className="feed__input__container">
        <div className="feed__input">
            <CreateIcon/>
            <form>
            <input className="feed__input__text" type="text"/>
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
    </div>
  )
}

export default Feed