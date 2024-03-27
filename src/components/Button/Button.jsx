import React from "react";

const Button = ({ className, title, testId , buttonType, functionName, disable}) => {
  return (
    <button className={className} type={buttonType} onClick={functionName} data-testid={testId} disabled={disable===true ? "disabled" : null}>
      {title}
    </button>
  );
};

export default Button;
