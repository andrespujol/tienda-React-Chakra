import React, { useContext } from 'react'
import { RiShoppingBagLine } from 'react-icons/ri';
import CartContext from '../../Context/CartContext'
import { NavLink } from 'react-router-dom';
import './CartWidget.css'


export const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <div className='cart'>
        
        {getQuantity()!==0 && 
          <button >
            <NavLink to={'/Cart'} className='cartBtn'><RiShoppingBagLine /><span className='cartQuantity'>{getQuantity()}</span></NavLink>
          </button>}
    </div>
  )
}
