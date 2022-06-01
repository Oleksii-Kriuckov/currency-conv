import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currencyArrayState } from '../Atoms/AtomArrayCurrency';
import { isErrorState, errorMsgState } from '../Atoms/atomError';
import { Navbar, Container } from 'react-bootstrap';
import Scoreboard from './UI/Scoreboard';
import useFetchRate from '../Hooks/useFetchRate';

const Header = () => {
    const [currencyArray, setCurrencyArray] = useRecoilState(currencyArrayState)
    const [isError, setIsError] = useRecoilState(isErrorState);
    useFetchRate('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')

    return (
        <Navbar bg="primary" variant="dark" className='d-block' > {
            !isError ?
                <>
                    <h2> Currency converter </h2>
                    <Container className='justify-content-around mt-2 py-1' >
                        {currencyArray.map((currency, index) =>
                            <Scoreboard key={index}
                                curName={currency.cc} > {currency.rate.toFixed(2)}
                            </Scoreboard>
                        )}
                    </Container>
                </> : null
        }
        </Navbar>
    )
}
export default Header