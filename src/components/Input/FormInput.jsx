import React from "react";
import FormLabel from "../Label/FormLabel";
import Input from "./Input";
import InputGroup from "./InputGroup";
import { FaEye } from "react-icons/fa";

const FormInput = ({
  formInputDivClassName,
  formFieldName,
  formInputFieldError,
  formInputType,
  formInputId,
  formAriaLabel,
}) => {
  return (
    <div class={formInputDivClassName}>
      <FormLabel labelFieldName={formFieldName} lableClassName="form-label" />
      <div class="input-group">
        <Input
          type={formInputType}
          className="form-control"
          id={formInputId}
          ariaLabel={formAriaLabel}
          required={true}
        />
        {formInputType === "password" ? (
          <InputGroup
            className="input-group-text bg-white"
            id="visibile-icon"
            reIcons={<FaEye className="visible-eye" />}
          />
        ) : null}
      </div>
      <div class="text-danger mt-2 signup-error-message">{formInputFieldError}</div>
    </div>
  );
};

export default FormInput;
