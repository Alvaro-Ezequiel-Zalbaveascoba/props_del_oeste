import React from "react";
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
} from "@chakra-ui/react";

export default function Login() {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  return (
    <Flex
            minH={'80vh'}
            align={'center'}
            justify={'center'}
            bgImage="url(https://d232ndqmwsmedi.cloudfront.net/8661/211215273.jpg)"
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={4}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                       Ingresar 
                    </Heading>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}w={"70Vh"}>
                      
                    <Stack spacing={4}></Stack>
                    
          
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
                        Inicio
                    </Button>

                </Box>
            </Stack>
        </Flex>
  );
}
