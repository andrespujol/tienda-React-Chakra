import React, { useState, useEffect } from 'react'

import './ItemListContainer.css'
import { ItemList } from './ItemList/ItemList'

export const ItemListContainer = ({greeting}) => {
    const [producto, setProducto] = useState([])


    const items = async() => {
        const data = await fetch('https://mocki.io/v1/1c56aa8a-d8a8-4bde-9081-e16b334aa8c8')
        const prod = await data.json()
        setProducto(prod)
    }
    useEffect(()=>{
        setTimeout(()=>{
            items()
        },2000)
    }, [])

  return (
    <div>
        <h1 className='titulo'>{greeting}</h1>

        <ItemList producto={producto} />
    </div>
  )
}
