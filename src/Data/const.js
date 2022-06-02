export const foreinCurrencyArray = ['USD', 'GBP', 'EUR', 'PLN']

export const convert = (amount, rate1, rate2) => {
   return (amount*rate1)/rate2
}

export const pattern = /\d+\.\d{3}/

