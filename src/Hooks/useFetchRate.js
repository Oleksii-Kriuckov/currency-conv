import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isErrorState, errorMsgState } from '../Atoms/atomError';
import { useSetCurrencyArray } from './useSetCurrencyArray';

 function useFetchRate(url) {
    const [responce, setResponce] = useState({});
    const [isError, setIsError] = useRecoilState(isErrorState);
    const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState)

    const { createCurrencyArray } = useSetCurrencyArray();

    useEffect(async () => {
        await axios.get(url)
        .then((responce) => {
            setIsError(false)
            createCurrencyArray(responce.data);
        })
        .catch((error) => {
            setIsError(true)
            setErrorMsg(error.toJSON().message)
        })
    }, [])

    return { errorMsg }
}
export default useFetchRate