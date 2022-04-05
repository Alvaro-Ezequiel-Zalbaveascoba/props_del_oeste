import React from "react";
import {
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    useColorModeValue,
    Button,
    HStack,
    Box,
    Stack,
    Flex,
    Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import { setRegisterRequest } from "../store/users";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
    });
    const onChange = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(setRegisterRequest(form)).then(() => navigate("/welcome"))
            ;
    };



    return (
        <Flex
            pt={20}
            minH={'90vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={10} px={4}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Registrate
                    </Heading>
                </Stack>
                <form onSubmit={onSubmit}>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <HStack>
                            <Box>
                                <FormControl id="name" isRequired>
                                    <FormLabel>Nombre</FormLabel>
                                    <Input id="name" type="text" name="name" onChange={onChange} />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName" isRequired>
                                    <FormLabel>Apellido</FormLabel>
                                    <Input id="lastName" type="text" name="lastName"
                                        onChange={onChange} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <br />
                        <FormControl id="email" isRequired>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" name="email"
                                onChange={onChange} />
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
                            Finalizar
                        </Button>

                    </Box>
                </form>
            </Stack>
        </Flex>
    );
}
