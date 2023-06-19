import React from 'react'
import './AdvertisementOne.css'

export default function AdvertisementOne(props) {
  return (
    <div className="advertisementOne">
        <div className="advertisementOne__header">
            Up to 70% off | Electronics clearance store
        </div>
        <div className="advertisementOne__body">
            <img src="https://ik.imagekit.io/gaganEcomm/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1681641013360" 
                alt="Electronics"
                width="300px"
            />
        </div>
        <div className="advertisementOne__footer">
            See more
        </div>
    </div>
  )
}