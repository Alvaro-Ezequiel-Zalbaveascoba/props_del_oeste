
import { Badge, Box, Button, Flex, HStack, Image, Link, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link as ReachLink } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setHousesRequest } from '../store/houses';

export default function DetailsHouse() {
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);
    const { id } = useParams();
    const idH = id - 1;
    console.log(houses);
    useEffect(() => {
        dispatch(setHousesRequest());
    }, [dispatch]);
    return (
        <Flex spacing={250} mt={100} boxSize="xl" h="60%" p={0} borderWidth='1px' borderRadius='lg' overflow='hidden' w="70%">
            {houses.length>0?
            <HStack >
                <Image boxSize="lg" src={houses[idH].img} alt={houses[idH].img} />

                <Box>
                    <Box p='6' align="left">
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
                                {houses[idH].typesofhouseId === 1 ? "Casa" : "Ph"} - {houses[idH].available === true ? "Disponible" : "No Disponible"}
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                        >
                            {houses[idH].name} - {houses[idH].ubication}
                        </Box>

                        <Box>
                            {houses[idH].price}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / Pesos
                            </Box>
                        </Box>
                        <Text>{houses[idH].description}</Text>
                    </Box>
                    <Box mb={5} p={5}>
                        <Button colorScheme='teal' type='submit'>

                            <Link as={ReachLink} to="/checkout">

                                Comprar
                            </Link>


                        </Button>
                    </Box>


                </Box>
            </HStack>:
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />}
        </Flex>
    )
}
