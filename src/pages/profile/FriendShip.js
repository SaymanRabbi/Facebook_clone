import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AddFriend, CancenRequest } from '../../func/user';
import useClickoutside from '../../Helpers/useClickoutside';

const FriendShip = ({friendshipp,profileId}) => {
  console.log(friendshipp);
  const [friendship,setFriendship] = useState(friendshipp);
  console.log(friendship);
  useEffect(()=>{
setFriendship(friendshipp)
  },[friendshipp])
    const [friendsMenu, setFriendsMenu] = useState(false);
    const [respondMenu, setRespondMenu] = useState(false);
    const menu = useRef(null);
    const menu1 = useRef(null);
    useClickoutside(menu, () => setFriendsMenu(false));
    useClickoutside(menu1, () => setRespondMenu(false));
    const {user} = useSelector((state)=>({...state}));
    const addFriend =async () => {
      setFriendship({...friendship,requestsent:true,following:true});
      await AddFriend(profileId,user?.token)
    }
    const CancenRequestFunc =async () => {
      setFriendship({...friendship,requestsent:false,following:false});
    await CancenRequest(profileId,user?.token)
    }
    return (
        <div className="friendship">
        {friendship?.friends ? (
          <div className="friends_menu_wrap">
            <button className="gray_btn" onClick={() => setFriendsMenu(true)}>
              <img src="../../../icons/friends.png" alt="" />
              <span>Friends</span>
            </button>
            {friendsMenu && (
              <div className="open_cover_menu" ref={menu}>
                <div className="open_cover_menu_item hover1">
                  <img src="../../../icons/favoritesOutline.png" alt="" />
                  Favorites
                </div>
                <div className="open_cover_menu_item hover1">
                  <img src="../../../icons/editFriends.png" alt="" />
                  Edit Friend list
                </div>
                {friendship?.following ? (
                  <div className="open_cover_menu_item hover1">
                    <img src="../../../icons/unfollowOutlined.png" alt="" />
                    Unfollow
                  </div>
                ) : (
                  <div className="open_cover_menu_item hover1">
                    <img src="../../../icons/unfollowOutlined.png" alt="" />
                    Follow
                  </div>
                )}
                <div className="open_cover_menu_item hover1">
                  <i className="unfriend_outlined_icon"></i>
                  Unfriend
                </div>
              </div>
            )}
          </div>
        ) : (
          !friendship?.requestsent &&
          !friendship?.requestRecived && (
            <button className="blue_btn" onClick={()=>addFriend()}>
              <img src="../../../icons/addFriend.png" alt="" className="invert" />
              <span>Add Friend</span>
            </button>
          )
        )}
        {friendship?.requestsent ? (
          <button className="blue_btn" onClick={()=>CancenRequestFunc()}>
            <img
              src="../../../icons/cancelRequest.png"
              className="invert"
              alt=""
            />
            <span>Cancel Request</span>
          </button>
        ) : (
          friendship?.requestRecived && (
            <div className="friends_menu_wrap">
              <button className="gray_btn" onClick={() => setRespondMenu(true)}>
                <img src="../../../icons/friends.png" alt="" />
                <span>Respond</span>
              </button>
              {respondMenu && (
                <div className="open_cover_menu" ref={menu1}>
                  <div className="open_cover_menu_item hover1">Confirm</div>
                  <div className="open_cover_menu_item hover1">Delete</div>
                </div>
              )}
            </div>
          )
        )}
        {friendship?.following ? (
          <button className="gray_btn">
            <img src="../../../icons/follow.png" alt="" />
            <span>following</span>
          </button>
        ) : (
          <button className="blue_btn">
            <img src="../../../icons/follow.png" className="invert" alt="" />
            <span>Follow</span>
          </button>
        )}
        <button className={friendship?.friends ? "blue_btn" : "gray_btn"}>
          <img
            src="../../../icons/message.png"
            className={friendship?.friends && "invert"}
            alt=""
          />
          <span>Message</span>
        </button>
      </div>
    );
};

export default FriendShip;