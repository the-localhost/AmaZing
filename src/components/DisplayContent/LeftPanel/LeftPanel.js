import React from 'react'
import './LeftPanel.css'

function LeftPanel() {
  return (
    <div className="leftSide__main">
        <div className="leftSide__header">
            Brand
        </div>
        <div className="leftSide__brandNames">
            <label className="brandName">
                <input type="checkbox" value="Apple" /> Apple
            </label>
            <label className="brandName">
                <input type="checkbox" value="Samsung" /> Samsung   
            </label>
            <label className="brandName">
                <input type="checkbox" value="Mi" /> Mi
            </label>
            <label className="brandName">
                <input type="checkbox" value="Oppo" /> Oppo
            </label>
        </div>
    </div>
  )
}

export default LeftPanel