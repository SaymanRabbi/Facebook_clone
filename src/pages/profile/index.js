import axios from "axios";
import { useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { profilereducer } from "../../func/reducers";

export default function Profile() {
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
  return <div>
    <Header/>
  </div>;
}
