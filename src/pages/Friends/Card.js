import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { acceptFriendRequest, CancenRequest, deleteRequest } from '../../func/user';
const Card = ({ userr, type,getdata }) => {
  const {user} = useSelector((state)=>({...state}))
  const cancelReq = async(id) => {
const res = await CancenRequest(id, user.token)
if(res==="ok"){
  getdata()
}
  }
  const confirmreq = async(id) => {
  const res =  await acceptFriendRequest(id, user.token)
   if(res==="ok"){
    getdata()
   }
  }
  const Deletereq = async(id) => {
  const res =  await deleteRequest(id, user.token)
   if(res==="ok"){
    getdata()
   }
  }
    return (
        <div className="req_card">
      <Link to={`/profile/${userr.username}`}>
        <img src={userr.picture} alt="" />
      </Link>
      <div className="req_name">
        {userr.first_name} {userr.last_name}
      </div>
      {type === "sent" ? (
        <button className="blue_btn" onClick={()=>cancelReq(userr._id)}>Cancel Request</button>
      ) : type === "request" ? (
        <>
          <button className="blue_btn" onClick={()=>confirmreq(userr._id)}>Confirm</button>
          <button className="gray_btn" onClick={()=>Deletereq(userr._id)}>Delete</button>
        </>
      ) : (
        ""
      )}
    </div>
    );
};

export default Card;