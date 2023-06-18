import React, { Component, createContext } from 'react'

export const CartContext = createContext()

export default class CartContextProvider extends Component {
    constructor(props) {
        super(props)

        let existingCart = localStorage.getItem('myCart')
        existingCart = (existingCart) ? JSON.parse(existingCart) : []
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
