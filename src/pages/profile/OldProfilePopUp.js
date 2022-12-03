import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import useClickoutside from '../../Helpers/useClickoutside';

const OldProfilePopUp = ({photos,setCover,setOldPic}) => {
    const { user } = useSelector((state) => ({ ...state }));
  const Ref = useRef(null);
  useClickoutside(Ref, () => setOldPic(false));
  return (
    <div className="blur">
      <div className="postBox selectCoverBox" ref={Ref}>
        <div className="box_header">
          <div
            className="small_circle"
            onClick={() => {
              setOldPic(false);
            }}
          >
            <i className="exit_icon"></i>
          </div>
          <span>Select photo</span>
        </div>
        <div className="selectCoverBox_links">
          <div className="selectCoverBox_link">Recent Photos</div>
          <div className="selectCoverBox_link">Photo Albums</div>
        </div>
        <div className="old_pictures_wrap scrollbar">
          <div className="old_pictures">
            {photos &&
              photos
                .filter(
                  (img) => img.folder === `${user.username}/cover_pictures`
                )
                .map((photo) => (
                  <img
                    src={photo.secure_url}
                    key={photo.public_id}
                    alt=""
                    onClick={() => {
                      setCover(photo.secure_url);
                      setOldPic(false);
                    }}
                  />
                ))}
          </div>
          <div className="old_pictures">
            {photos &&
              photos
                .filter((img) => img.folder !== `${user.username}/post_images`)
                .map((photo) => (
                  <img
                    src={photo.secure_url}
                    key={photo.public_id}
                    alt=""
                    onClick={() => {
                      setCover(photo.secure_url);
                      setOldPic(false);
                    }}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OldProfilePopUp;