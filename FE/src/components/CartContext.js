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

        const getSize = (list) => {
            let listSize = list.reduce((acc, item) => acc + item.productCount, 0)
            return listSize
        }

        getCart()
        existingCart = (existingCart) ? existingCart : []

        let existingCartSize = getSize(existingCart)

        this.state = {
            items: existingCart,
            size: existingCartSize,
            increment: (product) => {
                let itemsList = this.state.items

                // console.log("existingCart: ", existingCart)

                let isAdded = false

                for(let ind in itemsList){
                  // console.log("This is my item: ", itemsList[item], itemsList)
                  let item = itemsList[ind]
                  if(item.product.productId == product.productId){
                    itemsList[ind].productCount += 1
                    isAdded = true;
                    break
                  }
                }

                if(!isAdded){
                  itemsList.push({product, productCount:1})
                }

                this.setState({items: itemsList, size: getSize(itemsList)})
                this.state.saveToLocalCache()
            },
            saveToLocalCache: () => {
                localStorage.setItem('myCart', JSON.stringify(this.state.items))
            },
            deleteItemFromCart: async (product) => {
              // console.log("Product ID: ", product.productId, "\nBefore delete cart:  ", this.state.items)

              const productId = product.productId
              const productItem = this.state.items.filter((item) => (item.product.productId == productId))
              let size = productItem[0].productCount

              try {
                await fetch("http://localhost:8081/amazon/add-to-cart/delete",{
                  method: "DELETE",
                  body: JSON.stringify({
                    "userId": "962f9a88-426c-4c33-b50c-486dd4b8d6fe",
                    "productId": productId,
                    "productCount": size-1
                  }),
                  headers: {
                      "Content-type": "application/json; charset=UTF-8"
                  }
                })
                await getCart()
                this.setState({...this.state, items: existingCart, size: getSize(existingCart)})
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
