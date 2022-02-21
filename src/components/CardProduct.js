import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CardProduct = ({ products }) => {
  return (
    <>
      {products.map((products) => (
        <Box boxShadow='5px 15px 15px -6px red;' gap='2rem' textAlign='center'key={products.id}>
          <Box bg='gray' borderBottom='1px solid white' boxSize="sm">
            <Image src={products.image} alt="Dan Abramov" />
          </Box>
          <Box bg='#410287'>
            <Heading pt='1.4rem' color='white' fontSize='30px'>{products.tittle}</Heading>
            <Text>{products.info}</Text>
            <Text >{products.price}</Text>
            <Button mt='1rem' paddingInline='1.7rem' borderRadius='5px' border='2px solid white' colorScheme='blue' variant='outline'>Comprar</Button>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default CardProduct;
