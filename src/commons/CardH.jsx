import React from 'react'
import { Badge, Box, Image, Text } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom';


export default function CardH({house}) {
    /* console.log("ESTA ES LA HOUSE",house); */
    
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`/houses/${house.id}`);
    };

    
    return (
        
        <Box  boxSize="sm" h="82%" borderWidth='1px' borderRadius='lg' overflow='hidden' onClick={handleClick}maxW={'8xl'}>
            <Image objectFit='cover'boxSize="50%"w="100%"src={house.img} alt={house.img} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Badge borderRadius='full' px='2' colorScheme='teal'>
                        Nuevo
                    </Badge>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                        ml='2'
                    >
                        {house.typesofhouseId===1?"Casa":"Ph"} - {house.available===true?"Disponible":"No Disponible"}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {house.name} - {house.ubication}
                </Box>

                <Box>
                    {house.price}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / Pesos
                    </Box>
                </Box>

                <Box mt='2'>
                   <Text align={'center'}>{house.truncate}</Text> 
                </Box>
            </Box>
        </Box>
    )
}
