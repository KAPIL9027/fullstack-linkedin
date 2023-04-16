import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const widget = ({title,subtitle})=>{
          <div className="widget">
            <div className="widget-left">
              <FiberManualRecordIcon/>
            </div>
            <div className="widget-right">
              <h3 className="widget-heading">
                {title}
              </h3>
              <p className="widget-subtitle">
                {subtitle}
              </p>
            </div>
          </div>
    }
  return (
    <div className="widgets">
        <div className="widgets-top">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        
    </div>
  )
}

export default Widgets