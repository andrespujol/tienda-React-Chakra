import React, { useContext, useState } from 'react'
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import { ItemCount } from '../ItemCount/ItemCount';
import CartContext from '../../Context/CartContext'
import './ItemDetail.css'
import { Link } from 'react-router-dom';

export const ItemDetail = ({ id, title, price, pictureUrl, category, description }) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        setQuantity(quantity)
        const productToAdd = {
            id,
            title,
            price,
            quantity,
            pictureUrl,
            category
        }
        if(quantity > 0) {
            addItem( productToAdd, quantity)
        }

    }

    return quantity > 0 ? 
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className="card">
        <Image className="cardImg" src={pictureUrl} alt={title} />

        <Box p="6">
            <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
                New
            </Badge>
            <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
            ></Box>
            </Box>

            <Box
            mt="1"
            mb="3"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            borderBottom="1px"
            borderColor="teal"
            >
            {title}
            </Box>

            <Box>
            <Button id='btnGoCart' size='md'>
                <Link to={'/Cart'}>Go to cart</Link>
            </Button>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
                <Button id='btnContinueShopping' size='lg'>
                <Link to={'/'}>Continue shopping</Link>
                </Button>
            </Box>
        </Box>
    </Box>
    : 

    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" className="card">
        <Image className="cardImg" src={pictureUrl} alt={title} />

        <Box p="6">
            <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
                New
            </Badge>
            <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
            ></Box>
            </Box>

            <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            >
            {title}
            </Box>

            <Box>
            {`$ ${price}`}
            <Box as="span" color="gray.600" fontSize="sm">
            </Box>
            </Box>

            <Box display="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm" className="cardDesc">
                {`Descripción: ${description}`}
            </Box>
            </Box>
        </Box>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </Box>
  
}
