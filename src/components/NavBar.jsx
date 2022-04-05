import { Link as ReachLink } from "react-router-dom";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutRequest, setUserMeRequest } from "../store/users";

export default function NavBar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUserMeRequest());
  }, [dispatch]);
  const logoutButton = () => {
    dispatch(setLogoutRequest());
  };
  return (

    <Flex pos="fixed" bg="tomato" p={1}w="100%">
      <Box  w="100%" p={3} color="white">
        <Text pt={2}> Propiedades Del Oeste </Text>
      </Box>
      <Box p={3}>
        <Button bg="brand.white" p={5}>
          {user.id ?
            <Link as={ReachLink} to="/" onClick={logoutButton}>
              salir
            </Link> :

            <Link as={ReachLink} to="/login">
              Iniciar Sesion
            </Link>}
        </Button>

      </Box>
    </Flex>
  );
}
