import React from 'react'

const Input = ({type,className, placeHolder, ariaLabel, testId, required, name, functionOnchange, functionOnkeyDown, disabled}) => {
  return (
    <input
    type={type}
    className={className}
    placeholder={placeHolder}
    aria-label={ariaLabel}      
    data-testid={testId}          
    required={required} 
    onChange={functionOnchange}
    onKeyDown={functionOnkeyDown}
    name={name}
    disabled={disabled === true ? "disabled" : null}
  />  
  )
}

export default Input