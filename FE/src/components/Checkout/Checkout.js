import React, { useContext, useEffect } from 'react'
import './Checkout.css'
import { Grid } from '@mui/material'
import CheckoutItem from './CheckoutItem/CheckoutItem'
import { CartContext } from '../CartContext'

function Checkout() {
    let {items, deleteItemFromCart} = useContext(CartContext)
    let totalCartPrice = items.reduce((total, item) => total + item.price, 0)

    useEffect(() => {}, [items])

    const deleteItem = (product) => {
        deleteItemFromCart(product)
    }

  return (
    <div className="checkout__main">
        <Grid container>
            <Grid item xs={9}>
                <div className="checkout__container">
                    <div style={{ fontSize:"30px", fontWeight:"500", padding:"20px 0 0 20px"}}>Shopping Cart</div>
                    <div className="checkout__cartItems">
                        {items.length==0 && 
                            <div className="emptyCart">Your Amazon Cart is empty</div>
                        }
                        {
                            items.map((item, index) => 
                                <CheckoutItem key={index} product={item} deleteMethod={deleteItem}/>
                            )
                        }
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div style={{width:"300px", height:"200px", marginTop:"25px", padding:"20px", backgroundColor:"white"}}>
                    <div style={{ fontSize:"26px"}}>Subtotal ({items.length} items): <strong>{'\u20B9'}{totalCartPrice}</strong></div>
                    <div style={{ paddingTop:"25px" }}>
                        <button className="checkout__button">Proceed to Buy</button>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default Checkout