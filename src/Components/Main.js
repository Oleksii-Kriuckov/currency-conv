import React, { useState, useMemo } from 'react'
import { Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { isErrorState, errorMsgState } from '../Atoms/atomError';
import { convert } from '../Data/const';
import FormGroup from './FormGroup';
import FormDisabled from './FormDisabled';
import { amountState } from "./UI/InputForMoney/atom";
import { useValidation } from '../Hooks/useValidation';

const Main = () => {
    const [amountSecond, setAmountSecond] = useState('')
    const [currencyFirst, setCurrencyFirst] = useState('')
    const [currencySecond, setCurrencySecond] = useState('')

    const [isError, setIsError] = useRecoilState(isErrorState)
    const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState)
    const [amount, setAmount] = useRecoilState(amountState)

    const { validationAmount } = useValidation();

    const changeAmountFirst = useMemo(() => {
        if (amount) {
            validationAmount()
            if (currencyFirst !== '' && currencySecond !== '') {
                return setAmountSecond(convert(amount, currencyFirst, currencySecond).toFixed(2))
            }
        } else {
            return setAmountSecond('')
        }
    }, [amount])

    const selectCurrencyFirst = (currency) => {
        setCurrencyFirst(currency);
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
                            disabled
                        />
                    </Form>
                </>
                : <h1 className='mt-5'>{errorMsg}</h1>
            }
        </div>
    )
}

export default Main

