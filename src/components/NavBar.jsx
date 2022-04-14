import { Link as ReachLink } from "react-router-dom";
import { Box, Button, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogoutRequest, setMeRequest } from "../store/me";
import { ChevronDownIcon } from "@chakra-ui/icons";


export default function NavBar() {
  const dispatch = useDispatch();

  const me = useSelector((state) => state.me);

  useEffect(() => {
    dispatch(setMeRequest());
  }, [dispatch]);
  const logoutButton = () => {
    dispatch(setLogoutRequest());
  };
  return (

    <Flex pos="fixed" bg="tomato" w="100%">

      <Box w="50%" p={3} color="white">
        <Link as={ReachLink} to="/" >

          <Text mt={2}> Propiedades Del Oeste </Text>
        </Link>
      </Box>
      <Spacer />
      {me.admin?<Box mt={2}><Menu>
          <MenuButton bg="brand.white"as={Button} rightIcon={<ChevronDownIcon />}>
            Admin
          </MenuButton>
          <MenuList>
            <Link as={ReachLink} to="/users">
              <MenuItem>Usuarios</MenuItem>

            </Link>
            <Link as={ReachLink} to="/messages">
              <MenuItem>Mensajes</MenuItem>

            </Link>

          </MenuList>
        </Menu>
        </Box>:<></>}
        <Spacer />
      <Box mt={2}>
        <Menu>
          <MenuButton bg="brand.white"as={Button} rightIcon={<ChevronDownIcon />}>
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
      <Box pt={2} mr={5}>

        {me.id ?

          <Link as={ReachLink} to="/" onClick={logoutButton}>
            <Button bg="brand.white" p={5}>
              salir
            </Button>
          </Link> :

          <Link as={ReachLink} to="/login">
            <Button bg="brand.white" p={5}>

              Iniciar Sesion
            </Button>

          </Link>}


      </Box>
    </Flex>
  );
}
