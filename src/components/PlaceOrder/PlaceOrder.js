import React from 'react'
import './PlaceOrder.css'
import { Grid, Rating, Paper } from '@mui/material'

function PlaceOrder() {
  return (
    <div>
        <Grid container>
            <Grid item xs={5}>
                <img className="placeOrder__image"
                    src="https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021702" 
                    alt="product"
                />
            </Grid>
            <Grid item xs={4}>
                <div className="placeOrder__description ">
                    <div style={{  fontSize:"24px", lineHeight:"32px", fontWeight:500 }}>
                        New Apple iPhone 11 (64GB) - Green
                    </div>
                    <div>
                        <Rating name="read-only" style={{ fontSize: "20px"}} value={4} readOnly />
                        35,990 ratings |
                        1000+ answered questions
                    </div>
                    <hr></hr>
                    <div>
                        <div className="textgap">Price: <span className="pricetag">{'\u20B9'}50,999.00</span></div>
                        <div className="textgap">FREE Delivery: <strong>Wednesday, Aug 18</strong></div>
                        <div className="textgap">EMI starts at {'\u20B9'}2,401. No Cost EMI available.</div>
                        <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">In Stock</div>
                        <div className="textgap">Sold by <strong>Appario Retail</strong> and Fulfilled by Amazon.</div>
                    </div>
                    <div>
                        <br />
                        <div style={{fontSize:"24px" }} className="textgap">About this item</div>
                        <div>
                            <ul>
                                <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                                <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                                <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                                <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
                                <li>Face ID for secure authentication</li>
                                <li>A13 Bionic chip with third-generation Neural Engine</li>
                                <li>Fast-charge capable</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={3}>
                <Paper variant="outlined" className="placeOrder__order">
                    <div>
                            <div><strong>Without Exchange</strong></div>
                            <div>50,999</div>
                            <div style={{ marginTop: "10px"}}><strong>Add an Accessory</strong></div>
                            <div>
                                <label><input type="checkbox" ></input>Apple Airpods</label><br></br>
                                <label><input type="checkbox" ></input>Apple 20W USB Power Adapter</label>
                            </div>
                        <div > 
                            <button className="placeOrder__button addToCart">Add to cart</button>
                            <button className="placeOrder__button buyNow">Buy Now</button>
                        </div>
                    </div>
                </Paper> 
            </Grid>
        </Grid>
    </div>
  )
}

export default PlaceOrder