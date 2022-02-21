import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import mochila from '../images/mochila.png'

import CardProduct from "./CardProduct";

const Productos = () => {
  const products = [
    {id:1, price: '$500',tittle:'Mochila', image:mochila, info:'Laborum iste officiis quod et consectetur ipsa magnam quam eaorem ipsum dolor sit amet consectetur, adipisicing elit.'},
    {id:2, price: '$500',tittle:'Mochila', image:mochila, info:'Laborum iste officiis quod et consectetur ipsa magnam quam eaorem ipsum dolor sit amet consectetur, adipisicing elit.'},
    {id:3, price: '$500',tittle:'Mochila', image:mochila, info:'Laborum iste officiis quod et consectetur ipsa magnam quam eaorem ipsum dolor sit amet consectetur, adipisicing elit.'},
  ]
  return (
    <Box color='white' paddingTop="3rem" w="full" bg='black'>
      <Flex flexDirection="column" gap="2.5rem">
        <Heading fontSize="2rem" textAlign="center">
          Productos Mas Vendidos
        </Heading>
        <Flex px="5rem" gap="2rem">
          <CardProduct  products={products}/>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Productos;
