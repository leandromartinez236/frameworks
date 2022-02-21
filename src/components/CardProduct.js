import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardProduct = ({ products }) => {
  return (
    <>
      {products.map((products) => (
        <Box border='1px solid white' gap='2rem' textAlign='center'key={products.id}>
          <Box  borderBottom='1px solid white' boxSize="sm">
            <Image src={products.image} alt="Dan Abramov" />
          </Box>
          <Box bg='#410287'>
            <Heading color='white' fontSize='30px'>{products.tittle}</Heading>
            <Text>{products.info}</Text>
            <Text >{products.price}</Text>
          </Box>
          
        </Box>
      ))}
    </>
  );
};

export default CardProduct;
