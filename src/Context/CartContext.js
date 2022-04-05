import React, { createContext, useState } from 'react'



const Context =createContext();
// const { Provider } = Context

export const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [wish, setWish] = useState([])

  const addItem = (productToAdd, quantity) => {
  const newObj = {
    ...productToAdd,
    quantity
  }
  if(isInCart(newObj.id)){
      cart.map(el => {
        if(el.id === newObj.id)  {
          el.quantity += newObj.quantity
        }
        console.log(el)
        return(el)
        })

    }else {
      setCart([...cart, newObj])
      
    }
  }
  const getTotal = () => {
    let total = 0
    cart.forEach(prod => {
        total = total + prod.price * prod.quantity
    })
    return total
  }

  const getQuantity = () => {
      let count = 0
      cart.forEach(prod => {
          count = count + prod.quantity
      })
      return count
  }
  const isInCart = (id) => {
    return cart.some(el => el.id === id)
  }

  const removeItem = (id) => {
    const deleteItem = cart.filter(el => el.id !== id)
    setCart([...deleteItem]);
  }
  const clear = () => {
    setCart([])
  }

  const wishItem = (desiredProduct, quantity) => {
    const newObj = {
      ...desiredProduct,
      quantity
    }
    if(wished(newObj.id)){
      setWish([])
      }else {
        setWish([...wish, newObj])
        
      }
    }
    const wished = (id) => {
      return wish.some(el => el.id === id)
    }
    const clearWished = () => {
      setWish([])
    }
    const removeWished = (id) => {
      const deleteWished = wish.filter(el => el.id !== id)
      setWish([...deleteWished]);
    }
  return (
    <Context.Provider value={{
      cart,
      wish,
      addItem,
      removeItem,
      clear,
      getQuantity,
      getTotal,
      wishItem,
      clearWished,
      removeWished
    }}> 
      {children}
    </Context.Provider>
  )
}

export default Context