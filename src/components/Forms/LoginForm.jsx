import React, { useState } from "react";
import Label from "../Label/Label";
import InputGroup from "../Input/InputGroup";
import Input from "../Input/Input";
import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import Button from "../Button/Button";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [LoginDetails, setLoginDetails] = useState({
    email_id: "",
    password: "",
  });

  const [LoginErrors, setLoginErrors] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [errMsg, setErrMsg] = useState("")

  const pageNavigate = useNavigate();

  const handlekeydown = (e) =>{
    if(e.key === "Enter"){
      e.preventDefault()
    }
  }

  const handleSubmit = async () => {
    if (LoginDetails.email_id === "" || LoginDetails.password === "") {
      setLoginErrors(true);
      setSubmitLoading(false);
    } else {
      if (LoginDetails.email_id.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
        setLoginErrors(false);
        setSubmitLoading(true);
        setTimeout(() => {
          pageNavigate("/home");
        }, 1000)
      }
      else {
        setErrMsg("Please enter a valid mail")
        setLoginErrors(true);
      }
    }
  };


  return (
    <form>
      {
        LoginErrors && errMsg !== '' ?
          <Label
            className="mb-3 text-danger"
            title={errMsg}
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
          testId="login-email-id"
          name="email_id"
          functionOnchange={(e)=> setLoginDetails({ ...LoginDetails, [e.target.name]: e.target.value })}
          functionOnkeyDown={handlekeydown}
        />
      </div>

      {
        LoginErrors && LoginDetails.email_id === '' ?
          <Label
            className="mb-3 text-danger"
            title="Please enter an email address."
          />
          :
          null
      }

      <div className="input-group mb-3 login-form ">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon2"
          reIcons={<CiLock className="fs-3" />}
        />
        <Input
          type="password"
          className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3"
          placeHolder="Password"
          ariaLabel="password"
          testId="login-pass"
          functionOnchange={(e)=> setLoginDetails({ ...LoginDetails, [e.target.name]: e.target.value })}
          functionOnkeyDown={handlekeydown}
          name="password"
        />

        <InputGroup
          className="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0"
          id="basic-addon3"
          reIcons={<BsFillEyeSlashFill className="fs-3 visible-eye" />}
        />
      </div>

      {
        LoginErrors && LoginDetails.password === '' ?
          <Label title="Please enter your password." className="mb-3 text-danger" />
          :
          null
      }

      <div className="d-grid mt-3">

        {
          submitLoading ?
            <Button
              className="btn btn-lg btn-login  fw-bold mb-2"
              title="Loading...."
              buttonType="button"
              testId="disable-login-button"
              disable={true}
            />
            :
            <Button
              className="btn btn-lg btn-login  fw-bold mb-2"
              title="Sign in"
              buttonType="button"
              testId="login-button"
              functionOnchange={handleSubmit}
            />
        }

        <div className="text-end">
          <Link className="small" to={'/forgot_password'} data-testid="forgot-password">
            Forgot password?
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
