import React from 'react'
import Select from './UI/Select.jsx';
import { Form } from 'react-bootstrap';

const FormDisabled = ({ valueControl, valueSelect, onChangeSelect }) => {
    return (
        <div>
            <Form.Group className="mb-3 d-flex me-5" >
                <Select
                    defaultvalue='currency'
                    value={valueSelect}
                    onChange={onChangeSelect}
                />
                <Form.Control
                    type="number"
                    id='input'
                    value={valueControl}
                    disabled
                />
            </Form.Group>
        </div>
    )
}

export default FormDisabled