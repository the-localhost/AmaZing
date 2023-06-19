import React from 'react'
import './DisplayContent.css'
import LeftPanel from './LeftPanel/LeftPanel'
import RightPanel from './RightPanel/RightPanel'

function DisplayContent() {
  return (
    <div className="displayContent__main">
        <div><LeftPanel /></div>
        <div><RightPanel /></div>
    </div>
  )
}

export default DisplayContent