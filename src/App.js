import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePostPopup from "./components/CreatePostPopup/CreatePostPopup";
import { postsreducer } from "./func/reducers";
import Friends from "./pages/Friends/Friends";
import Home from "./pages/home";
import Activate from "./pages/home/activate";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Reset from "./pages/Reset/Reset";
import LoginRoutes from "./Routes/LoginRoutes";
import NotLoginRoutes from "./Routes/NotLoginRoutes";

function App() {
  const [visible, setVisible] = useState(false);
  const { user,darkTheme } = useSelector((state) => ({ ...state }));
  console.log(darkTheme)
  const [{loading,error,posts},dispatch] = useReducer(postsreducer,{
    loading:false,
    error:null,
    posts:[]
  })
  useEffect(()=>{
  getAllpost()
  },[])
  // console.log(posts)
   const getAllpost = async () => {
    try {
      dispatch({type:"POST_REQUEST"})
      const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/posts`,{
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      });
      dispatch({type:"POST_SUCCESS",payload:data})
    } catch (error) {
      dispatch({
        type:"POST_ERROR",
        payload:error?.response?.data?.messages
      })
    }
  }
  return (
    <div className={darkTheme && "dark"}>
      {visible &&
       <CreatePostPopup user={user} setVisible={setVisible} getAllpost={getAllpost} posts={posts} dispatch={dispatch}/>}
     
      <Routes>
        <Route element={<LoginRoutes />}>
          <Route path="/profile"  element={<Profile posts={posts}  getAllpost={getAllpost}  setVisible={setVisible}/>} exact />
          <Route path="/profile/:username"  element={<Profile getAllpost={getAllpost}  setVisible={setVisible}/>} exact />
          <Route path="/friends" element={<Friends getAllpost={getAllpost}  setVisible={setVisible}/>} exact />
          <Route path="/" element={<Home loading={loading} getAllpost={getAllpost} setVisible={setVisible} posts={posts} error={error}/>} exact />
          <Route path="/activate/:token" element={<Activate />} />
        </Route>
        <Route element={<NotLoginRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
