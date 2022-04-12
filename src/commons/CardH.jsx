import React from 'react'
import { Badge, Box, Image } from "@chakra-ui/react"
import {StarIcon} from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom';


export default function CardH({house}) {
    /* console.log("ESTA ES LA HOUSE",house); */
    const property = {
        
        imageUrl:house.img,
        imageAlt: 'Rear view of modern home with pool',
        type: house.typesofhouseId,
        name: house.name,
        ubication:house.ubication,
        formattedPrice: house.price,
        available:house.available,
        reviewCount: 34,
        rating: 4,
    }
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate(`/houses/${house.id}`);
    };

    
    return (
        <Box  boxSize="sm" h="82%" borderWidth='1px' borderRadius='lg' overflow='hidden' onClick={handleClick}>
            <Image objectFit='cover'boxSize="50%"w="100%"src={property.imageUrl} alt={property.imageAlt} />

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
                        {property.type===1?"Casa":"Ph"} - {property.available===true?"Disponible":"No Disponible"}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {property.name} - {property.ubication}
                </Box>

                <Box>
                    {property.formattedPrice}
                    <Box as='span' color='gray.600' fontSize='sm'>
                        / P esos
                    </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    {Array(5)
                        .fill('')
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < property.rating ? 'teal.500' : 'gray.300'}
                            />
                        ))}
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {property.reviewCount} Valoracion
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
