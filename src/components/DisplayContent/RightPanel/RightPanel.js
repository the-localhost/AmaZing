import React, {useState, useEffect} from 'react'
import './RightPanel.css'
import Product from './Product/Product'

function RightPanel() {
    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        // api call
        let list = [
            {name: "Phone1", rating: 35000, price: 50999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021702"},
            {name: "Phone2", rating: 45000, price: 40999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021264"},
            {name: "Phone3", rating: 55000, price: 30999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282"},
            {name: "Phone4", rating: 65000, price: 20999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616"},
        ]

        setListOfProducts(list);
    }, [])
     
  return (
    <div className="rightSide__main">
        { listOfProducts.map((product, index) => (
            <Product key={index} prod={product}/>
        ))}
        
    </div>
  )
}

export default RightPanel