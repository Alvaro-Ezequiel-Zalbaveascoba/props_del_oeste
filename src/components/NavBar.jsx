import { Link as ReachLink } from "react-router-dom";
import { Box, Button, Flex, Link } from "@chakra-ui/react";
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
    <Flex bg="tomato" p={2}>
      <Box w="90%" p={4} color="white">
        <h1> Propiedades Del Oeste </h1>
      </Box>
      <Button bg="brand.white" p={7}>
        {user.id ?
          <Link as={ReachLink} to="/" onClick={logoutButton}>
            salir
          </Link> :

          <Link as={ReachLink} to="/login">
            Iniciar Sesion
          </Link>}
      </Button>
    </Flex>
  );
}
