import React from 'react'
import './CheckoutItem.css'

function CheckoutItem({product, deleteMethod}) {
  const deleteItem = () => {
    deleteMethod(product.product)
  }
  return (
    <div style={{ border: "1px solid #E7E7E7", display:"flex",  width:"95%", height:"250px", margin:"25px" }}>
        <div style={{ margin: "25px" }}>
            <img src={product.product.imageURL} alt={product.product.name} height="200px"/>
        </div>
        <div style={{ marginTop:"20px"}}>
            <div className="textgap" style={{ fontSize:"20px" }}>{product.product.name}</div>
            <div className="textgap" style={{ fontSize:"18px", fontWeight:"bold" }}>{'\u20B9'}{product.product.price}</div>
            <div className="textgap" style={{ fontSize:"14px", color:"green" }}>In Stock</div>
            <div className="textgap" style={{ fontWeight:"bold"}}>Qty: {product.productCount}</div>
            <div className="textgap">
              <button className="checkoutItem__button delete" onClick={deleteItem}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutItem