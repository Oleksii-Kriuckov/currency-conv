import React from 'react'

const scoreboard = ({ children, curName }) => { //Перейменувати сс
  return (
    <div className='d-flex'>
      <span>1 {curName} = </span>
      <div className='rate mx-2'>{children} </div>
      <span>UAH</span>
    </div>
  )
}

export default scoreboard