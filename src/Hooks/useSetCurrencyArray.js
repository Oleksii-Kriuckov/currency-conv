import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { foreinCurrencyArray } from '../Data/const';
import { currencyArrayState } from '../Atoms/AtomArrayCurrency';


export const useSetCurrencyArray = () => {
    const [currencyArray, setCurrencyArray] = useRecoilState(currencyArrayState);
    const createCurrencyArray = (array) => {
        const arr = [];
        array.map((elem) => {
            if (foreinCurrencyArray.some(el => el === elem.cc)) {
                arr.push(elem)
            }
        })
        setCurrencyArray(arr);
    }

    return { createCurrencyArray }
}