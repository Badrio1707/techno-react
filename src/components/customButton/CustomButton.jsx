import React from 'react'
import './customButton.scss'

const CustomButton = ({ text, onClick }) => {
    return (
      <button className='customButton' onClick={onClick}>
        {text}
      </button>
    )
  }

export default CustomButton