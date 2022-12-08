import axios from "axios";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CreatePost from "../../components/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import HomeLeft from "../../components/home/HomeLeft";
import Right from "../../components/home/Right/Right";
import Stroies from "../../components/home/Stroy/Stroies";
import ActivateForm from "./ActivateForm";
import './style.css';
export default function Activate() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  //user
  const { user } = useSelector((user) => ({ ...user }));
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useParams()
  
  useEffect(() => {
    activateAccount()
  }, [])
  const activateAccount = async () => { 
    
    try {
      setLoading(true);
      const { data } = await axios.post(
        `https://facebookcloneserver-production.up.railway.app/activate`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data?.messages); 
      Cookies.set("user", JSON.stringify({ ...user, verified: true }))
      dispatch({ type: "VERIFY", payload: true });
      setTimeout(() => {
        navigate("/")
      }, 3000);
    } catch (error) {
      setError(error.response.data.messages);
      setTimeout(() => {
        navigate("/")
      }, 3000);
     
    }
      }
  return (
    <div className="home">
      {success && (
        <ActivateForm
          type="success"
          header="Account verification succeded."
          text={success}
          loading={loading}
        />
      )}
      {error && (
        <ActivateForm
          type="error"
          header="Account verification failed."
          text={error}
          loading={loading}
        />
      )}
      <Header />
      <HomeLeft user={user} />
      <div className="home_middle">
        <Stroies />
        <CreatePost user={user} />
      </div>
      <Right user={user} />
    </div>
  );
}
