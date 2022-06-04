export const foreinCurrencyArray = ['EUR', 'USD', 'GBP', 'PLN', 'CZK']

export const pattern2 = /\d+\.\d{2}/

export const pattern3 = /\d+\.\d{3}/

export const press = (e) => {
    if (e.key.search(/[0-9.]/) === -1 && e.key !== 'Backspace') {
        e.preventDefault()
        console.log("1")
    }

    if (e.target.value.indexOf('.') !== -1 && e.key === '.') {
        e.preventDefault()
        console.log("2")
    }

    if (e.target.value === '' && (e.key === '.')) {
        e.preventDefault()
        console.log("3")
    }

    if (e.target.value === '0') {
        if (e.key !== '.' && e.key !== 'Backspace') {
            e.preventDefault()
            console.log("4")
        }
    }
}