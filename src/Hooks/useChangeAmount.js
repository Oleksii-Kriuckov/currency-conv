import { useRecoilState } from 'recoil';
import { currencyFirstState, currencySecondState } from '../Atoms/AtomCurrency';
import { amountState } from '../Atoms/AtomAmount';
import { useValidation } from './useValidation';
import { amountSecondState } from '../Atoms/AtomAmount';
import { useSetResultAmount } from './useSetResultAmount';

export const useChangeAmount = () => {
    const [amount, setAmount] = useRecoilState(amountState)
    const [amountSecond, setAmountSecond] = useRecoilState(amountSecondState)
    const [currencyFirst, setCurrencyFirst] = useRecoilState(currencyFirstState)
    const [currencySecond, setCurrencySecond] = useRecoilState(currencySecondState)
    
    const {setResultAmount} = useSetResultAmount();
    const { validationAmount } = useValidation();

    const changeAmountFirst = () => {
        if (amount) {
            validationAmount()
            if (currencyFirst !== '' && currencySecond !== '') {
                return setResultAmount(amount, currencyFirst, currencySecond);
            }
        } else {
            return setAmountSecond('')
        }
    }

    return { changeAmountFirst }
}
