import React from 'react';

const Cover = ({profile,cover,setShowCoverMenu,showCoverMenu}) => {
   
    return (
        <div>
            <div className="profile_cover">
          {
            cover &&
            <img src={profile.cover} alt="cover" className="cover" />
          }
          <div className="update_cover_wrapper">
            <div className="open_cover_update" onClick={()=>setShowCoverMenu(!showCoverMenu)}>
              <i className="camera_filled_icon"></i>
              Add Cover Photo
            </div>
            {
              showCoverMenu && <div className="open_cover_menu">
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
        </div>
        </div>
    );
};

export default Cover;