import React from 'react'
import Select from './Select.jsx';
import { Form } from 'react-bootstrap';
import InputForMoney from './InputForMoney/InputForMoney.jsx';

const FormGroup = ({valueSelect, onChangeSelect}) => {
    return (
        <div>
            <Form.Group className="mb-3 d-flex me-5" >
                 <InputForMoney/>
                <Select
                    defaultvalue='currency'
                    value={valueSelect}
                    onChange={onChangeSelect}
                />
            </Form.Group>
        </div>
    )
}

export default FormGroup