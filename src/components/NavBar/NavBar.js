import React from 'react';
import { CartWidget } from '../CartWidget/CartWidget'
import './NavBar.css'
import { Button } from '@chakra-ui/react'

export const NavBar = () => {



  return (
        <>
        <header className='menu'>
            <div className='logo'>
            </div>
            <div className='menuListado'>
                <Button colorScheme='blue'>Inicio</Button>
                <Button colorScheme='blue'>Productos</Button>
                <Button colorScheme='blue'>Nosotros</Button>
                <Button colorScheme='blue'>Contacto</Button>
            </div>
            <CartWidget />
        </header>
        </>
  );
};
