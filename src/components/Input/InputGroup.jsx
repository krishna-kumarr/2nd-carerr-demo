import React from "react";

const InputGroup = ({ className, id, reIcons,formInputFieldError,onClick }) => {
  return (

    <>
      <span className={className} id={id} onClick={onClick}>
        {reIcons}
      </span>

      <span
        id="signup-error-message "
        className="text-danger w-100 mt-2 signup-error-message professional-signup-error-message"
      >
        {formInputFieldError}

      </span>
    </>


  );
};

export default InputGroup;
