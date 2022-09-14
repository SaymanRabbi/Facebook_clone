import React from "react";
import Picker from "emoji-picker-react";

const EmojiPicker = ({ handleEmoji, picker, setPicker }) => {
  return (
    <div className="post_emojis_wrap">
      {picker && (
        <div className="comment_emoji_picker rlmove">
          <Picker onEmojiClick={handleEmoji} />
        </div>
      )}
      <img src="../../../icons/colorful.png" alt="" />
      <i
        className="emoji_icon_large"
        onClick={() => {
          setPicker((prev) => !prev);
        }}
      ></i>
    </div>
  );
};

export default EmojiPicker;
