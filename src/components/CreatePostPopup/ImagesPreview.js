import React, { useRef } from "react";
import EmojiPicker from "./EmojiPicker";
const ImagesPreview = ({ user, text, setText,images,setImages }) => {
  const imagesInputRef = useRef(null);
  const handleImages = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((img) => {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (readerEvent) => {
        setImages((images) => [...images, readerEvent.target.result]);
      };
    });
  }
  return (
    <div className="overflow_a">
      <EmojiPicker user={user} text={text} setText={setText} type2/>
      <div className="add_pics_wrap">
        <input
          type="file"
          multiple
          hidden
          ref={imagesInputRef}
          onChange={handleImages}
        />
        {images && images.length ? (
          ""
        ) : (
          <div className="add_pics_inside1">
            <div className="small_white_circle">
              <i className="exit_icon"></i>
            </div>
            <div
              className="add_col"
              onClick={() => {
                imagesInputRef.current.click();
              }}
            >
              <div className="add_circle">
                <i className="addPhoto_icon"></i>
              </div>
              <span>Add Photos/Videos</span>
              <span>or drag and drop</span>
            </div>
          </div>
        )}
        <div className="add_pics_inside2">
          <div className="add_circle">
            <i className="phone_icon"></i>
          </div>
          <div className="mobile_text">Add phots from your mobile device.</div>
          <span className="addphone_btn">Add</span>
        </div>
      </div>
    </div>
  );
};

export default ImagesPreview;
