import { useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import HomeLeft from "../../components/home/HomeLeft";
import Right from "../../components/home/Right/Right";
import SendVerification from "../../components/home/sendVerification/SendVerification";
import Stroies from "../../components/home/Stroy/Stroies";
import './style.css';
export default function Home({setVisible,posts}) {
  console.log(posts);
  //user
  const { user } = useSelector((user) => ({ ...user }))
  return <div className="home">
    <Header/>
    <HomeLeft user={user} />
    <div className="home_middle">
      <Stroies />
      {
        user.verified === false && <SendVerification user={user} />
      } 
      <CreatePost user={user} setVisible={setVisible}/>
      {
        posts?.map((post) => <div key={post._id}>
          {post._id}
        </div>)
      }
      </div>
    <Right user={user}/>
</div>;
}
