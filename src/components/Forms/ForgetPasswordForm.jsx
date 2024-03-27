import React, { useState } from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import InputGroup from "../Input/InputGroup";
import Input from "../Input/Input";
import { PiEnvelopeSimpleOpenThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ForgetPasswordForm = () => {
  const pageNavigate = useNavigate();
  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [userDetails, setUserDetails] = useState({
    email_id: "",
    password: "",
    confirmPassword: "",
  });

  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleSubmitData = () => { 
    if (userDetails.password === "" || userDetails.confirmPassword === "") {
      setErr(true);
    } else {
      if (userDetails.password === userDetails.confirmPassword) {
        setErr(false);
      } else {
        setErrMsg("password and confirm password are not matching")
        setErr(true);
      }
    }
  };

  return (
    <form>

      {err && errMsg !== "" ? (
        <Label
          className="mb-3 text-danger"
          title={errMsg}
        />
      ) : null}

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
          testId="forgot-email"
          disabled={true}
        />
      </div>

      {err && userDetails.email_id === "" ? (
        <Label
          className="mb-3 text-danger"
          title="Please enter an email address."
        />
      ) : null}

      <div className="input-group mb-3 login-form ">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon2"
          reIcons={<CiLock className="fs-3" />}
        />
        <Input
          type="password"
          className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3"
          placeHolder="New Password"
          ariaLabel="password"
          testId="forgot-password"
          functionOnchange={(e) =>
            setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
          }
          functionOnkeyDown={handlekeydown}
          name="password"
        />

        <InputGroup
          className="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0"
          id="basic-addon3"
          reIcons={<BsFillEyeSlashFill className="fs-3 visible-eye" />}
        />
      </div>

      {err && userDetails.password === "" ? (
        <Label
          title="Please enter your new password."
          className="mb-3 text-danger"
        />
      ) : null}

      <div className="input-group mb-3 login-form ">
        <InputGroup
          className="login-input-group-text input-group-text border border-0"
          id="basic-addon2"
          reIcons={<CiLock className="fs-3" />}
        />
        <Input
          type="password"
          className="form-control login-input border-start-0 border-top-0 border-bottom-0 rounded-3"
          placeHolder="Confirm Password"
          ariaLabel="password"
          testId="forgot-confirm-password"
          functionOnchange={(e) =>
            setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
          }
          functionOnkeyDown={handlekeydown}
          name="confirmPassword"
        />

        <InputGroup
          className="login-input-group-text input-group-text border-end-0 border-top-0 border-bottom-0"
          id="basic-addon3"
          reIcons={<BsFillEyeSlashFill className="fs-3 visible-eye" />}
        />
      </div>

      {err && userDetails.confirmPassword === "" ? (
        <Label
          title="Please enter confirm password."
          className="mb-3 text-danger"
        />
      ) : null}

      <div className="d-grid mt-3">
        <Button
          className="btn btn-lg btn-login fw-bold mb-2"
          title="Sign in"
          testId="forgot-submit-button"
          buttonType="button"
          functionOnchange={handleSubmitData}
        />
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
