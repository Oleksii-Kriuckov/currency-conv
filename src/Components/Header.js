import React, {useEffect} from 'react';
import { useRecoilState } from 'recoil';
import { currencyArrayState } from '../Atoms/AtomArrayCurrency';
import { isErrorState, isLoadingState } from '../Atoms/atomFetch';
import { Navbar, Container } from 'react-bootstrap';
import Scoreboard from './UI/Scoreboard';
import useFetchRate from '../Hooks/useFetchRate';
import Loader from './UI/Loader/Loader';

const Header = () => {
    const [currencyArray, setCurrencyArray] = useRecoilState(currencyArrayState)
    const [isLoading, setIsLoading] = useRecoilState(isLoadingState);
    const [isError, setIsError] = useRecoilState(isErrorState);
    const {getRequest} = useFetchRate('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')

    useEffect(() => {
        getRequest();
    }, []);

    return (
        <Navbar bg="primary" variant="dark" className='d-block' > {
            !isError ?
                <>
                    <h2> Currency converter for Ukraine</h2>
                    { isLoading ? 
                    <Loader/> :
                    <Container className='justify-content-around mt-3 mb-2 py-1 flex-wrap w-100' >
                        {currencyArray.map((currency, index) =>
                            <Scoreboard key={index}
                                curName={currency.cc} > {currency.rate.toFixed(2)}
                            </Scoreboard>
                        )}
                    </Container>
                    }
                </> : null
        }
        </Navbar>
    )
}
export default Header