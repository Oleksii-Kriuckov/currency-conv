import React, { useMemo } from 'react'
import { Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { isErrorState, errorMsgState } from '../Atoms/atomFetch';
import FormGroup from './UI/FormGroup';
import FormDisabled from './UI/FormDisabled';
import { amountState, amountSecondState } from "../Atoms/AtomAmount";
import { currencyFirstState, currencySecondState } from '../Atoms/AtomCurrency';
import { useChangeAmount } from '../Hooks/useChangeAmount';
import { useSelectCurrency } from '../Hooks/useSelectCurrency';

const Main = () => {
    const [currencyFirst, setCurrencyFirst] = useRecoilState(currencyFirstState)
    const [currencySecond, setCurrencySecond] = useRecoilState(currencySecondState)
    const [amountSecond, setAmountSecond] = useRecoilState(amountSecondState);
    const [amount, setAmount] = useRecoilState(amountState)

    const [isError, setIsError] = useRecoilState(isErrorState)
    const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState)

    const {changeAmountFirst} = useChangeAmount();

    useMemo(() => {
        changeAmountFirst();
    }, [amount])

    const {selectCurrencyFirst, selectCurrencySecond} = useSelectCurrency();

    return (
        <div>
            {!isError ?
                <>
                    <h4 className='mt-5'>
                        Enter the amount in the first field, choose both currency and result will automatically appear in the second field
                    </h4>
                    <Form className='d-flex justify-content-center mt-5'>
                        <FormGroup
                            valueSelect={currencyFirst}
                            onChangeSelect={selectCurrencyFirst}
                        />

                        <FormDisabled
                            valueControl={amountSecond}
                            valueSelect={currencySecond}
                            onChangeSelect={selectCurrencySecond}
                        />
                    </Form>
                </>
                : <h1 className='mt-5'>{errorMsg}</h1>
            }
        </div>
    )
}

export default Main

