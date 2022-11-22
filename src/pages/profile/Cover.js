import React, { useRef, useState } from 'react';
import useClickoutside from '../../Helpers/useClickoutside';

const Cover = ({profile,visitor}) => {
    const [showCoverMenu, setShowCoverMenu] = useState(false);
    const menuRef = useRef(null)
    useClickoutside(menuRef,()=>setShowCoverMenu(false))
    return (
  
            <div className="profile_cover" >
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
                  select photo
                </div>
                <div className="open_cover_menu_item hover1">
                  <i className="upload_icon">
                  </i>
                  Upload photo
                </div>
              </div>
            }
          </div>
          }
        </div>
       
    );
};

export default Cover;