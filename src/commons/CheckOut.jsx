
import React from "react";
import {
  FormControl,
  FormLabel,
  Input,  
  Button,
  HStack,
  Box,
  Stack,
  Flex,
  Heading,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
} from "@chakra-ui/react";
import { setMessagesRequest } from "../store/messages";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
  const me = useSelector((state) => state.me)
  const houses= useSelector((state)=>state.houses)
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [form, setForm] = useState({
    name: me.name,
    lastName: me.lastName,
    email: me.email,
    movil: 0,
    message: "Hola me interesa esta propiedad me gustaria que me contacten",
    houseId:houses.id,
    interestedId:me.id
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const onSubmit = (e) => {
      e.preventDefault();
      dispatch(setMessagesRequest(form)).then(() => navigate("/accomplished"))
          ;
  };
  return (
    <Flex mt={55}>
      {!me.id ?
        <Alert mt={10} status='error'>
          <AlertIcon />
          <AlertTitle mr={2}>USUARIO NO REGISTRADO!</AlertTitle>
          <AlertDescription>Inicie sesion o registrese para Contactar con el propietario.</AlertDescription>
        </Alert> : <Flex
          minH={'90vh'}
          align={'center'}
          justify={'center'}
        >
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={4}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Dejanos tu contacto
              </Heading>
            </Stack>
            <form onSubmit={onSubmit}>
              <Box
                rounded={'lg'}

                boxShadow={'lg'}
                p={8}>
                <HStack>
                  <Box>
                    <FormControl id="name" isRequired>
                      <FormLabel>Nombre</FormLabel>
                      <Input id="name" type="text" value={me.name}
                        name="name" onChange={onChange} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Apellido</FormLabel>
                      <Input id="lastName" type="text" value={me.lastName} name="lastName"
                        onChange={onChange} />
                    </FormControl>
                  </Box>
                </HStack>
                <br />
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input id="email" type="email" value={me.email} name="email"
                    onChange={onChange} />
                </FormControl>
                <FormControl id="movil" isRequired>
                  <FormLabel  pt={5}>Telefono</FormLabel>
                  <NumberInput >
                    <NumberInputField name="movil" placeholder="+5411********" onChange={onChange}/>
                    <NumberInputStepper>

                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea name="message" onChange={onChange} placeholder='Hola me interesa esta propiedad me gustaria que me contacten' />
                </FormControl>

                <Button
                  mt={4}
                  colorScheme='teal'
                  type='submit'
                >
                  Enviar
                </Button>

              </Box>
            </form>
          </Stack>
        </Flex>}
    </Flex>
  )
}
