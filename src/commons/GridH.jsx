import { Box, SimpleGrid, Spinner} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setHousesRequest, setHousesTypesRequest } from '../store/houses';
import CardH from './CardH'

export default function GridH() {
  const path = useLocation().pathname
  console.log("EL PATH",path);
  const dispatch = useDispatch();

    const allHouses = useSelector((state) => state.houses);
    

    useEffect(() => {
        if(path==="/"){
          dispatch(setHousesRequest());

        }else if(path==="/casas"){
        dispatch(setHousesTypesRequest(1))}
        else{dispatch(setHousesTypesRequest(2))} 
        ;
    }, [dispatch, path]);
  return (
    
    <SimpleGrid m={2} columns={[1, 2, 3]} spacing='40px'pt={5}>
      {allHouses.length >0?(allHouses.map((value,index)=>{
        return <Box key={index}><CardH house={value}/></Box>;
      })):(<Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />)}


  



  
</SimpleGrid>
  )
}
