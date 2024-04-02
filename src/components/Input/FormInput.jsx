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
  showPassword,
  showConfirmPassword
}) => {
  return (
    <div className={`${formInputDivClassName} user-form-group`}>
      <FormLabel labelFieldName={formFieldName} />
      <div className={(formFieldName === "Password" || formFieldName === "Confirm Password") ? "input-group" : "input-group "}>
        <Input
          type={formInputType}
          className={(formFieldName === "Password" || formFieldName === "Confirm Password") ? "form-control" : "form-control w-100"}
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
          formFieldName={formFieldName}

        />
        {(formFieldName !== "Password" && formFieldName !== "Confirm Password") ?
          <span
            id="signup-error-message"
            className="text-danger mt-2 signup-error-message professional-signup-error-message"
          >
            {formInputFieldError}
          </span> : <React.Fragment>
            <InputGroup
              className="input-group-text bg-white"
              formInputFieldError={formInputFieldError}
              id="visibile-icon"
              reIcons={showPassword ?
                <FaEye className="visible-eye" onClick={handleEyeClick} /> :
                <FaEyeSlash className="visible-eye" onClick={handleEyeClick} />
              }
            />
          </React.Fragment>
        }
      </div>

    </div>
  );
};

export default FormInput;