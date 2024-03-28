import React, { useState } from "react";

const FormStateBlur = () => {
  const [unfocused, setUnfocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false)

  const handleUnfocused = () => {
    setUnfocused(true);
  };

  const handleEye = () => {
    setShowPassword(!showPassword)
  }

  return {
    unfocused, 
    setUnfocused,
    handleUnfocused,
    handleEye,
    setShowPassword,
    showPassword
  }
};

export default FormStateBlur;
