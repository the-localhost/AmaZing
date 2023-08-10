import React from 'react'
import './Product.css'
import Rating from '@mui/material/Rating';

function Product({prod}) {
  return (
    <div className="product__main">
        <div className="product__image">
            <img 
                src={prod.imageURL}
                alt="product"
                height="300px" 
            />
            </div>
        <div className="product__name">
            {prod.name}
        </div>
        <div className="product__rating">
            <Rating name="read-only" style={{ fontSize: "16px", lineHeight: "20px"}} value={prod.rating} readOnly />
            {prod.ratingCount}
        </div>
        <div className="product__price">
            <span style={{ lineHeight: "24px" }}>
                <span style={{ fontSize: "13px", verticalAlign: "top" }}>{'\u20B9'}</span>
                <span>{prod.price}</span>
            </span>
        </div>
    </div>
  )
}

export default Product