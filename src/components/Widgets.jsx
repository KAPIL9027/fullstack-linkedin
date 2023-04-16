import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const widget = ({title,subtitle})=>(
          <div className="widget">
            <div className="widget-left">
              <FiberManualRecordIcon className="dot"/>
            </div>
            <div className="widget-right">
              <h3 className="widget-news-heading">
                {title}
              </h3>
              <p className="widget-news-subtitle">
                {subtitle}
              </p>
            </div>
          </div>
    );
  return (
    <div className="widgets">
        <div className="widgets-top">
            <h2 className="widgets-heading">LinkedIn News</h2>
            <InfoIcon className="info-icon"/>
        </div>
        {widget({title: "Google Layoffs",subtitle:"top news - 568 readers"})}
            {widget({title: "Amazon Layoffs",subtitle:"top news - 568 readers"})}
            {widget({title: "Google Bard",subtitle:"top news - Google's desperate move - 568 readers"})}
            {widget({title: "ChatGpt Terminator is here?",subtitle:"top news - 900 readers"})}
            {widget({title: "Is end of Software Engineers Near?",subtitle:"top news - 3000 readers"})}
            {widget({title: "Engineer = ML Engineer only in future?",subtitle:"top news - 6000 readers"})}
            {widget({title: "Silicon Valley Bank Collapse!!!",subtitle:"top news - 1000 readers"})}
    </div>
  )
}

export default Widgets