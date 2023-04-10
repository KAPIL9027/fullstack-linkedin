import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material';
import ImageOption from './ImageOption';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

function Post({name,description,message}) {
  return (
    <div className="post">
        <div className="post__header">
          <Avatar/>
        <div className="post__header__text">
        <h4>{name}</h4>
          <h5>{description}</h5>
        </div>
        </div>
        <div className="post__body">
          {message}
        </div>
        <div className="post-btns">
          <ImageOption ImageIcon={ThumbUpIcon} title="Like" color="gray"/>
          <ImageOption ImageIcon={CommentIcon} title="Comment" color="gray"/>
          <ImageOption ImageIcon={ShareIcon} title="Share" color="gray"/>
          <ImageOption ImageIcon={SendIcon} title="Send" color="gray"/>
        </div>
    </div>
  )
}

export default Post