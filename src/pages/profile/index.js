import axios from "axios";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { profilereducer } from "../../func/reducers";

export default function Profile() {
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
      dispatch({type:"PROFILE_SUCCESS",payload:data})
    } catch (error) {
      dispatch({
        type:"PROFILE_ERROR",
        payload:error.response.data.messages
      })
    }
  }
  console.log(profile);

  return <div>Profile</div>;
}
