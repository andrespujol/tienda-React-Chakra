import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { ItemCount } from '../ItemCount/ItemCount'
import './Item.css'

export const Item = ({ title, description, pictureUrl, price, id, stock }) => {



    
    const onAdd = (cantidad) => {
        console.log(`enviaste ${cantidad}`)
    }
  return (
    // Sample card from Airbnb
    
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
);
};
