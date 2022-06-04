import React from 'react'
import Select from './Select.jsx';
import { Form } from 'react-bootstrap';

const FormDisabled = ({ valueControl, valueSelect, onChangeSelect }) => {
    return (
        <div>
            <Form.Group className="form_group d-flex  mb-5" >
                <Form.Control
                    type="number"
                    id='input'
                    value={valueControl}
                    disabled
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

export default FormDisabled