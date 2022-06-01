import React, { useState, useMemo } from 'react'
import { Form } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { isErrorState, errorMsgState } from '../Atoms/atomError';
import { convert, pattern } from '../Data/const';
import FormGroup from './FormGroup';
import FormDisabled from './FormDisabled';

const Main = () => {
    const [amount, setAmount] = useState('')
    const [amountSecond, setAmountSecond] = useState('')
    const [currencyFirst, setCurrencyFirst] = useState('')
    const [currencySecond, setCurrencySecond] = useState('')

    const [isError, setIsError] = useRecoilState(isErrorState)
    const [errorMsg, setErrorMsg] = useRecoilState(errorMsgState)

    const [isValid, setIsValid] = useState(false)
    const [validation, setValidation] = useState(false)

    const validationAmount = () => { 
        if (pattern.test(amount)) {
            setAmount(Math.floor(parseFloat(amount)*100)/100)
            setIsValid(true)
            console.log("valid");
        }
    }

    const press = (e) => {
        if (e.key === '+' || e.key ==='-' || e.code === "KeyE") {
            e.preventDefault()
        } 
        if (amount === '' && e.key === '.') {
            e.preventDefault()
        }
    }
    

    const changeAmountFirst = useMemo(() => {
        if (amount) {
            validationAmount(amount)

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
                            valueControl={amount}
                            valueSelect={currencyFirst}
                            onChangeControl={(e) => setAmount(e.target.value)}
                            onChangeSelect={selectCurrencyFirst}
                            onFocus={() => setAmount('')}
                            onKeyDown={press}
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
        
            // const convertation = () => {
                //     console.log(`amountFirst = ${amountFirst} 
            //     currencyFirst = ${currencyFirst} 
        
            //     currencySecond = ${currencySecond}`)
        
            //     if (amountFirst !== '') {
            //         setAmountFirst(String(Math.abs(amountFirst))) // execute to validation
            //         if (currencyFirst !== '' && currencySecond !== '') {
            //             console.log('first')
            //             return setAmountSecond(convert(amountFirst, currencyFirst, currencySecond).toFixed(2))
            //         }
            //     } else if (amountSecond !== '') {
            //         setAmountSecond(String(Math.abs(amountSecond)))
            //         if (currencyFirst !== '' && currencySecond !== '') {
            //             console.log('second')
            //             return setAmountFirst(convert(amountSecond, currencySecond, currencyFirst).toFixed(2))
            //         }
            //     }
            
            
            // if (typeof value !== "string") {
            // }
            // console.log('validationAmount')
            // setValidation(true)
            // setIsValid(false)
            
            // }
            // }