import axios from "axios";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CreatePost from "../../components/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import Post from "../../components/Posts/Post";
import { profilereducer } from "../../func/reducers";
import Cover from "./Cover";
import GridPosts from "./GridPosts";
import PplYouMayKnow from "./PplYouMayKnow";
import ProfileMenu from "./ProfileMenu";
import ProfilePictureInfo from "./ProfilePictureInfo";
import './style.css';

export default function Profile({setVisible}) {
  // covermenu
  const navigate = useNavigate()
  const {username} = useParams();
  const { user } = useSelector((state) => ({ ...state }));
  const userName = username === undefined ? user.usrname : username;
  const [{loading,error,profile},dispatch] = useReducer(profilereducer,{
    loading:false,
    error:null,
    profile:{}
  })
  useEffect(()=>{
    getProfile()
  },[userName])
  const visitor =  userName===user.usrname? false : true;
  console.log(visitor);
  const getProfile = async () => {
    try {
     dispatch({type:"PROFILE_REQUEST"})
      const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getProfile/${userName}`,{
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      });
      if(data.messages===false){
          navigate("/profile")
      }
      else{
           dispatch({type:"PROFILE_SUCCESS",payload:data})
      }
 
    } catch (error) {
      dispatch({
        type:"PROFILE_ERROR",
        payload:error.response.data.messages
      })
    }
  }
  return <div className="profile">
    <Header page='profile'/>
    <div className="profile_top">
      <div className="profile_container">
       <Cover profile={profile} visitor={visitor}/>
       <ProfilePictureInfo profile={profile} visitor={visitor}/>
       <ProfileMenu/>
      </div>
    </div>
    <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <PplYouMayKnow />
            <div className="profile_grid">
              <div className="profile_left"></div>
              <div className="profile_right">
                {
                  !visitor && <CreatePost user={user} profile setVisible={setVisible} />
                }
                <GridPosts />
                <div className="posts">
                  {
                    profile?.post?.map((post)=>
                    <Post post={post} user={user} key={post._id}/>
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>;
}
