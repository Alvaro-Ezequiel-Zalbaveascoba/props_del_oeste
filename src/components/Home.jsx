import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import GridH from "../commons/GridH";
export default function Home() {
  const me = useSelector((state) => state.me);

  return (
    <Box  pt={20}align={'center'}>
      {me.id ? <Center>
        {me.admin!==true?
        <Text pt={5} fontSize="3xl" >Elige tu proxima casa {me.name}</Text>:<Text fontSize="3xl">¡HOLA ADMIN!</Text>

      }
      </Center>:<Text pt={5} fontSize="3xl" >Tu proxima casa esta muy cerca</Text>}
      <GridH />

    </Box>
  )
}
