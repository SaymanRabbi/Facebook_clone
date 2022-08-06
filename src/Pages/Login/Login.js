import LoginFooter from '../../components/Login/LoginFooter';
import LoginForm from '../../components/Login/LoginForm';
import './Login.css';

const Login = () => {

  return (
    <div className="login">
      <div className="login_wrapper">
        <LoginForm/>
        {/* ==============Register Part================= */}
        <div className="register"></div>
        {/* ===============Footer Part=============== */}
        <LoginFooter/>
      </div>
    </div>
  );
};

export default Login;