
import { Badge, Box, Button, Flex, HStack, Image, Link, Spinner, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link as ReachLink } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setDeleteHouseRequest, setOneHouseRequest } from '../store/houses';

export default function DetailsHouse() {
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);
    const me=useSelector((state) => state.me)
    const { id } = useParams();
    console.log(houses);
    useEffect(() => {
        dispatch(setOneHouseRequest(id));
    }, [dispatch, id]);
    const handleClick = () => {
        dispatch(setDeleteHouseRequest(id))
      };
    return (
        <Flex spacing={250} mt={100} mb={50} boxSize="xl" h="60%" p={0} borderWidth='1px' borderRadius='lg' overflow='hidden' w="70%">
            {houses.id?
            <HStack >
                <Image boxSize="lg" src={houses.img} alt={houses.img} />

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
                                {houses.typesofhouseId === 1 ? "Casa" : "Ph"} - {houses.available === true ? "Disponible" : "No Disponible"}
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            isTruncated
                        >
                            {houses.name} - {houses.ubication}
                        </Box>

                        <Box>
                            {houses.price}
                            <Box as='span' color='gray.600' fontSize='sm'>
                                / Pesos
                            </Box>
                        </Box>
                        <Text>{houses.description}</Text>
                    </Box>
                    <Box mb={5} p={5}>
                        {me.admin!==true?
                            <Link as={ReachLink} to="/checkout">
                        <Button colorScheme='teal' type='submit'>

                                Contactar
                        </Button>
                            </Link>: <Link as={ReachLink} to="/">
                        <Button colorScheme='teal' type='submit'onClick={handleClick}>

                                Borrar
                        </Button>
                            </Link>}


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
