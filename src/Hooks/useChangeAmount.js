import { useRecoilState } from 'recoil';
import { amountState } from '../Atoms/AtomAmount';
import { useMemo } from 'react';
import { useValidation } from './useValidation';
import { amountSecondState } from '../Atoms/AtomAmount';
import { currencyFirstState, currencySecondState } from '../Atoms/AtomCurrency';
import { useSetResultAmount } from './useSetResultAmount';

export const useChangeAmount = () => {
    const [amount, setAmount] = useRecoilState(amountState)
    const [amountSecond, setAmountSecond] = useRecoilState(amountSecondState)
    const [currencyFirst, setCurrencyFirst] = useRecoilState(currencyFirstState)
    const [currencySecond, setCurrencySecond] = useRecoilState(currencySecondState)
    
    const { validationAmount } = useValidation();
    const {setResultAmount} = useSetResultAmount();

    const changeAmountFirst = () => {
        if (amount) {
            validationAmount()
            if (currencyFirst !== '' && currencySecond !== '') {
                return setResultAmount();
            }
        } else {
            return setAmountSecond('')
        }
    }

    return { changeAmountFirst }
}
