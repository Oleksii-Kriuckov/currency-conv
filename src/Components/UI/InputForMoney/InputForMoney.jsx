import React from 'react'
import { useRecoilState } from 'recoil';
import { Form } from 'react-bootstrap';
import { amountState } from '../../../Atoms/AtomAmount';
import style from './style.module.css';
import { press } from '../../../Data/const';

const InputForMoney = () => {
  const [amount, setAmount] = useRecoilState(amountState)

  return (
    <Form.Control
      type="text"
      min={0}
      className='me-3'
      id={style.input}
      placeholder='amount'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      onFocus={() => setAmount('')}
      onKeyDown={press}
    />
  )
}

export default InputForMoney