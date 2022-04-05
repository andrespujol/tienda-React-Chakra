import React, { useContext } from 'react'
import './Cart.css'
import CartContext from '../../Context/CartContext'
import { Table, Thead, Tbody, Tr, Th, Td, Button, Box, Image, Grid, GridItem } from '@chakra-ui/react'
import { RiDeleteBinLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Cart = () => {

    const { cart, removeItem, clear, getTotal } = useContext(CartContext)

    if (cart.length === 0 ){ 
        return (
        <section className='cartEmpty'> 
            <p>It seems like your cart is empty.</p>    
            <Button 
                bgColor='#1C3144' 
                color='#fff'
                w='10rem'>
                <Link to={'/'}>Go home</Link>
            </Button>
        </section>
        )
    }else {
        return (
            <>
        <section className='cartFullMobile'>
        {cart.map((prod) =>
                <Grid
                h='200px'
                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                bg='#fff'
                w='90%'
                m=' 0 auto'
                mt='2rem'
                mb='2rem'
                borderRadius='5px'
                boxShadow='2xl' 
                >
                    <GridItem 
                        rowSpan={4} 
                        colSpan={2} 
                        backgroundImage={prod?.pictureUrl}
                        bgSize="100% 100%"
                        backgroundRepeat="no-repeat"/>
                    <GridItem  
                        colSpan={3} 
                        rowSpan={1} 
                        alignSelf='center'>
                        <h2 className='itemGrid'>Product: {prod?.title}</h2>
                    </GridItem> 
                    <GridItem  
                        colSpan={3} 
                        rowSpan={1} 
                        alignSelf='center'>
                        <h2 className='itemGrid'>Quantity: {prod?.quantity}</h2>
                    </GridItem> 
                    <GridItem  
                        colSpan={3} 
                        rowSpan={1} 
                        alignSelf='center'>
                        <h2 className='itemGrid'>P. unity: ${prod?.price}</h2>
                    </GridItem> 
                    <GridItem  
                        colSpan={3} 
                        rowSpan={1} 
                        alignSelf='center'>
                        <h2 className='itemGrid'>Subtotal: ${prod?.price*prod?.quantity}</h2>
                    </GridItem> 
                </Grid>
        )}
            <Box 
                w='90%' 
                m='0 auto' 
                display='flex' 
                flexDirection='column' 
                justifyContent='space-around' 
                alignItems='center'>
                <Box>
                    <Button onClick={(e)=> clear()} 
                        bgColor='#EF4444' 
                        color='#fff' 
                        mb='1rem'
                        w='10rem'>Delete cart
                    </Button>
                </Box>
                {/* <Box>
                    <Button 
                        bgColor='#1C3144' 
                        color='#fff'
                        mb='1rem'
                        w='10rem'>
                        <Link to={'/'} >Continue shopping</Link>
                    </Button>                
                </Box> */}
                <Box>
                    <Button onClick={(e)=> clear()} 
                        bgColor='#157145' 
                        color='#fff' 
                        mb='1rem'
                        w='10rem'>Let's make 'em yours!
                    </Button>
                </Box>
                <Box>
                    <h2>Total: ${getTotal()}</h2>
                </Box>
            </Box>
        </section>  
        <section className='cartFull'>
            <Table w='80%'>
            <Thead>
            <Tr>
            <Th>Product</Th>
            <Th>Quantity</Th>
            <Th>P. unity </Th>
            <th>Subtotal</th>
            </Tr>
            </Thead>
            {cart.map((prod) => 
                <Tbody >
                    <Tr>
                    <Td>{prod?.title}</Td>
                    <Td >{prod?.quantity}</Td>
                    <Td>${prod?.price}</Td>
                    <Td textAlign='center'>${prod?.price*prod?.quantity}</Td>
                    <Td><Button onClick={(e)=> removeItem(prod?.id)} ><RiDeleteBinLine colorScheme='pink'/></Button></Td>
                    </Tr>
                </Tbody>
            )}
            </Table>
            <Box 
                w='20%' 
                display='flex' 
                flexDirection='column' 
                justifyContent='space-around' 
                alignItems='center'>
                <Box>
                    <Button onClick={(e)=> clear()} 
                        bgColor='#EF4444' 
                        color='#fff' 
                        mb='1rem'
                        w='10rem'>Delete cart
                    </Button>
                </Box>
                {/* <Box>
                    <Button 
                        bgColor='#1C3144' 
                        color='#fff'
                        w='10rem'>
                        <Link to={'/'}>Continue shopping</Link>
                    </Button>                
                </Box> */}
                <Box>
                    <Button onClick={(e)=> clear()} 
                        bgColor='#157145' 
                        color='#fff' 
                        mb='1rem'
                        w='10rem'>Let's make 'em yours!
                    </Button>
                </Box>
                <Box>
                    <h2>Total: ${getTotal()}</h2>
                </Box>
            </Box>
        </section>
        </>

    )
    }
        
        }
