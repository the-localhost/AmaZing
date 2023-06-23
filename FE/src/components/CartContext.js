import React, { Component, createContext } from 'react'

export const CartContext = createContext()

export default class CartContextProvider extends Component {
    constructor(props) {
        super(props)

        let existingCart = JSON.parse(localStorage.getItem('myCart'))
        // console.log("ExistingCartOld:  ", existingCart)


        const addToCart = async () => {
          try{
            const response = await fetch("http://localhost:8081/amazon/add-to-cart/show/962f9a88-426c-4c33-b50c-486dd4b8d6fe")
            const cartItems = await response.json()
            existingCart = cartItems.list
          } catch (error) {
              console.log("ERROR: ", error)
          } finally {
          }
        }

        addToCart()
        existingCart = (existingCart) ? existingCart : []

        // existingCart = addToCart().then(res => {return res})
        // let existingCart = localStorage.getItem('myCart')
        // existingCart = (existingCart) ? JSON.parse(existingCart) : addToCart().then(r => {return r})
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
