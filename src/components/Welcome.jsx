import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUserMeRequest } from '../store/users';

export default function Welcome() {
    const dispatch = useDispatch();

  const user = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(setUserMeRequest());
  }, [dispatch]);
  return (
    <div><h1>Bienvenido {user.name}</h1></div>
  )
}