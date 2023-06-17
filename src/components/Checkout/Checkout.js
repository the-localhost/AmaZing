import React from 'react'
import './Checkout.css'
import { Grid } from '@mui/material'
import CheckoutItems from './CheckoutItems/CheckoutItems'

function Checkout() {
  return (
    <div className="checkout__main">
        <Grid container>
            <Grid item xs={9}>
                <div className="checkout__container">
                    <div style={{ fontSize:"30px", fontWeight:"500", padding:"20px 0 0 20px"}}>Shopping Cart</div>
                    <div>
                        <CheckoutItems />
                        <CheckoutItems />
                        <CheckoutItems />
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <div style={{width:"300px", height:"200px", marginTop:"25px", padding:"20px", backgroundColor:"white"}}>
                    <div style={{ fontSize:"26px"}}>Subtotal (2 items): <strong>{'\u20B9'}1,01,998.00</strong></div>
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