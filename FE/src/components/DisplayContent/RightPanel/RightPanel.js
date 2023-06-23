import React, {useState, useEffect} from 'react'
import './RightPanel.css'
import Product from './Product/Product'
import { Link } from "react-router-dom"

function RightPanel() {
    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        // api call
        // let list = [
        //     {id:288343456439, name: "New Apple iPhone 10", rating: 4, ratingCount: "34,565", price: "50,999", image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021702"},
        //     {id:234883456439, name: "New Apple iPhone 11", rating: 5, ratingCount: "34,565", price: "40,999", image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021264"},
        //     {id:234348856439, name: "iPhone12", rating: 3.5, ratingCount: "34,565", price: "76,543", image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282"},
        //     {id:234345677439, name: "iPhone13", rating: 4.5, ratingCount: "6,37,357", price: "50,999", image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616"},
        //     {id:234345643669, name: "iPhone14", rating: 4.5, ratingCount: "34,565", price: "76,543", image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282"},
        //     {id:234345643955, name: "iPhone15", rating: 4.5, ratingCount: "34,565", price: "97,357", image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616"},
        // ]

        // setListOfProducts(list);
        const getProducts = async () => {
            try{
                const response = await fetch("http://localhost:8083/amazon/products/get-all-products")
                const products = await response.json()
                console.log("Products::: ", products)
                setListOfProducts(products);
            } catch (error) {
                console.log("ERROR: ", error)
            }
        }
        
        getProducts()
    }, [])
     
  return (
    <div className="rightSide__main">
        { listOfProducts.map((product, index) => (
            <Link key={index} to={`/order/`+product.id} >
                <Product key={index} prod={product}/>
            </Link>
        ))}
        
    </div>
  )
}

export default RightPanel