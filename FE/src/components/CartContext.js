import React, { Component, createContext } from 'react'

export const CartContext = createContext()

export default class CartContextProvider extends Component {
    constructor(props) {
        super(props)

        let existingCart = JSON.parse(localStorage.getItem('myCart'))


        const getCart = async () => {
          try{
            const response = await fetch("http://localhost:8081/amazon/add-to-cart/show/962f9a88-426c-4c33-b50c-486dd4b8d6fe")
            const cartItems = await response.json()
            existingCart = cartItems.list
            localStorage.setItem('myCart', JSON.stringify(existingCart))
            // console.log("EXCart", existingCart)
          } catch (error) {
              console.log("ERROR: ", error)
          } finally {
          }
        }        

        getCart()
        existingCart = (existingCart) ? existingCart : []

        let existingCartSize = existingCart.length

        this.state = {
            items: existingCart,
            size: existingCartSize,
            increment: (product) => {
                let itemsList = this.state.items
                itemsList.push(product)

                this.setState({items: itemsList, size: itemsList.length})
                this.state.saveToLocalCache()
            },
            saveToLocalCache: () => {
                localStorage.setItem('myCart', JSON.stringify(this.state.items))
            },
            deleteItemFromCart: async (product) => {
              console.log("Product ID: ", product.productId, "\nBefore delete cart:  ", this.state.items)
              try {
                await fetch("http://localhost:8081/amazon/add-to-cart/delete",{
                  method: "DELETE",
                  body: JSON.stringify({
                    "userId": "962f9a88-426c-4c33-b50c-486dd4b8d6fe",
                    "productId": product.productId
                  }),
                  headers: {
                      "Content-type": "application/json; charset=UTF-8"
                  }
                })
                await getCart()
                this.setState({...this.state, items: existingCart, size: existingCart.length})
              } catch (error) {
                console.log("ERROR: ", error)
              }
            }
        }
    }
  render() {
    return (
      <CartContext.Provider value={{ ...this.state, ...this.increment}}>
        {this.props.children}
      </CartContext.Provider>
    )
  }
}
