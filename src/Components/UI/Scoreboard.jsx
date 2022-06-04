import React from 'react'

const scoreboard = ({ children, curName }) => {
    return (
        <div className='d-flex mx-3 mb-3 scoreboard'>
            <span> 1 {curName} = </span>
            <div className='rate mx-2' > {children} </div>
            <span > UAH </span>
        </div>
    )
}

export default scoreboard