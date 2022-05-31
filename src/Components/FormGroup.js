import React from 'react'
import Select from './UI/Select.jsx';
import { Form } from 'react-bootstrap';

const FormGroup = ({valueControl, valueSelect, onChangeControl, onChangeSelect, onFocus, onKeyDown}) => {
    return (
        <div>
            <Form.Group className="mb-3 d-flex me-5" >
                 <Form.Control
                    type="number"
                    min={0}
                    className='me-3'
                    id='input'
                    placeholder='amount'
                    value={valueControl}
                    onChange={onChangeControl}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                />
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