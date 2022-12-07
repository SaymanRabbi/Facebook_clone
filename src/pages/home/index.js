import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CreatePost from "../../components/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import HomeLeft from "../../components/home/HomeLeft";
import Right from "../../components/home/Right/Right";
import SendVerification from "../../components/home/sendVerification/SendVerification";
import Stroies from "../../components/home/Stroy/Stroies";
import Post from "../../components/Posts/Post";
import './style.css';
export default function Home({setVisible,posts,loading,getAllpost}) {
  const middle = useRef(null)
  const [height,setHeight] = useState(0)
  useEffect(()=>{
  setHeight(middle.current.clientHeight)
  },[loading,height])
  useEffect(()=>{
    getAllpost()
  },[])
  const { user } = useSelector((user) => ({ ...user }))
  return <div className="home" style={{height:`${height+150}px`}}>
    <Header page="home"/>
    <HomeLeft user={user} />
    <div className="home_middle" ref={middle}>
      <Stroies />
      {
        user.verified === false && <SendVerification user={user} />
      } 
      <CreatePost user={user} setVisible={setVisible}/>
      <div className="posts">
        {
          posts?.map(post=><Post key={post._id} post={post} user={user}/>)
        }
      </div>
      </div>
    <Right user={user}/>
</div>;
}
