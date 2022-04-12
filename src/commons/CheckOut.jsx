import { Alert, AlertDescription, AlertIcon, AlertTitle, CloseButton, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CheckOut() {
    const user = useSelector((state) => state.users)
  return (
    <Flex mt={60}>
        {!user.id?
            <Alert status='error'>
        <AlertIcon />
        <AlertTitle mr={2}>USUARIO NO REGISTRADO!</AlertTitle>
        <AlertDescription>Inicie sesion o registrese para comprar.</AlertDescription>
      </Alert>:<h1>comprar</h1>}
    </Flex>
  )
}
