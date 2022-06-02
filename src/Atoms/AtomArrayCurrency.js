import { atom } from 'recoil'

export const currencyArrayState = atom({
    key: 'currencyArrayState',
    default: []
})

export const amountState = atom({
    key: 'inputAmountState',
    default: ''
})
  