
import React from "react";
import Home from '../../image/home.jpg'
import ProfileImg from '../../image/profile.png'
const DetailAnnoucement = () => {
  return (
    <div className="p-4 flex gap-10 ml-10">
      <div className="images flex items-start justify-start max-w-96 h-96 overflow-hidden rounded-xl">
     <img src={Home} alt="" className=""  />
      </div>
      <div className="annouc-details mt-6 bg-slate-100 rounded-xl">
        <div className="user-profile flex items-center gap-2 ">
           <img src={ProfileImg} alt="" className="h-20" />
           <div className="userinfo">
           <h5 className="user-name font-medium">John Doe</h5>
           <p className="user-location text-sm">New York</p>
           </div>
           <h5 className="ml-6 text-sm"> 📞 Phone : 123456789</h5>
        </div>
        <div className="annoucdetais">
          <h5 className="annouc-title font-bold text-lg ml-4 mt-6">Annoucement Title</h5>
          <h5 className="price font-bold ml-4 mt-4 ">150.000 TND</h5>
          <div className="user-loc-cat ml-4 mt-4">
          <h6 className="text-sm">◈ Category</h6>
          <h6 className="text-sm">📌Location</h6>
          </div>
          <div className="description">
            <h5 className="font-medium ml-4 mt-4">Description :</h5>
            <p className="ml-4 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam inventore rerum earum, nemo a hic provident dicta facilis officia repellendus at enim eligendi perspiciatis iste, commodi incidunt quaerat quo!</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailAnnoucement;

