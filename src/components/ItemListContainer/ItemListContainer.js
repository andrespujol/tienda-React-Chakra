import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import { Spinner, Flex } from '@chakra-ui/react'
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = ({ greeting }) => {
    const [producto, setProducto] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams()

    useEffect(() => {
        setTimeout(() => {
        const items = async () => {
            const data = await fetch(
            "https://mocki.io/v1/1c56aa8a-d8a8-4bde-9081-e16b334aa8c8"
            );
            const prod = await data.json();
            setProducto(prod);
            setLoading(false)
        };
        items();
        }, 2000);
    }, [categoryId]);

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
            <div>
                <h1 className="titulo">{greeting}</h1>
                <ItemList producto={producto} />
            </div>
        );
};
