import React, { useState } from "react";
import ProfileImg from '../../image/profile.png';
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import DeletePopUp from "../PopUps/deletePopUp";

const UserAnnouncementDetail = (props) => {
  const [clickedDel,setClickedDel]=useState(false)
  
  const handleUpdate = () => {
    // here is the logic of updating the announce
  };

 

  return (
    <>
    {!clickedDel && <div className="p-4 flex gap-10 ml-10">

      <div className="images flex items-start justify-start max-w-96 h-96  rounded-xl">
        <img src={props.oneAnnouc.imageUrl} alt="" className="" />
      </div>
      <div className="annouc-details mt-6 bg-slate-100 rounded-xl p-4">
        <div className="user-profile flex items-center gap-2 mb-4">
          <img src={ProfileImg} alt="" className="h-20" />
          <div className="userinfo">
            <h5 className="user-name font-medium">{props.user}</h5>
            <p className="user-location text-sm">{props.oneAnnouc.location}</p>
          </div>
          <h5 className="ml-6 text-sm">📞 Phone: {props.oneAnnouc.phone}</h5>
        </div>
        <div className="annoucdetais">
          <h5 className="annouc-title font-bold text-lg ml-4 mt-6">{props.oneAnnouc.title}</h5>
          <h5 className="price font-bold ml-4 mt-4">{props.oneAnnouc.price}</h5>
          <div className="user-loc-cat ml-4 mt-4">
            <h6 className="text-sm">◈ {props.oneAnnouc.category}</h6>
            <h6 className="text-sm">📌 {props.oneAnnouc.location}</h6>
          </div>
          <div className="description">
            <h5 className="font-medium ml-4 mt-4">Description:</h5>
            <p className="ml-4 mt-2">{props.oneAnnouc.description}</p>
          </div>
          <div className="flex gap-4 ml-4 mt-4">
            <NavLink to='/update-announce'>
            <button
              className="bg-[#ff385c] text-white p-3 rounded-md hover:bg-[#fe4869]"
              onClick={handleUpdate}
            >
              Update
            </button>
            </NavLink>
        
            <button
              className="bg-[#ff385c] text-white p-3 rounded-md hover:bg-[#fe4869]"
              onClick={()=>setClickedDel(!clickedDel)}
            >
              Delete
            </button>
            
          </div>
        </div>
      </div>
    </div>}
    {clickedDel&& <div className="p-4 flex gap-10 ml-10">
<DeletePopUp handleDelete={props.handleDelete}/>
<div className="images flex items-start justify-start max-w-96 h-96  rounded-xl">
  <img src={props.oneAnnouc.imageUrl} alt="" className="" />
</div>
<div className="annouc-details mt-6 bg-slate-100 rounded-xl p-4">
  <div className="user-profile flex items-center gap-2 mb-4">
    <img src={ProfileImg} alt="" className="h-20" />
    <div className="userinfo">
      <h5 className="user-name font-medium">{props.user}</h5>
      <p className="user-location text-sm">{props.oneAnnouc.location}</p>
    </div>
    <h5 className="ml-6 text-sm">📞 Phone: {props.oneAnnouc.phone}</h5>
  </div>
  <div className="annoucdetais">
    <h5 className="annouc-title font-bold text-lg ml-4 mt-6">{props.oneAnnouc.title}</h5>
    <h5 className="price font-bold ml-4 mt-4">{props.oneAnnouc.price}</h5>
    <div className="user-loc-cat ml-4 mt-4">
      <h6 className="text-sm">◈ {props.oneAnnouc.category}</h6>
      <h6 className="text-sm">📌 {props.oneAnnouc.location}</h6>
    </div>
    <div className="description">
      <h5 className="font-medium ml-4 mt-4">Description:</h5>
      <p className="ml-4 mt-2">{props.oneAnnouc.description}</p>
    </div>
    <div className="flex gap-4 ml-4 mt-4">
      <button
        className="bg-[#ff385c] text-white p-3 rounded-md hover:bg-[#fe4869]"
        onClick={handleUpdate}
      >
        Update
      </button>
  
      <button
        className="bg-[#ff385c] text-white p-3 rounded-md hover:bg-[#fe4869]"
        onClick={()=>setClickedDel(!clickedDel)}
      >
        Delete
      </button>
      
    </div>
  </div>
</div>
</div>}
    </>
  );
};

export default UserAnnouncementDetail;
