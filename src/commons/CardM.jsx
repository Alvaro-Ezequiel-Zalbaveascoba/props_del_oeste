import React from 'react'
import { Box, Text } from "@chakra-ui/react"



export default function CardM({ message }) {
    return (
       
        <Box  pt={17}boxSize="sm" h="100%" borderWidth='1px' borderRadius='lg' overflow='hidden'w="100%">
            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {message.name} - {message.lastName}
                </Box>
                <Box>
                    
                    <Box as='span' color='gray.600' fontSize='sm'>
                        id de la casa: 
                    </Box>
                     {message.houseId}
                </Box>
                <Box>
                    
                    <Box as='span' color='gray.600' fontSize='sm'>
                        Email: 
                    </Box>
                     {message.email}
                </Box>
                <Box>

                    <Box as='span' color='gray.600' fontSize='sm'>
                        Tel:+
                    </Box>
                     {message.movil}
                </Box>

                <Box mt='2'>
                    <Text align={'center'}>{message.message}</Text>
                </Box>
            </Box>
        </Box>
    )
}