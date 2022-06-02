import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { amountState } from '../Components/UI/InputForMoney/atom';
import { pattern } from '../Data/const';

export const useValidation = () => {
    const [amount, setAmount] = useRecoilState(amountState)
    
    const validationAmount = () => { 
        if (pattern.test(amount)) {
        setAmount(Math.floor(parseFloat(amount) * 100) / 100)
        console.log("valid");
    }
    }
    return {validationAmount}
}
