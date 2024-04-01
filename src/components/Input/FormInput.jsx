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
    <div className={formInputDivClassName}>
      <FormLabel labelFieldName={formFieldName} />
      <div className={(formFieldName === "Password" || formFieldName === "Confirm Password") ? "input-group" : "input-group d-flex flex-column"}>
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

        />
        {(formFieldName !== "Password" && formFieldName !== "Confirm Password") ?
          <span
            id="signup-error-message"
            className="text-danger mt-2 signup-error-message professional-signup-error-message"
          >
            {formInputFieldError}
          </span> : null
        }

        {(formFieldName === "Password" || formFieldName === "Confirm Password") ? (
          <React.Fragment className="d-flex flex-column">
            <InputGroup
              className="input-group-text bg-white"
              id="visibile-icon"
              reIcons={showPassword ?
                <FaEye className="visible-eye" onClick={handleEyeClick} /> :
                <FaEyeSlash className="visible-eye" onClick={handleEyeClick} />
              }
            />
            <span
              id="signup-error-message"
              className="text-danger mt-2 signup-error-message professional-signup-error-message"
            >
              {formInputFieldError}
            </span>
          </React.Fragment>

        ) : null}
      </div>

    </div>
  );
};

export default FormInput;