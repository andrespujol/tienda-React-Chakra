import React from 'react'
import { Item } from '../Item/Item'
import './ItemList.css'

export const ItemList = ({productos}) => {


  return (
    <section className='cardSection'>
          {productos.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </section>
  )
}
