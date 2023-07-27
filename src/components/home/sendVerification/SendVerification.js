import axios from "axios";
import React, { useState } from 'react';
import './SendVerification.css';
const SendVerification = ({user}) => {
    const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const sendVerificationLink = async () => {
    try {
      const { data } = await axios.post(
        `https://facebook-server-1-saymanrabbi.vercel.app/sendVerification`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(data);
      setSuccess(data.messages);
    } catch (error) {
      setError(error.response.data.messages);
    }
  };
  return (
    <div className="send_verification">
      <span>
        Your account is not verified,verify your account before it gets deleted
        after a month from creating.
      </span>
      <a
        onClick={() => {
          sendVerificationLink();
        }}
      >
        click here to resend verification link
      </a>
      {success && <div className="success_text">{success}</div>}
      {error && <div className="error_text">{error}</div>}
    </div>
  );
};

export default SendVerification;