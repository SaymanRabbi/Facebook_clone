import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { profilereducer } from "../../func/reducers";
import './style.css';

export default function Profile() {
  // covermenu
  const [showCoverMenu, setShowCoverMenu] = useState(true);
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
        <div className="profile_cover">
          {
            profile.cover &&
            <img src={profile.cover} alt="cover" className="cover" />
          }
          <div className="update_cover_wrapper">
            <div className="open_cover_update" onClick={()=>setShowCoverMenu(!showCoverMenu)}>
              <i className="camera_filled_icon"></i>
              Add Cover Photo
            </div>
            {
              showCoverMenu && <div className="open_cover_menu">
                <div className="open_cover_menu_item">
                  <i className="photo_icon">
                  </i>
                  select photo
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>;
}
