import React from 'react';
import { Form } from 'react-bootstrap';
import { currencyArrayState } from '../../Atoms/AtomArrayCurrency';
import { useRecoilState } from 'recoil';

const Select = ({ defaultvalue, value, onChange }) => {
    const [currencyArray, setCurrencyArray] = useRecoilState(currencyArrayState)


    return (
        <Form.Select
            id='select'
            className='me-3'
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            <option disabled defaultValue value=''>{defaultvalue}</option>
            {currencyArray.map((currency, index) =>
                <option key={index} value={currency.rate.toFixed(2)}>{currency.cc}</option>
            )}
            <option value={1}>UAH</option>
        </Form.Select>
    )
}

export default Select