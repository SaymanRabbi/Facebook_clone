import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Profile() {
  const { user } = useSelector((state) => ({ ...state }));
  const {username} = useParams();
  const userName = username === undefined ? user.usrname : username;
  console.log(userName);
  return <div>Profile</div>;
}
