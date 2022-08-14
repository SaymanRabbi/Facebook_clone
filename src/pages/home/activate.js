import { useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import HomeLeft from "../../components/home/HomeLeft";
import Right from "../../components/home/Right/Right";
import Stroies from "../../components/home/Stroy/Stroies";
import ActivateForm from "./ActivateForm";
import './style.css'
export default function Activate() {
  //user
  const { user } = useSelector((user) => ({ ...user }));
  const [success, setSuccess] = useState("sasas");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
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
