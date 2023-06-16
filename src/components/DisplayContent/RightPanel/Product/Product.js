import React from 'react'
import './Product.css'
import Rating from '@mui/material/Rating';

function Product({prod}) {
  return (
    <div className="product__main">
        <div className="product__image">
            <img 
                src={prod.image}
                alt="product"
                height="300px" 
            />
            </div>
        <div className="product__name">
            {prod.name}
        </div>
        <div className="product__rating">
            <Rating name="read-only" style={{ fontSize: "16px", lineHeight: "20px"}} value={4} readOnly />
            {prod.rating}
        </div>
        <div className="product__price">
            {prod.price}
        </div>
    </div>
  )
}

export default Product