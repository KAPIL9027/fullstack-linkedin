import React from 'react'
import './imageOption.css';
function ImageOption({ImageIcon,title,color}) {
  return (
    <div className="imageOption">
     <ImageIcon style={{color: color}}/>
     <h4>{title}</h4>
    </div>
  )
}

export default ImageOption