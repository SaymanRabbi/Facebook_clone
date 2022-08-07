import LoginFooter from '../../components/Login/LoginFooter';
import LoginForm from '../../components/Login/LoginForm';
import RegisterForm from '../../components/Login/RegisterForm';
import './Login.css';

const Login = () => {

  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm/>
        {/* ==============Register Part================= */}
        <RegisterForm/>
        {/* ===============Footer Part=============== */}
        <LoginFooter/>
      </div>
    </div>
  );
};

export default Login;