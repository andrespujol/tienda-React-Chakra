import React, { useContext } from 'react'
import CartContext from '../../Context/CartContext'
// import { Box, Button } from '@chakra-ui/react'

export const WishList = ({ likedItem }) => {

    const { wish } = useContext(CartContext)
  return (
        <div>
        <p>Wishlist</p>
        {wish.map((prod) => 
        <p>{prod.title}</p> 
        )}
        </div>
  )
}
