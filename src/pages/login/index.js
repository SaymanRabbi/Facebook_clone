import "./style.css";
import LoginForm from "../../components/login/LoginForm";
import Footer from "../../components/login/Footer";
import RegisterForm from "../../components/login/RegisterForm";
import { useState } from "react";

export default function Login() {
  const [vesible, setVisible] = useState(false);
  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm setVisible={setVisible} vesible={vesible} />
        {vesible && <RegisterForm setVisible={setVisible} vesible={vesible} />}
        <Footer />
      </div>
    </div>
  );
}
