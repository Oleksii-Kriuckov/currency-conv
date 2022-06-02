import { useRecoilState } from 'recoil';
import { amountState, amountSecondState } from '../Atoms/AtomAmount';
import { currencyFirstState, currencySecondState } from '../Atoms/AtomCurrency';

export const useSetResultAmount = () => {
  const [amountSecond, setAmountSecond] = useRecoilState(amountSecondState);

  const setResultAmount = (amount, rate1, rate2) => {
    setAmountSecond((amount * rate1 / rate2).toFixed(2))
  }

  return { setResultAmount }
}
