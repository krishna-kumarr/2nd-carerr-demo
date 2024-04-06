import React, { useState } from 'react'

const Input = ({ value,type, className,id ,placeHolder, formFieldName, ariaLabel, testId, required, name, functionOnchange, functionOnkeyDown, disabled, pattern, role, alt }) => {

  const [unfocused, setUnfocused] = useState(false);

  const handleUnfocused = () => {
    setUnfocused(true);
  };



  return (
    <>
      <input
        type={type}
        className={className}
        placeholder={placeHolder}
        aria-label={ariaLabel}
        data-testid={testId}
        id={id}
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
        onFocus={() => name === "confirmPassword" && setUnfocused(true)}
        focused={unfocused.toString()}
      />


      <label for="inputField" className="label-name ">{formFieldName}</label>
    </>

  )
}

export default Input