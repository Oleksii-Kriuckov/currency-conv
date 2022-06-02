import { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isErrorState, errorMsgState } from '../Atoms/atomError';
import { useSetCurrencyArray } from './useSetCurrencyArray';

function useFetchRate(url) {
    const [isError, setIsError] = useRecoilState(isErrorState);
    const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState)

    const { createCurrencyArray } = useSetCurrencyArray();

    const getRequest = async () => {
        await axios.get(url)
            .then((responce) => {
                setIsError(false)
                createCurrencyArray(responce.data);
            })
            .catch((error) => {
                setIsError(true)
                setErrorMsg(error.toJSON().message)
            })
    }

    return { getRequest }
}
export default useFetchRate