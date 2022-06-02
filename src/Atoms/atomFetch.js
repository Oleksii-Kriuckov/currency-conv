import { atom } from 'recoil'

export const isLoadingState = atom({
    key: 'isLoadingState',
    default: false
})

export const isErrorState = atom({
    key: 'isErrorState',
    default: false
})

export const errorMsgState = atom({
    key: 'errorMsgState',
    default: ''
})

