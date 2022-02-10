import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import './ItemCount.css'

export const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(0)
    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1)
        }
    }
    const decrementar = () => {
        if(contador >= initial) {
            setContador(contador - 1)
        }
    }
    const confirmar = () => {
        if(contador > 0) {
            onAdd(contador)
        }else {
            console.log('no hay stock')
        }
    }
  return (
    <section className='contador'>
        <h4 className='valorContador'>{contador}</h4>
        <Button  className='btnIncDec btnInc' onClick={incrementar}>+</Button>
        <Button  className='btnIncDec btnDec' onClick={decrementar}>-</Button>
        <Button colorScheme='blue' className='btnAgregar' onClick={confirmar}>Agregar</Button>
    </section>
  )
}
