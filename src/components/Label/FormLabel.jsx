import React from "react";

const FormLabel = ({labelFieldName, lableClassName}) => {
  return (
    <label class={lableClassName}>
      {labelFieldName} <span className="text-danger">*</span>
    </label>
  );
};

export default FormLabel;
