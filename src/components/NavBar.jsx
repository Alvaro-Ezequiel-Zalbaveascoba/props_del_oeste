import { Link as ReachLink } from "react-router-dom";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
import React from "react";

export default function NavBar() {
  return (
    <Flex bg="tomato" p={2}>
      <Box w="90%" p={4} color="white">
        <h1> Propiedades Del Oeste </h1>
      </Box>
      <Button bg="brand.white" p={7}>
        <Link as={ReachLink} to="/login">
          Iniciar Sesion
        </Link>
      </Button>
    </Flex>
  );
}
