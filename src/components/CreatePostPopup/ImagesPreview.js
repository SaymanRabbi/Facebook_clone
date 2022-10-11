import React from "react";
import EmojiPicker from "./EmojiPicker";
const ImagesPreview = ({ user, text, setText }) => {
  return (
    <div className="overflow_a">
      <EmojiPicker user={user} text={text} setText={setText} type2/>
    </div>
  );
};

export default ImagesPreview;
