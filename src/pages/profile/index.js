import axios from "axios";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { profilereducer } from "../../func/reducers";
import Cover from "./Cover";
import PplYouMayKnow from "./PplYouMayKnow";
import ProfileMenu from "./ProfileMenu";
import ProfilePictureInfo from "./ProfilePictureInfo";
import './style.css';

export default function Profile() {
  // covermenu
  const navigate = useNavigate()
  const { user } = useSelector((state) => ({ ...state }));
  const {username} = useParams();
  const userName = username === undefined ? user.usrname : username;
  const [{loading,error,profile},dispatch] = useReducer(profilereducer,{
    loading:false,
    error:null,
    profile:{}
  })
  useEffect(()=>{
    getProfile()
  },[userName])
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
       <Cover profile={profile?.user}/>
       <ProfilePictureInfo profile={profile?.user}/>
       <ProfileMenu/>
      </div>
    </div>
    <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <PplYouMayKnow />
          </div>
        </div>
      </div>
  </div>;
}
