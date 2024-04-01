import React  from 'react'   
import FormStateBlur from '../Forms/FormStateBlur'

const Input = ({type,className, placeHolder, ariaLabel, testId, required, name, functionOnchange, functionOnkeyDown, disabled,pattern,role,alt,value}) => {

  const {
    unfocused, 
    setUnfocused,
    handleUnfocused 
  }=FormStateBlur();
 

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
    pattern={pattern}
    role={role}
    alt={alt}  
    value={value}
    
    onBlur={handleUnfocused} 
    onFocus={() => name==="confirmPassword" && setUnfocused(true)}  
    focused={unfocused.toString()}
  />  
  )
}

export default Input