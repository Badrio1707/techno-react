import React from 'react'
import './formInput.scss'

const FormInput = ({ text, type, name, value, onChange }) => {
  return (
    <div className="form-input">
      <p>{text}</p>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  )
}

export default FormInput