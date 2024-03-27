import React from "react";
import FormInput from "../Input/FormInput";
import Input from "../Input/Input";
const ProfessionalSignUpForm = () => {
  return (
    <form class="row signup-forms">
      <FormInput
        formInputDivClassName="col-md-6 mt-2"
        formInputType="text"
        formInputId="firstName"
        formAriaLabel="firstName"
        formFieldName="First Name"
        formInputFieldError="First Name is Required"
        formFieldRequired={true}
      />
       <FormInput
        formInputDivClassName="col-md-6 mt-2"
        formInputType="text"
        formInputId="lastName"
        formAriaLabel="lastName"
        formFieldName="Last Name"
        formInputFieldError="Last Name is Required"
        formFieldRequired={true}
      />
      <FormInput
        formInputDivClassName="col-md-12 mt-2"
        formInputType="email"
        formInputId="emailID"
        formAriaLabel="emailID"
        formFieldName="Email ID"
        formInputFieldError="Email ID is Required"
        formFieldRequired={true}
      />
      <FormInput
        formInputDivClassName="col-md-6 mt-2"
        formInputType="text"
        formInputId="mobileNumber"
        formAriaLabel="mobileNumber"
        formFieldName="Mobile Number"
        formInputFieldError="Mobile Number is Required"
        formFieldRequired={true}
      />
       <FormInput
        formInputDivClassName="col-md-6 mt-2"
        formInputType="date"
        formInputId="dateOfBirth"
        formAriaLabel="dateOfBirth"
        formFieldName="Date of Birth"
        formInputFieldError="Date of Birth is Required"
        formFieldRequired={true}
      />
       <FormInput
        formInputDivClassName="col-md-6 mt-2"
        formInputType="text"
        formInputId="country"
        formAriaLabel="country"
        formFieldName="Country"
        formInputFieldError="Country Name is Required"
        formFieldRequired={true}
      />
       <FormInput
        formInputDivClassName="col-md-6 mt-2"
        formInputType="text"
        formInputId="city"
        formAriaLabel="city"
        formFieldName="City"
        formInputFieldError="City Name is Required"
        formFieldRequired={true}
      />
      <FormInput
        formInputDivClassName="col-md-6 mt-2"
        formInputType="password"
        formInputId="password"
        formAriaLabel="password"
        formFieldName="Password"
        formInputFieldError="Password is Required"
        formFieldRequired={true}
      />
      <FormInput
        formInputDivClassName="col-md-6 mt-2"
        formInputType="password"
        formInputId="confirmPassword"
        formAriaLabel="confirmPassword"
        formFieldName=" Password"
        formInputFieldError="Password does not match"
        formFieldRequired={true}
      />
                                         
      <div class="col-12 mt-2">
        <div class="form-check">
            <Input
            className="form-check-input"
            type="checkbox"
            id="termsAndCondition"
            required={true}
            />
         
          <label class="form-check-label" for="invalidCheck">
            I agree to all the <a href="#">Terms</a> and
            <a href="#">Privacy policy</a>
          </label>
          <div class="text-danger signup-error-message">You must agree before submitting.</div>
        </div>
      </div>

      <div class="d-grid mt-2">
        <button className="btn sign-up-buttons ">Create Account</button>
      </div>
    </form>
  );
};

export default ProfessionalSignUpForm;
