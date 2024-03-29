import axios from "axios";
import { useEffect, useReducer, useRef, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useSelector } from "react-redux";
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate, useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import CreatePost from "../../components/CreatePost/CreatePost";
import CreatePostPopup from "../../components/CreatePostPopup/CreatePostPopup";
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
export default function Profile({getAllpost}) {
  const [photos,setPhotos] = useState({})
  const [visible,setVisible] = useState(false)
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
  // console.log(loading)
  useEffect(()=>{
    getProfile()
  },[userName])
  const [othername , setOtherName] = useState('')
  useEffect(()=>{
    setOtherName(profile?.details?.otherName)
  },[])
  const visitor =  userName===user.usrname? false : true;
  const getProfile = async () => {
    try {
      dispatch({type:"PROFILE_REQUEST"})
      const {data} = await axios.get(`https://facebook-server-1-saymanrabbi.vercel.app/getProfile/${userName}`,{
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      });
      if(data.messages===false){
        navigate("/profile")
      }
      else{
        try {
          const {data} = await axios.post(`https://facebook-server-1-saymanrabbi.vercel.app/listimages`,{
            path,max,sort
          },{
            headers:{
              Authorization:`Bearer ${user.token}`
            }
          });
          setPhotos(data)
        } catch (error) {
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
  const profileTop = useRef(null);
  const leftSide = useRef(null);
  const [height, setHeight] = useState();
  const [leftHeight, setLeftHeight] = useState();
  const [scrollHeight, setScrollHeight] = useState();
  useEffect(() => {
    setHeight(profileTop.current.clientHeight + 300);
    setLeftHeight(leftSide.current.clientHeight);
    window.addEventListener("scroll", getScroll, { passive: true });
    return () => {
      window.addEventListener("scroll", getScroll, { passive: true });
    };
  }, [loading, scrollHeight]);
  const check = useMediaQuery({
    query: "(min-width:901px)",
  });
  const getScroll = () => {
    setScrollHeight(window.pageYOffset);
  };
  return <div className="profile">
    {visible &&
       <CreatePostPopup  user={user} setVisible={setVisible} posts={profile?.posts} dispatch={dispatch} profile/>}
    <Header page='profile' getAllpost={getAllpost}/>
    <div className="profile_top" ref={profileTop}>
      <div className="profile_container">
      {
        loading ?
        <>
              <div className="profile_cover">
                <Skeleton
                  height="347px"
                  containerClassName="avatar-skeleton"
                  style={{ borderRadius: "8px" }}
                />
              </div>
              <div
                className="profile_img_wrap"
                style={{
                  marginBottom: "-3rem",
                  transform: "translateY(-8px)",
                }}
              >
                <div className="profile_w_left">
                  <Skeleton
                    circle
                    height="180px"
                    width="180px"
                    containerClassName="avatar-skeleton"
                    style={{ transform: "translateY(-3.3rem)" }}
                  />
                  <div className="profile_w_col">
                    <div className="profile_name">
                      <Skeleton
                        height="35px"
                        width="200px"
                        containerClassName="avatar-skeleton"
                      />
                      <Skeleton
                        height="30px"
                        width="100px"
                        containerClassName="avatar-skeleton"
                        style={{ transform: "translateY(2.5px)" }}
                      />
                    </div>
                    <div className="profile_friend_count">
                      <Skeleton
                        height="20px"
                        width="90px"
                        containerClassName="avatar-skeleton"
                        style={{ marginTop: "5px" }}
                      />
                    </div>
                    <div className="profile_friend_imgs">
                      {Array.from(new Array(6), (val, i) => i + 1).map(
                        (id, i) => (
                          <Skeleton
                          key={i}
                            circle
                            height="32px"
                            width="32px"
                            containerClassName="avatar-skeleton"
                            style={{ transform: `translateX(${-i * 7}px)` }}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className={`friendship ${!visitor && "fix"}`}>
                  <Skeleton
                    height="36px"
                    width={120}
                    containerClassName="avatar-skeleton"
                  />
                  <div className="flex">
                    <Skeleton
                      height="36px"
                      width={120}
                      containerClassName="avatar-skeleton"
                    />
                    {visitor && (
                      <Skeleton
                        height="36px"
                        width={120}
                        containerClassName="avatar-skeleton"
                      />
                    )}
                  </div>
                </div>
              </div>
            </>:<>
         <Cover profile={profile} visitor={visitor} photo = {photos.resources}/>
       <ProfilePictureInfo profile={profile} otherName={othername} visitor={visitor} photos ={photos?.resources}/>
        </>
      }
       <ProfileMenu/>
      </div>
    </div>
    <div className="profile_bottom">
        <div className="profile_container">
          <div className="bottom_container">
            <PplYouMayKnow />
            <div className={`profile_grid ${
                check && scrollHeight >= height && leftHeight > 650
                  ? "scrollFixed showLess"
                  : check &&
                    scrollHeight >= height &&
                    leftHeight < 650 &&
                    "scrollFixed showMore"
              }`}>
              <div className="profile_left" ref={leftSide}>
                {
                  loading?<>
                  <div className="profile_card">
      <div className="profile_card_header">
        Intro
      </div>
      <div className="sekelton_loader">
        <HashLoader color="#1876f2"/>
      </div>
      </div>
      <div className="profile_card">
      <div className="profile_card_header">
        Photos
        <div className="profile_header_link">See all Photos</div>
      </div>
      <div className="sekelton_loader">
        <HashLoader color="#1876f2"/>
      </div>
      </div>
      <div className="profile_card">
      <div className="profile_card_header">
        Friends
        <div className="profile_header_link">See all Friends</div>
      </div>
      <div className="sekelton_loader">
        <HashLoader color="#1876f2"/>
      </div>
      </div>
                  </>:<>
                  <Intro detailss={profile.details} visitor={visitor} setOtherName={setOtherName}/>
                <Photos photos={photos}/>
                <Friends friends={profile.friends}/>
                  </>
                }
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
                {
                  loading? <div className="sekelton_loader">
                    <HashLoader color="#1876f2"/>
                  </div>:profile?.posts?.length?<div className="posts">
                  {
                   profile?.posts?.map((post)=>
                    {
                      return  <Post post={post} user={user} key={post._id} profile={profile}/>
                    }
                    )
                  }
                </div>:<div className="no_post">No Post Avilabel</div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>;
}
