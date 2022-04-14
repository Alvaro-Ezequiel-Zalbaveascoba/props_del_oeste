import { Divider, Heading, Link, ListItem, OrderedList, SimpleGrid, Spinner } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link as ReachLink, useNavigate } from 'react-router-dom';
import { setUsersRequest } from '../store/users';

export default function Users() {
    const users = useSelector((state) => state.users)
    const me = useSelector((state) => state.me)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setUsersRequest());
        if (me.admin !== true) {
            return navigate("/")
        }
    }, [dispatch, navigate, me])
    return (
        <SimpleGrid rounded={'lg'} boxShadow={'lg'} p={5} w={"70Vh"} align="center" m={2} columns={[1]} h="lg" spacing='40px' mt={20} maxW={'7xl'}>
            <Heading as='h1' size='lg' mb={10}>
                Lista de Usuarios
                <OrderedList>
                    {users.length > 0 ? (users.map((user) => {
                        return <Link as={ReachLink} to="/userinfo"> <ListItem pr={7} pt={2} fontSize="2xl">{user.fullname}</ListItem><Divider /> </Link>;
                    })) : (<Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />)}
                </OrderedList>
            </Heading>
        </SimpleGrid>
    )
}
