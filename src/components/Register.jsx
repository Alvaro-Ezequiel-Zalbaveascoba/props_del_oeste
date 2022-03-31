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

export default function Register() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    return (
        <Flex
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
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}></Stack>
                    <HStack>
                        <Box>
                            <FormControl id="name" isRequired>
                                <FormLabel>Nombre</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                        <Box>
                            <FormControl id="lastName" isRequired>
                                <FormLabel>Apellido</FormLabel>
                                <Input type="text" />
                            </FormControl>
                        </Box>
                    </HStack>
                    <br />
                    <FormControl id="email" isRequired>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input id="email" type="email" />
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel htmlFor="password" pt={5}>Contraseña</FormLabel>
                        <InputGroup >
                            <Input
                                id="id"
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
            </Stack>
        </Flex>
    );
}
