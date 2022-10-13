import React, { useRef, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import { toast } from "react-toastify";
import { createPost } from "../../func/post";
import useClickoutside from "../../Helpers/useClickoutside";
import AddtoYourPost from "./AddtoYourPost";
import "./CreatePostPopup.css";
import EmojiPicker from "./EmojiPicker";
import ImagesPreview from "./ImagesPreview";
import PostError from "./PostError";

const CreatePostPopup = ({ user,setVisible }) => {
  const popup = useRef(null)
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [images, setImages] = useState([]);
  const [background, setBackground] = useState('');
  useClickoutside(popup, () => setVisible(false));

  const submitPost = async()=>{
    if(background){
      setLoading(true)
      const res = await createPost(null,background,text,null,user.id,user.token)
      setLoading(false)
      if(res === "ok"){
        setBackground('')
        setText('')
        setVisible(false)
        toast.success("Post created successfully")
      }
     else{
    setError(res)
     }

    }
  }
  return (
    <div className="blur scrollbar">
      <div className="postBox scrollbar" ref={popup}>
        {
          error && <PostError error={error} setError={setError}/>
        }
        <div className="box_header">
          <div className="small_circle" onClick={()=>setVisible(false)}>
            <i className="exit_icon"></i>
          </div>
          <span>Create Post</span>
        </div>
        <div className="box_profile">
          <img src={user?.picture} alt="" className="box_profile_img" />
          <div className="box_col">
            <div className="box_profile_name">
              {user.first_name} {user.last_name}
            </div>
            <div className="box_privacy">
              <img src="../../../icons/public.png" alt="" />
              <span>Public</span>
              <i className="arrowDown_icon"></i>
            </div>
          </div>
        </div>

        {!showPrev ? (
          <EmojiPicker user={user} text={text} setText={setText} setShowPrev={setShowPrev}
          background={background} setBackground={setBackground}
          />
        ) : (
          <ImagesPreview user={user} text={text} setText={setText} setShowPrev={setShowPrev} images={images} 
          setImages={setImages}/>
          
        )}
        <AddtoYourPost setShowPrev={setShowPrev}/>
        <button className="post_submit" onClick={()=>submitPost()} disabled={loading}>{
          loading ? <PulseLoader color="#fff" size={5} /> : 'Post'
}</button>
      </div>
    </div>
  );
};

export default CreatePostPopup;
