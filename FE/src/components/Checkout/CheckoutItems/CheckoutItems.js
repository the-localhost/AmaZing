import React from 'react'
import './CheckoutItems.css'

function CheckoutItems({product}) {
  return (
    <div style={{ border: "1px solid #E7E7E7", display:"flex",  width:"95%", height:"250px", margin:"25px" }}>
        <div style={{ margin: "25px" }}>
            <img src={product.image} alt={product.name} height="200px"/>
        </div>
        <div style={{ marginTop:"20px"}}>
            <div className="textgap" style={{ fontSize:"20px" }}>{product.name}</div>
            <div className="textgap" style={{ fontWeight:"bold" }}>{'\u20B9'}{product.price}</div>
            <div className="textgap">In Stock</div>
        </div>
    </div>
  )
}

export default CheckoutItems