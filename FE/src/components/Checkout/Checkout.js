import React, { useContext } from 'react'
import './Checkout.css'
import { Grid } from '@mui/material'
import CheckoutItems from './CheckoutItems/CheckoutItems'
import { CartContext } from '../CartContext'

function Checkout() {
    const {items} = useContext(CartContext)
    let totalCartPrice = items.reduce((total, item) => total + item.price, 0)

  return (
    <div className="checkout__main">
        <Grid container>
            <Grid item xs={9}>
                <div className="checkout__container">
                    <div style={{ fontSize:"30px", fontWeight:"500", padding:"20px 0 0 20px"}}>Shopping Cart</div>
                    <div>
                        {
                            items.map((item, index) => 
                                <CheckoutItems key={index} product={item} />
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