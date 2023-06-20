import React, {useState, useEffect, useContext} from 'react'
import './PlaceOrder.css'
import { Grid, Rating, Paper } from '@mui/material'
import { Link, useParams } from "react-router-dom"
import {CartContext} from '../CartContext'

function PlaceOrder() {
    const {increment} = useContext(CartContext)
    const [productDetails, setProductDetails] = useState([]);

    let {id} = useParams();

    const addToCart = () => {
        increment(productDetails)
    }

    useEffect(() => {
        // api call

        let list = [
            {
                id: 288343456439,
                name: "New Apple iPhone 10",
                rating: 4,
                ratingCount: "34,565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50,999",
                status: "In stock",
                soldby: "Appario Retail",
                image:
                    "https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021702",
                about: [
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 234883456439,
                name: "New Apple iPhone 11",
                rating: 4,
                ratingCount: "34,565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "40,999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021264",
                about: [
                    "Desription for iphone 11 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 234348856439,
                name: "iPhone12",
                rating: 4,
                ratingCount: "34,565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76,543",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282",
                about: [
                    "Desription for iphone 12 pro pmax -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 234345677439,
                name: "iPhone13",
                rating: 4,
                ratingCount: "6,37,357",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "50,999",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616",
                about: [
                    "Desription for iphone 13 -bla mini bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 234345643669,
                name: "iPhone14",
                rating: 4,
                ratingCount: "34,565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "76,543",
                status: "In stock",
                soldby: "Appario Retail",
                image:
                    "https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282",
                about: [
                    "Desription for iphone 12 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
            {
                id: 234345643955,
                name: "iPhone15",
                rating: 4,
                ratingCount: "34,565",
                review: "1000",
                emi: "2401",
                delivery: "Wednesday, Aug 18",
                price: "97,357",
                status: "In stock",
                soldby: "Darshita Electronics",
                image:
                    "https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616",
                about: [
                    "Desription for iphone 13 -bla bla",
                    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
                    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
                    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
                    "Face ID for secure authentication",
                ],
            },
        ]

        let filteredProducts = list.filter((product) => product.id===parseInt(id))
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
                        {/* Throwing error and displaying 0 stars in the rating????
                        <Rating name="read-only" style={{ fontSize: "20px"}} value={productDetails.rating} readOnly/> */}
                        <Rating name="read-only" style={{ fontSize: "20px"}} value={4} readOnly/>
                        {productDetails.ratingCount} ratings |
                        1000+ answered questions
                    </div>
                    <hr></hr>
                    <div>
                        <div className="textgap">Price: <span className="pricetag">{'\u20B9'+productDetails.price}</span></div>
                        <div className="textgap">FREE Delivery: <strong>Wednesday, Aug 18</strong></div>
                        <div className="textgap">EMI starts at {'\u20B9'}2,401. No Cost EMI available.</div>
                        <div style={{ color: "#007600", fontSize: "20px"}} className="textgap">In Stock</div>
                        <div className="textgap">Sold by <strong>{productDetails.soldby}</strong> and Fulfilled by Amazon.</div>
                    </div>
                    <div>
                        <br />
                        <div style={{fontSize:"24px" }} className="textgap">About this item</div>
                        <div>
                            <ul>
                                {   
                                    productDetails.about!==undefined ?
                                    productDetails.about.map ( (item, index) =>(
                                        <li key={index}>{item}</li>
                                    )) : <span></span>
                                }
                                </ul>
                            {/* <ul>
                                <li>6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display</li>
                                <li>Water and dust resistant (2 meters for up to 30 minutes, IP68)</li>
                                <li>Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps</li>
                                <li>12MP TrueDepth front camera with Portrait mode, 4K video, and Slo-Mo</li>
                                <li>Face ID for secure authentication</li>
                                <li>A13 Bionic chip with third-generation Neural Engine</li>
                                <li>Fast-charge capable</li>
                            </ul> */}
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
                            <button className="placeOrder__button addToCart" onClick={addToCart}>Add to cart</button>
                            <Link to="/checkout">
                                <button className="placeOrder__button buyNow">Buy Now</button>
                            </Link>
                        </div>
                    </div>
                </Paper> 
            </Grid>
        </Grid>
    </div>
  )
}

export default PlaceOrder