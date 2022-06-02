import axios from 'axios';
import { useRecoilState } from 'recoil';
import { isLoadingState, isErrorState, errorMsgState } from '../Atoms/atomFetch';
import { useSetCurrencyArray } from './useSetCurrencyArray';

function useFetchRate(url) {
    const [isError, setIsError] = useRecoilState(isErrorState);
    const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState);
    const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

    const { createCurrencyArray } = useSetCurrencyArray();

    const getRequest = async () => {
        setIsLoading(true)
        
        await axios.get(url)
            .then((responce) => {
                setIsError(false)
                createCurrencyArray(responce.data);
            })
            .catch((error) => {
                setIsError(true)
                setErrorMsg(error.toJSON().message)
            })
            .finally (() => { 
                setIsLoading(false)
             })
    }

    return { getRequest }
}
export default useFetchRate