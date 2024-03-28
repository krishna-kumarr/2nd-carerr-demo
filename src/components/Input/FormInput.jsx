import React from "react";
import FormLabel from "../Label/FormLabel";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FormInput = ({
  formInputDivClassName,
  formFieldName,
  formInputFieldError,
  formInputType,
  formInputId,
  formAriaLabel,
  handleEyeClick,

  nameFromProfessionalSignup,
  onChange,
  pattern,
  dataTestid,
  role,
  alt,
  valueFromProfessionalSignup,
  showPassword
}) => {
  return (
    <div className={formInputDivClassName}>
      <FormLabel labelFieldName={formFieldName} />
      <div className="input-group">
        <Input
          type={formInputType}
          className="form-control"
          id={formInputId}
          ariaLabel={formAriaLabel}
          required={true}
          name={nameFromProfessionalSignup}
          functionOnchange={onChange}
          pattern={pattern}
          testId={dataTestid}
          role={role}
          alt={alt}
          value={valueFromProfessionalSignup}
          
        />

        <span
          id="signup-error-message"
          className="text-danger mt-2 signup-error-message professional-signup-error-message"
        >
          {formInputFieldError}
        </span>

        {(formFieldName === "Password" || formFieldName === "Confirm Password")   ? (
          <InputGroup
            className="input-group-text bg-white"
            id="visibile-icon"
            reIcons={showPassword ?  
                              <FaEye className="visible-eye" onClick={handleEyeClick} />: 
                              <FaEyeSlash className="visible-eye" onClick={handleEyeClick} />
                  }
          />
        ) : null}
      </div>
 
    </div>
  );
};

export default FormInput;
