import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CardH from './CardH'

export default function GridH() {
  return (
    
    <SimpleGrid m={2} columns={[1, 2, 3]} spacing='40px'pt={5}>
  <Box ><CardH/></Box>
  <Box ><CardH/></Box>
  <Box ><CardH/></Box>
  <Box ><CardH/></Box>
  <Box ><CardH/></Box>
  <Box ><CardH/></Box>


  
</SimpleGrid>
  )
}
