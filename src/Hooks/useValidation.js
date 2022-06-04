import { useRecoilState } from 'recoil';
import { amountState } from '../Atoms/AtomAmount';
import { pattern3 } from '../Data/const';

export const useValidation = () => {
    const [amount, setAmount] = useRecoilState(amountState)
    
    const validationAmount = () => { 
        if (pattern3.test(amount)) {
            if (typeof amount !== "number") {
                parseFloat(amount)
            }
            setAmount( Math.floor(amount * 100) / 100)
            console.log('valid')
        }
    }
    return {validationAmount}
}
