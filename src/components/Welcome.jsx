import { Box, Center, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GridH from '../commons/GridH';
import { setUserMeRequest } from '../store/users';

export default function Welcome() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(setUserMeRequest());
    }, [dispatch]);
    return (
        <Box pt={20}>
            <Center>
                <Text pt={5} fontSize="3xl" >Bienvenido {user.name}</Text>

            </Center>
            <GridH />
        </Box>
    )
}