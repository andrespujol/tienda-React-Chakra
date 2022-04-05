import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)



    const increase = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const decrease = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }
    const confirm = () => {
        if(count > 0) {
            onAdd(count)
        }else {
            console.log('no hay stock')
        }
    }
  return (
    <section className='countContainer'>
        <h4 className='count'>{count}</h4>
        <Button  className='btnIncDec btnInc' onClick={increase}>+</Button>
        <Button  className='btnIncDec btnDec' onClick={decrease}>-</Button>
        <Button id='btnConfirm' onClick={() => confirm(count)}>Add to cart</Button>
    </section>
  )
}
