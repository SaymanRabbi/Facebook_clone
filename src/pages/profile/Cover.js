import React, { useRef, useState } from 'react';
import useClickoutside from '../../Helpers/useClickoutside';

const Cover = ({profile,visitor}) => {
    const [showCoverMenu, setShowCoverMenu] = useState(false);
    const [cover,setCover] = useState("")
    const [error, setError] = useState("");
    const menuRef = useRef(null)
    useClickoutside(menuRef,()=>setShowCoverMenu(false))
    const Refinput = useRef(null)
    const handleImage = (e) => {
      let file = e.target.files[0];
      if (
        file.type !== "image/jpeg" &&
        file.type !== "image/png" &&
        file.type !== "image/webp" &&
        file.type !== "image/gif"
      ) {
        setError(`${file.name} format is not supported.`);
        return;
      } else if (file.size > 1024 * 1024 * 5) {
        setError(`${file.name} is too large max 5mb allowed.`);
        return;
      }
  
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setCover(event.target.result);
      };
    };
    return (
  
            <div className="profile_cover" >
              <input type="file" ref={Refinput} hidden accept='image/jpeg,image/png,image/webp,image/gif'
              onChange={handleImage}
              />
          {
            profile?.cover &&
            <img src={profile.cover} alt="cover" className="cover" />
          }
          {
            !visitor &&<div className="update_cover_wrapper">
            <div className="open_cover_update" onClick={()=>setShowCoverMenu(!showCoverMenu)}>
              <i className="camera_filled_icon"></i>
              Add Cover Photo
            </div>
            {
              showCoverMenu && <div className="open_cover_menu" ref={menuRef}>
                <div className="open_cover_menu_item hover1">
                  <i className="photo_icon">
                  </i>
                  Select Photo
                </div>
                <div className="open_cover_menu_item hover1" onClick={()=>Refinput.current.click()}>
                  <i className="upload_icon">
                  </i>
                  Upload Photo
                </div>
              </div>
            }
          </div>
          }
        </div>
       
    );
};

export default Cover;