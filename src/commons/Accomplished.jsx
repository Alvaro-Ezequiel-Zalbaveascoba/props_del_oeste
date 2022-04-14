import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom";
import { CheckCircleIcon } from '@chakra-ui/icons';


import React from 'react'

export default function Accomplished() {
  return (
    <Box h={'lg'}textAlign="center" mt={20} py={10} px={6}>
      <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Solicitud enviada
      </Heading>
      <Text color={'gray.500'}>
        El propietario se contactara con usted.¡Muchas Gracias!
      </Text>
      <Link as={ReachLink} to="/">Volver al inicio</Link>
    </Box>
  )
}
