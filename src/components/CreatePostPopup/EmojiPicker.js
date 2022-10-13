import Picker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";

const EmojiPicker = ({ user, text, setText,type2,background,setBackground }) => {
  const textRef = useRef(null);
  const bgRef  = useRef(null);
  const [picker, setPicker] = useState(false);
  const [showBgs, setShowBgs] = useState(false);
  const [cursorPosition, setCursorPosition] = useState();
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  const handleEmoji = (e, { emoji }) => {
    const ref = textRef.current;
    ref.focus();
    const start = text.substring(0, ref.selectionStart);
    const end = text.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setText(newText);
    setCursorPosition(start.length + emoji.length);
  };
  const postBackgorund =  [
    "../../../images/postBackgrounds/1.jpg",
    "../../../images/postBackgrounds/2.jpg",
    "../../../images/postBackgrounds/3.jpg",
    "../../../images/postBackgrounds/4.jpg",
    "../../../images/postBackgrounds/5.jpg",
    "../../../images/postBackgrounds/6.jpg",
    "../../../images/postBackgrounds/7.jpg",
    "../../../images/postBackgrounds/8.jpg",
    "../../../images/postBackgrounds/9.jpg",
  ]
  const backgroundhandeler = (index)=>{
    bgRef.current.style.backgroundImage=`url(${postBackgorund[index]})`
    setBackground(postBackgorund[index])
    bgRef.current.classList.add("bgActive")
  }
  const removebg =()=>{
    bgRef.current.style.backgroundImage=""
    setBackground("")
    bgRef.current.classList.remove("bgActive")
  }
  return (
    <div className={type2 ?"images_input":''}>
      <div className={!type2 ?'flex_center':''} ref={bgRef}>
        <textarea
          ref={textRef}
          maxLength="250"
          value={text}
          placeholder={`What's on your mind, ${user.first_name}`}
          className={`post_input ${type2 && "input2"}` }
          onChange={(e) => setText(e.target.value)}
          style={{paddingTop:`${background&& showBgs ? Math.abs(textRef.current.value.length * 0.1 -20) :'0'}%`}}
        ></textarea>
      </div>
      <div className={!type2 ? 'post_emojis_wrap':''}>
        {picker && (
          <div className={`comment_emoji_picker ${type2 ? 'rlmove2' :'rlmove'}`}>
            <Picker onEmojiClick={handleEmoji} />
          </div>
        )}
        {!type2&& <span onClick={()=>removebg()}><img src="../../../icons/colorful.png" alt="" onClick={()=>{setShowBgs(!showBgs)}}/></span>}
        {
         !type2&& showBgs && <div className="post_backgrounds">
          <div className="no_bg" onClick={()=>removebg()}></div>
          {
            postBackgorund.map((bg,index)=>(<img src={bg} alt="" key={index} onClick={()=>backgroundhandeler(index)}/>)
            )
          }
        </div>
        }
        <i
          className={`emoji_icon_large ${type2 && "moveleft"}`}
          onClick={() => {
            setPicker((prev) => !prev);
          }}
        ></i>
      </div>
    </div>
  );
};

export default EmojiPicker;
