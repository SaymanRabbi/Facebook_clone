import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const SendEmail = ({
  userInfos,
  error,
  setError,
  setLoading,
  setVisible,
  loading,
  email,
}) => {
  const sendVerificationCode = async () => {
    try {
      setLoading(true);
      await axios.post(
        `https://facebook-server-1-saymanrabbi.vercel.app/sendResetPasswordCode`,
        { email }
      );
      setError("");
      setVisible(2);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.messages);
    }
  };
  return (
    <div className="reset_form dynamic_height">
      <div className="reset_form_header">Reset Your Password</div>
      <div className="reset_grid">
        <div className="reset_left">
          <div className="reset_form_text">
            How do you want to receive the code to reset your password?
          </div>
          <label htmlFor="email" className="hover1">
            <input type="radio" name="" id="email" checked readOnly />
            <div className="label_col">
              <span>Send code via email</span>
              <span>{userInfos?.email}</span>
            </div>
          </label>
        </div>
        <div className="reset_right">
          <img src={userInfos?.picture} alt="" />
          <span>{userInfos?.email}</span>
          <span>Facebook user</span>
        </div>
      </div>
      {error && (
        <div className="error_text" style={{ padding: "10px" }}>
          {error}
        </div>
      )}
      <div className="reset_form_btns">
        <Link to="/login" className="gray_btn">
          Not You ?
        </Link>
        <button onClick={() => sendVerificationCode()} className="blue_btn">
          Continue
        </button>
      </div>
    </div>
  );
};

export default SendEmail;
