import {
    Box,
    Container,
    Stack,
    Text,
    Link,
  } from '@chakra-ui/react';
  
  export default function Footer() {
    return (
      <Box position="relative"
        bg="tomato"
        color="white"
        width="100%"
        >
        <Container
          as={Stack}
          maxW={'7xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
          <Text>© 2022 Propiedades Del Oeste. Derechos reservados</Text>
        </Container>
      </Box>
    );
  }