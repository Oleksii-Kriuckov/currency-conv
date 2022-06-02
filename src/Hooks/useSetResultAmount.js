import { useRecoilState } from 'recoil';
import { amountState, amountSecondState } from '../Atoms/AtomAmount';
import { currencyFirstState, currencySecondState } from '../Atoms/AtomCurrency';

export const useSetResultAmount = () => {
    const [amount, setAmount] = useRecoilState(amountState);
    const [amountSecond, setAmountSecond] = useRecoilState(amountSecondState);
    const [currencyFirst, setCurrencyFirst] = useRecoilState(currencyFirstState);
    const [currencySecond, setCurrencySecond] = useRecoilState(currencySecondState);

  const setResultAmount = () => { 
    setAmountSecond((amount*currencyFirst/currencySecond).toFixed(2))
   }

   return {setResultAmount}
}
