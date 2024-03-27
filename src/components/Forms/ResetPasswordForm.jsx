import React, { useState } from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import InputGroup from "../Input/InputGroup";
import Input from "../Input/Input";
import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const ResetPasswordForm = () => {
  // const pageNavigate = useNavigate();
  const [err, setErr] = useState(false)
  const [ErrMessage,setErrMessage] = useState('')
  const [usersDetails, setUsersDetails] = useState({
    email_id: '',
  })

  const handlekeydown = (e) =>{
    if(e.key === "Enter"){
      e.preventDefault()
    }
  }

  const handleSubmit = () => {
    if (usersDetails.email_id === '') {
      setErr(true)
    } else {
      if (usersDetails.email_id.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        setErr(false)
      } else {
        setErrMessage("Please enter a valid mail")
        setErr(true)
      }
    }
  }


  return (
    <form>
      {
        err && ErrMessage!=='' ?
          <Label
            className="mb-3 text-danger"
            title={ErrMessage}
          />
          :
          null
      }

      <div className="input-group mb-3 login-form">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon1"
          reIcons={<PiEnvelopeSimpleOpenThin className="fs-3" />}
        />
        <Input
          type="email"
          className="form-control login-input border border-0 rounded-3"
          placeHolder="Email ID"
          ariaLabel="email"
          testId="reset-email"
          name="email_id"
          functionOnchange={(e)=>setUsersDetails({...usersDetails,[e.target.name]: e.target.value})}
          functionOnkeyDown={handlekeydown}
        />
      </div>

      {
        err && usersDetails.email_id === '' ?
          <Label
            className="mb-3 text-danger"
            title="Please enter an email address."
          />
          :
          null
      }


      <div className="d-grid mt-3">
        <Button
          className="btn btn-lg  btn-login fw-bold mb-2"
          title="Sign in"
          buttonType="button"
          testId="reset-button"
          functionOnchange={handleSubmit}
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
