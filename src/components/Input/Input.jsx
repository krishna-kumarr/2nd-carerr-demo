import React from 'react'

const Input = ({type,className, placeHolder, ariaLabel, testId, required, name, functionName}) => {
  return (
    <input
    type={type}
    className={className}
    placeholder={placeHolder}
    aria-label={ariaLabel}      
    data-testid={testId}          
    required={required} 
    onChange={functionName}
    name={name}
  />  
  )
}

export default Input