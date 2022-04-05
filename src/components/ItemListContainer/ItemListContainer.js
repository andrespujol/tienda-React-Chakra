import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";
import { Spinner, Flex } from '@chakra-ui/react'
import { ItemList } from "../ItemList/ItemList";
import { getProducts, getProductsByCategory } from '../../data/asyncMock'


export const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams()

    useEffect(() => {
        if (categoryId) {
          setTimeout(() => {
            getProductsByCategory(categoryId).then((products) => {
                setProductos(products);
                console.log(products)
              setLoading(false);
            });
          }, 2000);
        } else {
          getProducts().then((products) => {
            setProductos(products);
            setLoading(false);
          });
        }
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
            <section className="products">
                <h1 className="titulo">{greeting}</h1>
                <ItemList productos={productos} />
            </section>
        );
};
