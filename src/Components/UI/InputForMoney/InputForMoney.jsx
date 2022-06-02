import React from 'react'
import { useRecoilState } from 'recoil';
import { Form } from 'react-bootstrap';
import { amountState } from './atom';
import style from './style.module.css'

const InputForMoney = () => {
  const [amount, setAmount] = useRecoilState(amountState)

  const press = (e) => {
    if (e.key === '+' || e.key === '-' || e.code === "KeyE") {
      e.preventDefault()
    }
    if (amount === '' && (e.key === '.' || e.key === '0')) {
      e.preventDefault()
    }
  }

  return (
    <Form.Control
      type="number"
      min={0}
      className={`me-3` }
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