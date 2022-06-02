import React from 'react'
import { useRecoilState } from 'recoil';
import { currencyFirstState, currencySecondState } from '../Atoms/AtomCurrency';
import { amountState } from '../Atoms/AtomAmount';

export const useSelectCurrency = () => {
    const [amount, setAmount] = useRecoilState(amountState)
    const [amountSecond, setAmountSecond] = useRecoilState(amountSecondState)
    const [currencyFirst, setCurrencyFirst] = useRecoilState(currencyFirstState)
    const [currencySecond, setCurrencySecond] = useRecoilState(currencySecondState)
    
    const {setResultAmount} = useSetResultAmount();

    const selectCurrencyFirst = () => {
        setCurrencyFirst();
        if (amount !== '' && currencySecond !== '') {
            return setAmountSecond(convert(amount, currency, currencySecond).toFixed(2))
        }
    }

    const selectCurrencySecond = (currency) => {
        setCurrencySecond(currency);
        if (amount !== '' && currencyFirst !== '') {
            return setAmountSecond(convert(amount, currencyFirst, currency).toFixed(2))
        }
    }
}
