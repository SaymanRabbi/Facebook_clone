import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import LoginInput from "../../components/inputs/loginInput";
const CodeVerification = ({
  code,
  setCode,
  error,
  setError,
  loading,
  setLoading,
  userInfos,
  setVisible,
}) => {
  const validateCode = Yup.object({
    code: Yup.string()
      .required("Code is required")
      .min("5", "Code must be 5 characters.")
      .max("5", "Code must be 5 characters."),
  });
  const email = userInfos.email;
  const verifyCode = async () => {
    try {
      setLoading(true);
      await axios.post(
        `https://facebook-server-1-saymanrabbi.vercel.app/validateResetCode`,
        { email, code }
      );
      setError("");
      setVisible(3);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response.data.messages);
    }
  };
  return (
    <div className="reset_form">
      <div className="reset_form_header">Code verification</div>
      <div className="reset_form_text">
        Please enter code that been sent to your email.
      </div>
      <Formik
        enableReinitialize
        initialValues={{
          code,
        }}
        validationSchema={validateCode}
        onSubmit={() => verifyCode()}
      >
        {(formik) => (
          <Form>
            <LoginInput
              type="text"
              name="code"
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code"
            />
            {error && <div className="error_text">{error}</div>}
            <div className="reset_form_btns">
              <Link to="/login" className="gray_btn">
                Cancel
              </Link>
              <button type="submit" className="blue_btn">
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CodeVerification;
