import React, { useState } from "react";
import AddtoYourPost from "./AddtoYourPost";
import "./CreatePostPopup.css";
import EmojiPicker from "./EmojiPicker";
import ImagesPreview from "./ImagesPreview";

const CreatePostPopup = ({ user }) => {
  const [text, setText] = useState("");
  const [showPrev, setShowPrev] = useState(true);
  const [images, setImages] = useState([]);
  return (
    <div className="blur">
      <div className="postBox">
        <div className="box_header">
          <div className="small_circle">
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
          <EmojiPicker user={user} text={text} setText={setText} setShowPrev={setShowPrev}/>
        ) : (
          <ImagesPreview user={user} text={text} setText={setText} setShowPrev={setShowPrev} images={images} 
          setImages={setImages}/>
          
        )}
        <AddtoYourPost />
        <button className="post_submit">Post</button>
      </div>
    </div>
  );
};

export default CreatePostPopup;
