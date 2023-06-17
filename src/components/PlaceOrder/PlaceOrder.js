import React, {useState, useEffect} from 'react'
import './PlaceOrder.css'
import { Grid, Rating, Paper } from '@mui/material'
import { Link, useParams } from "react-router-dom"

function PlaceOrder() {
    const [productDetails, setProductDetails] = useState([]);

    let {id} = useParams();

    useEffect(() => {
        // api call

        let list = [
            {id:288343456439, name: "iPhone11", rating: 4, ratingCount: 35000, price: 50999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021702"},
            {id:234883456439, name: "iPhone12", rating: 5, ratingCount: 45000, price: 40999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021264"},
            {id:234348856439, name: "iPhone13", rating: 3.5, ratingCount: 55000, price: 30999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282"},
            {id:234345677439, name: "iPhone14", rating: 4.5, ratingCount: 65000, price: 20999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616"},
            {id:234345643669, name: "iPhone15", rating: 4.5, ratingCount: 55000, price: 30999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282"},
            {id:234345643955, name: "iPhone16", rating: 4.5, ratingCount: 65000, price: 20999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616"},
        ]

        let filteredProducts = list.filter((product) => product.id==id)
        setProductDetails(filteredProducts[0]);
    }, [id])

  return (
    <div>
        <Grid container>
            <Grid item xs={5}>
                <img className="placeOrder__image"
                    src={productDetails.image} 
                    alt="product"
                />
            </Grid>
            <Grid item xs={4}>
                <div className="placeOrder__description ">
                    <div style={{  fontSize:"24px", lineHeight:"32px", fontWeight:500 }}>
                        {productDetails.name}
                    </div>
                    <div>
                        <Rating name="read-only" style={{ fontSize: "20px"}} value={productDetails.rating} readOnly />
                        {productDetails.ratingCount} ratings |
                        1000+ answered questions
                    </div>
                    <hr></hr>
                    <div>
                        <div className="textgap">Price: <span className="pricetag">{'\u20B9'+productDetails.price}</span></div>
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
                            <Link to="/checkout">
                                <button className="placeOrder__button addToCart">Add to cart</button>
                            </Link>
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