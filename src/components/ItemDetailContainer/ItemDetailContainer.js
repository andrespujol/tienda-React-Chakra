import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { Spinner, Flex } from '@chakra-ui/react'
import { getProduct } from '../../data/asyncMock'


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams()


    useEffect(() => {
        getProduct(productId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
        return (() => {
            setProduct()
        })

    }, [productId])
    


    return loading ? 
        <Flex align="center" justify="center">
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            mt="5rem"
            />
        </Flex> : 
        (
            <div className="containerDetail">            
            <ItemDetail {...product}/>
        </div>) 
        
};
