import { Link as ReachLink } from "react-router-dom";
import { Box, Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutRequest, setUserMeRequest } from "../store/users";
import { ChevronDownIcon } from "@chakra-ui/icons";


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

    <Flex pos="fixed" bg="tomato" p={1} w="100%">

      <Box w="50%" p={3} color="white">
        <Link as={ReachLink} to="/" >

          <Text mt={2}> Propiedades Del Oeste </Text>
        </Link>
      </Box>
      <Spacer />
      <Box mt={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
          <Link as={ReachLink} to="/">
              <MenuItem>Todas</MenuItem>

            </Link>
            <Link as={ReachLink} to="/casas">
              <MenuItem>Casas</MenuItem>

            </Link>
            <Link as={ReachLink} to="/ph">
              <MenuItem>PH</MenuItem>

            </Link>
            
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      <Box w="20%" pt={2} pr={5}>
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
