import React, { Component, createContext } from 'react'

export const CartContext = createContext()

export default class CartContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            size: 0,
            increment: (product) => {
                let itemsList = this.state.items
                itemsList.push(product)

                this.setState({items: itemsList, size: itemsList.length})
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
