import React, { useState, useContext } from "react";
import { Box, Button } from '@chakra-ui/react'
import './Item.css'
import { Link } from "react-router-dom";
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import CartContext from '../../Context/CartContext'
// import { WishItems } from "../WishItems/WishItems";

export const Item = ({ id, title, price, pictureUrl, category, description }) => {
  const [quantity, setQuantity] = useState(0)
  const { clearWished, wishItem } = useContext(CartContext)

  const likedItem = (product) => {
    setQuantity(product)
    const desiredProduct = {
      id,
        title,
        price,
        quantity,
        pictureUrl,
        category
    }
    console.log(desiredProduct)
    wishItem( desiredProduct, quantity)
    // if (quantity > 0) {

    // }else {
    //   clearWished()
    // }
}

  return (
    // Sample card from Airbnb
      <Box 
        boxShadow='2xl' 
        w="90%"
        m="0 auto"  
        mb="1rem"
        borderRadius="5px"
        bg='white'
        display="flex" 
        alignItems="center" 
        justifyContent="center">
        <article className="card">
            <Link to={`/detail/${id}`}>
              <img src={pictureUrl} alt={title} className='cardImg'></img> 
            </Link>
          <div className="card-secOne">
            <p className="card-title">{title}</p>
            {/* <Button onClick={()=> likedItem()}>{quantity === 0 ? <FcLikePlaceholder /> :<FcLike /> }</Button> */}
          </div>
          <div className="card-secTwo">
            <p className="card-price">${price}</p>
            <button className="card-detail"><Link to={`/detail/${id}`}>View product</Link></button>
          </div>
        </article>
      </Box>
);
};
