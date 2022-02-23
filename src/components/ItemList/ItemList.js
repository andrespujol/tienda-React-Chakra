import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({producto}) => {


  return (
    <section className='cardSection'>
        {producto.map(item => (<Item key={item.id} {...item}/>))}
    </section>
  )
}
