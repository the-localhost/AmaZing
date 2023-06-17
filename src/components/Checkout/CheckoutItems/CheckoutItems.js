import React from 'react'
import './CheckoutItems.css'

function CheckoutItems() {
  return (
    <div style={{ border: "1px solid #E7E7E7", display:"flex",  width:"95%", height:"250px", margin:"25px" }}>
        <div style={{ margin: "25px" }}>
            <img src="https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021702" alt="product" height="200px"/>
        </div>
        <div style={{ marginTop:"20px"}}>
            <div className="textgap" style={{ fontSize:"20px" }}>New Apple iPhone 12 (64GB) - Green</div>
            <div className="textgap" style={{ fontWeight:"bold" }}>{'\u20B9'}50,999</div>
            <div className="textgap">In Stock</div>
        </div>
    </div>
  )
}

export default CheckoutItems