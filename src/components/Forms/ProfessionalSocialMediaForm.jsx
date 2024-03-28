import React, { useState } from "react";
import FormInput from "../Input/FormInput";
import Input from "../Input/Input";
const ProfessionalSocialMediaForm = () => {

    const [professionalSocialMediaInputValues, setProfessionalSocialMediaInputValues] = useState({
        firstName       : "",
        lastName        : "",
        emailID         : "",
        mobileNumber    : "",
        dateOfBirth     : "",
        country         : "",
        city            : "",
        password        : "",
        confirmPassword : ""
    }) 


    const professionalSocialMediaInputs = [
        {
          id : 1,
          name : "firstName",
          type : "text",
          placeholder : "FirstName",
          label  :"FirstName",
          errorMessage : "First Name should be 3-30 characters and it shouldn't include special characters",
          required:true,
          pattern:"^[A-Za-z0-9]{3,16}$",
          className : "form-control",
          dataTestid : "firstName",
          role:"firstName",
          alt:"firstName"
        },
        {
          id : 2,
          name : "lastName",
          type : "text",
          placeholder : "Lastname",
          label  :"Lastname",
          errorMessage : "Last Name should be 3-16 characters and it shouldn't include special characters",
          required:true,
          pattern:"^[A-Za-z0-9]{3,16}$",
          className : "form-control",
          alt:"lastName"
    
        },
        {
          id : 3,
          name : "emailID",
          type : "email",
          placeholder : "Email",
          label  :"Email",
          errorMessage : "Email should be in correct format",
          required:true,
          pattern : "^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$",
          className : "form-control",
          alt:"emailID"
    
        },
        {
          id : 4,
          name : "mobileNumber",
          type : "number",
          placeholder : "Mobile Number",
          label  :"Mobile Number",
          required:true,
          className : "form-control",
          errorMessage : "Mobile number should be entered",
          alt:"mobileNumber"
    
    
        },
        {
          id : 5,
          name : "dateOfBirth",
          type : "date",
          placeholder : "Date of Birth",
          label  :"Date of Birth",
          required:true,
          className : "form-control",
          alt:"dateOfBirth"
    
        },
        {
          id : 6,
          name : "country",
          type : "text",
          placeholder : "Country",
          label  :"Country",
          required:true,
          className : "form-control",
          errorMessage : "Type atleast 4 characters",
          alt:"country"
    
        },
        {
          id : 7,
          name : "city",
          type : "text",
          placeholder : "City",
          label  :"City",
          required:true,
          className : "form-control",
          errorMessage : "Type atleast 4 characters",
          alt:"city"
    
        }
      ]

  return (
    <form class="row signup-forms">

    {
        professionalSocialMediaInputs.map((professionalSocialMediaInput) => {
            return(
                <React.Fragment key={professionalSocialMediaInput.id}>
                    <FormInput 
                        formInputDivClassName={professionalSocialMediaInput.name ==="emailID" ? "col-md-12 mt-2" : "col-md-6 mt-2"}
                        formInputType={professionalSocialMediaInput.type}
                        formInputId={professionalSocialMediaInput.name}
                        formAriaLabel={professionalSocialMediaInput.name}
                        formFieldName={professionalSocialMediaInput.label}
                        formInputFieldError={professionalSocialMediaInput.errorMessage}
                        formFieldRequired={true}
                    />

                </React.Fragment>
            )
        })
    }

      {/* <FormInput
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
      /> */}
      
                                         
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

export default ProfessionalSocialMediaForm;
