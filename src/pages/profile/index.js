import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import CreatePost from "../../components/CreatePost/CreatePost";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import Post from "../../components/Posts/Post";
import { profilereducer } from "../../func/reducers";
import Cover from "./Cover";
import Friends from "./Friends";
import GridPosts from "./GridPosts";
import Photos from "./Photos";
import PplYouMayKnow from "./PplYouMayKnow";
import ProfileMenu from "./ProfileMenu";
import ProfilePictureInfo from "./ProfilePictureInfo";
import './style.css';

export default function Profile({setVisible}) {
  const [photos,setPhotos] = useState({})
  // covermenu
  const navigate = useNavigate()
  const {username} = useParams();
  const { user } = useSelector((state) => ({ ...state }));
  const userName = username === undefined ? user.usrname : username;
  const path = `${userName}/*`
  const max=30
  const sort = 'desc'
  const [{loading,error,profile},dispatch] = useReducer(profilereducer,{
    loading:false,
    error:null,
    profile:{}
  })
  
  useEffect(()=>{
    getProfile()
  },[userName])
  const visitor =  userName===user.usrname? false : true;
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
        try {
          const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/listimages`,{
            path,max,sort
          },{
            headers:{
              Authorization:`Bearer ${user.token}`
            }
          });
          setPhotos(data)
        } catch (error) {
          console.log(error);
        }
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
       <Cover profile={profile} visitor={visitor} photo = {photos.resources}/>
       <ProfilePictureInfo profile={profile} visitor={visitor} photos ={photos?.resources}/>
       <ProfileMenu/>
      </div>
    </div>
    <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <PplYouMayKnow />
            <div className="profile_grid">
              <div className="profile_left">
                <Intro detailss={profile.details} visitor={visitor}/>
                <Photos photos={photos}/>
                <Friends friends={profile.friends}/>
                <div className="relative_fb_copyright">
                  <Link to="/">Privacy </Link>
                  <span>. </span>
                  <Link to="/">Terms </Link>
                  <span>. </span>
                  <Link to="/">Advertising </Link>
                  <span>. </span>
                  <Link to="/">
                    Ad Choices <i className="ad_choices_icon"></i>{" "}
                  </Link>
                  <span>. </span>
                  <Link to="/"></Link>Cookies <span>. </span>
                  <Link to="/">More </Link>
                  <span>. </span> <br />
                  Meta © 2022
                </div>
              </div>
              <div className="profile_right">
                {
                  !visitor && <CreatePost user={user} profile setVisible={setVisible} />
                }
                <GridPosts />
                <div className="posts">
                  {
                    profile?.post?.map((post)=>
                    <Post post={post} user={user} key={post._id} profile={profile}/>
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
