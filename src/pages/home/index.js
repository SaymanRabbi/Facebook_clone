import { useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import HomeLeft from "../../components/home/HomeLeft";
import Right from "../../components/home/Right/Right";
import Stroies from "../../components/home/Stroy/Stroies";
import './style.css'
export default function Home() {
  //user
  const { user } = useSelector((user) => ({ ...user }))
  return <div className="home">
    <Header/>
    <HomeLeft user={user} />
    <div className="home_middle">
      <Stroies />
      <CreatePost user={user}/>
      </div>
    <Right user={user}/>
</div>;
}
