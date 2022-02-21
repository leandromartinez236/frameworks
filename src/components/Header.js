import React from "react";
import {
  ChakraProvider,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { EmailIcon, QuestionIcon } from "@chakra-ui/icons";

// import "./App.css";
function Header() {
  return (
    <ChakraProvider>
      <Flex
        color="white"
        width="full"
        px="40px"
        py="25px"
        bg="#8b0000"
        borderBottom='1px solid white'
        justifyContent="space-between"
        alignItems="center"
        borderBlock='1px solid white'
      >
        <Flex alignItems="center">
          <Heading py="5px" px="5px" border="2px">
            Tienda
          </Heading>
          <HStack ml="5rem" spacing="70px">
            <Link>Inicio</Link>
            <Link>Comprar</Link>
            <Link>
              Sobre Nosotros <Icon h="20px" as={QuestionIcon}></Icon>
            </Link>
            <Link>
              Contacto <Icon as={EmailIcon} />
            </Link>
          </HStack>
        </Flex>
        <Link mr="20px">Carrito</Link>
      </Flex>
    </ChakraProvider>
  );
}

export default Header;