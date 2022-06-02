import React from 'react'
import { useRecoilState } from 'recoil';
import { currencyFirstState, currencySecondState } from '../Atoms/AtomCurrency';
import { amountState } from '../Atoms/AtomAmount';
import { useSetResultAmount } from './useSetResultAmount';

export const useSelectCurrency = () => {
    const [amount, setAmount] = useRecoilState(amountState)
    const [currencyFirst, setCurrencyFirst] = useRecoilState(currencyFirstState)
    const [currencySecond, setCurrencySecond] = useRecoilState(currencySecondState)
    
    const {setResultAmount} = useSetResultAmount();

    const selectCurrencyFirst = (currency) => {
        setCurrencyFirst(currency);
        if (amount !== '' && currencySecond !== '') {
            return setResultAmount(amount, currency, currencySecond);
        }
    }

    const selectCurrencySecond = (currency) => {
        setCurrencySecond(currency);
        if (amount !== '' && currencyFirst !== '') {
            return setResultAmount(amount, currencyFirst, currency)
        }
    }

    return {selectCurrencyFirst, selectCurrencySecond}
}
