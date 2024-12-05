
import React from "react";
import Home from '../../image/home.jpg'
import ProfileImg from '../../image/profile.png'
const DetailAnnoucement = (props) => {
  return (
    <div className="p-4 flex gap-10 ml-10">
      <div className="images flex items-start justify-start max-w-96 h-96 overflow-hidden rounded-xl">
     <img src={props.annoucementDetail.imageUrl} alt="" className=""  />
      </div>
      <div className="annouc-details mt-6 bg-slate-100 rounded-xl w-96">
        <div className="user-profile flex items-center gap-2 ">
           <img src={ProfileImg} alt="" className="h-20" />
           <div className="userinfo">
           <h5 className="user-name font-medium">{props.user}</h5>
           <p className="user-location text-sm">{props.annoucementDetail.location}</p>
           </div>
           <h5 className="ml-6 text-sm"> 📞 Phone : {props.annoucementDetail.phone}</h5>
        </div>
        <div className="annoucdetais">
          <h5 className="annouc-title font-bold text-lg ml-4 mt-6">{props.annoucementDetail.title}</h5>
          <h5 className="price font-bold ml-4 mt-4 ">{props.annoucementDetail.price} TND</h5>
          <div className="user-loc-cat ml-4 mt-4">
          <h6 className="text-sm">◈ {props.annoucementDetail.category}</h6>
          <h6 className="text-sm">📌{props.annoucementDetail.location}</h6>
          </div>
          <div className="description">
            <h5 className="font-medium ml-4 mt-4">Description :</h5>
            <p className="ml-4 mt-2">{props.annoucementDetail.description}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailAnnoucement;

