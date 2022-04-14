import React, { useEffect, useState } from "react";
import { Link as ReachLink } from "react-router-dom";

import {
  FormControl,
  FormLabel,
  Input,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  Button,
  Stack,
  Box,
  Heading,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoginRequest } from "../store/me";

export default function Login() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const me = useSelector((state) => state.me);


  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setLoginRequest(form));

  };
  useEffect(() => {
    navigate(!me.id ? "/login" : "/")
  }, [navigate, me]);
  return (
    <Flex
      pt={20}
      minH={'80vh'}
      align={'center'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={4}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Ingresar
          </Heading>
        </Stack>
        <form onSubmit={onSubmit}>
          <Box
            rounded={'lg'}

            boxShadow={'lg'}
            p={8} w={"70Vh"}>

            <Stack spacing={4}></Stack>


            <FormControl id="email" isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input id="email" type="email" name="email" onChange={onChange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel htmlFor="password" pt={5}>Contraseña</FormLabel>
              <InputGroup >
                <Input
                  id="id"
                  name="password"
                  onChange={onChange}
                  type={show ? 'text' : 'password'}


                />
                <InputRightElement width='4.5rem'>
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              mt={4}
              colorScheme='teal'
              type='submit'
            >
              Inicio
            </Button>

          </Box>
        </form>
        <Link as={ReachLink} to="/register">
          Aun no estas registrado?
        </Link>
      </Stack>
    </Flex>
  );
}
