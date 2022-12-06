import React, { useEffect, useState } from 'react';
import Moment from "react-moment";
import { Link } from 'react-router-dom';
import { createReact, getReact } from '../../func/post';
import { Dots, Public } from "../../svg";
import Comment from './Commnet';
import CreateComent from './CreateComent';
import './Post.css';
import PostMenu from './PostMenu';
import ReactPopup from './ReactPopup';
const Post = ({post,user,profile}) => {
  const [commentData, setCommentData] = useState([]);
  useEffect(()=>{
    setCommentData(post?.comments)
  },[post])
  const [visible, setVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
 const [react, setReact] = useState([]);
 const [cheack, setCheack] = useState(''); 
 const [total, setTotal] = useState(0);
 const [count, setCount] = useState(1);
  const getReactFunc = async ()=>{
    const data = await getReact(post?._id,user?.token);
    setReact(data?.data?.reacts);
    setCheack(data?.data?.cheack?.react)
    setTotal(data?.data?.total)
  }
  useEffect(()=>{
    getReactFunc()
  },[post])
  
  const reactHandeler =async(type)=>{
    createReact(type,post?._id, user.token)
    if (cheack == type) {
      setCheack();
      let index = react.findIndex((item)=>item.react == cheack);
      if(index !== -1){
        setReact([...react,(react[index].count = --react[index].count)])
        setTotal((prev)=>--prev)
      }
    } else {
      setCheack(type);
      let index = react.findIndex((item)=>item.react == type);
      let index2 = react.findIndex((item)=>item.react == cheack);
      if(index !== -1){
        setReact([...react,(react[index].count = ++react[index].count)])
        setTotal((prev)=>++prev)
      }
      if(index2 !== -1){
        setReact([...react,(react[index2].count = --react[index2].count)])
        setTotal((prev)=>--prev)
      }
    }
  }
  const showMore = () => {
    setCount((prev) => prev + 3);
  };
    return (
        <div className="post" style={{width:`${profile && '100%'}`}}>
      <div className="post_header">
        <Link
          to={`/profile/${post?.user?.username}`}
          className="post_header_left"
        >
          <img src={post?.user?.picture} alt="" />
          <div className="header_col">
            <div className="post_profile_name">
              {post?.user?.first_name} {post?.user?.last_name}
              <div className="updated_p">
                {post.type == "profilePicture" &&
                  `updated ${
                    post?.user?.gender === "male" ? "his" : "her"
                  } profile picture`}
                {post.type == "cover" &&
                  `updated ${
                    post?.user?.gender === "male" ? "his" : "her"
                  } cover picture`}
              </div>
            </div>
            <div className="post_profile_privacy_date">
              <Moment fromNow interval={30}>
                {post?.createdAt}
              </Moment>
              . <Public color="#828387" />
            </div>
          </div>
        </Link>
        <div className="post_header_right hover1"
         onClick={() => setShowMenu((prev) => !prev)}
        >
          <Dots color="#828387" />
        </div>
      </div>
      {post?.background ? (
        <div
          className="post_bg"
          style={{ backgroundImage: `url(${post.background})` }}
        >
          <div className="post_bg_text">{post.text}</div>
        </div>
      ) :post.type===null? (
        <>
          <div className="post_text">{post.text}</div>
          {post?.images && post.images.length && (
            <div
              className={
                post?.images.length === 1
                  ? "grid_1"
                  : post.images.length === 2
                  ? "grid_2"
                  : post.images.length === 3
                  ? "grid_3"
                  : post.images.length === 4
                  ? "grid_4"
                  : post.images.length >= 5 && "grid_5"
              }
            >
              {post.images.slice(0, 5).map((image, i) => (
                <img src={image.url} key={i} alt="" className={`img-${i}`} />
              ))}
              {post.images.length > 5 && (
                <div className="more-pics-shadow">
                  +{post.images.length - 5}
                </div>
              )}
            </div>
          )}
        </>
      ):post.type==='profilePicture'?
    <div className='post_profile_wrap'>
      <div className="post_updated_bg">
        <img src={post.user.cover} alt="" />
      </div>
     <img src={post.images[0].url} alt="" className='post_updated_picture' />
    </div>:<div className='post_cover_wrap'>
      <img src={post.images[0].url} alt="" />
      </div>}
       <div className="post_infos">
        <div className="reacts_count">
          <div className="reacts_count_imgs">
            {react.sort((a, b) => {
            return b.count - a.count;
           }).slice(0,3).map((r,i)=>
              r.count>0 &&(<img src={`../../../reacts/${r.react}.svg`} key={i}/>)
             
            )}
          </div>
          <div className="reacts_count_num">{total ? total:''}</div>
        </div>
        <div className="to_right">
          <div className="comments_count">{`${commentData.length?commentData.length:'0'} comments`}</div>
          <div className="share_count">0 share</div>
        </div>
      </div>
      <div className="post_actions">
        <ReactPopup visible={visible} setVisible={setVisible} reactHandeler={reactHandeler}/>
        <div
          className="post_action hover1"
          onMouseOver={() => {
            setTimeout(() => {
              setVisible(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setVisible(false);
            }, 500);
          }}
          onClick={() => reactHandeler(cheack ? cheack : "like")}
        > {cheack ? (
          <img
            src={`../../../reacts/${cheack}.svg`}
            alt=""
            className="small_react"
            style={{ width: "18px" }}
          />
        ) : (
          <i className="like_icon"></i>
        )}
        <span
          style={{
            color: `
        
        ${
          cheack === "like"
            ? "#4267b2"
            : cheack === "love"
            ? "#f63459"
            : cheack === "haha"
            ? "#f7b125"
            : cheack === "sad"
            ? "#f7b125"
            : cheack === "wow"
            ? "#f7b125"
            : cheack === "angry"
            ? "#e4605a"
            : ""
        }
        `,
          }}
        >
          {cheack ? cheack : "Like"}
        </span>
        </div>
        <div className="post_action hover1">
          <i className="comment_icon"></i>
          <span>Comment</span>
        </div>
        <div className="post_action hover1">
          <i className="share_icon"></i>
          <span>Share</span>
        </div>
      </div>
      <div className="comments_wrap">
        <div className="comments_order"></div>
        <CreateComent user={user} postId={post?._id} setCount={setCount}/>
        {commentData&&
          commentData
            ?.sort((a, b) => {
              return new Date(b.commentAt) - new Date(a.commentAt);
            })
            ?.slice(0, count)
            ?.map((comment, i) => 
               <Comment comment={comment} key={i} />
            )}
            {count < commentData.length && (
          <div className="view_comments" onClick={() => showMore()}>
            View more comments
          </div>
        )}
      </div>
      {showMenu && (
        <PostMenu
          userId={user.id}
          postUserId={post.user._id}
          imagesLength={post?.images?.length}
          setShowMenu={setShowMenu}
        />
      )}
    </div>
    );
};

export default Post;