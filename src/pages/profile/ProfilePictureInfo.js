import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProfilePicture from '../../components/ProfilePicture/ProfilePicture';
import FriendShip from './FriendShip';

const ProfilePictureInfo = ({profile,visitor,photos,otherName}) => {
  const [show,setShow] = useState(false);
  const pref = useRef(null);
    return (
        <div className="profile_img_wrap">
          {
            show&& <ProfilePicture setShow={setShow} pref={pref} photos={photos}/>
          }
      <div className="profile_w_left">
        <div className="profile_w_img">
          <div
            className="profile_w_bg"
            ref={pref}
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${profile?.picture})`,
            }}
          ></div>
          {
            !visitor && <div className="profile_circle hover1">
            <i className="camera_filled_icon" onClick={()=>setShow(true)}></i>
          </div>
          }
        </div>
        <div className="profile_w_col">
          <div className="profile_name">
            {profile?.first_name} {profile?.last_name}
            <div className="othername">{otherName && `(${otherName})`}</div>
          </div>
          <div className="profile_friend_count">
          {profile?.friends && (
        <div className="profile_card_count">
          {profile?.friends.length === 0
            ? ""
            : profile?.friends.length === 1
            ? "1 Friend"
            : `${profile?.friends.length} Friends`}
        </div>
      )}
          </div>
          <div className="profile_friend_imgs">
          {
              profile?.friends && profile?.friends.slice(0,6).map((friend,i)=>(<Link key={i} to={`/profile/${friend.username}`}>
              <img src={friend.picture}  style={{transform:`translateX(${-i*7}px)`,zIndex:`${i}`}}/>
              </Link>))
          }
          </div>
        </div>
      </div>
      {
        visitor ?<FriendShip friendshipp={profile?.friendShip} profileId={profile._id}/>:<div className="profile_w_right">
        <div className="blue_btn">
          <img src="../../../icons/plus.png" alt="" className="invert" />
          <span>Add to story</span>
        </div>
        <div className="gray_btn">
          <i className="edit_icon"></i>
          <span>Edit profile</span>
        </div>
      </div>
      }
    </div>
    );
};

export default ProfilePictureInfo;