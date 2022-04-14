import { Center, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllMessagesRequest } from "../store/messages";
import CardM from "./CardM";

export default function Messages() {
    const messages = useSelector((state) => state.messages)
    const me = useSelector((state) => state.me)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(setAllMessagesRequest());
        if (me.admin !== true) {
            return navigate("/")
        }
    }, [dispatch, navigate, me])
    return (
        <Wrap spacing='40px' pt={10} h={"xl"}>
            {messages.length > 0 ? (messages.map((value, index) => {
                return <WrapItem key={index}><Center><CardM message={value} /></Center></WrapItem>;
            })) : (<Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />)}
        </Wrap>
    )
}
