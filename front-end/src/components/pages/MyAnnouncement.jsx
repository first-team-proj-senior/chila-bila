import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const MyAnnouncement = (props) => {
  

  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="text-center bg-[#ff385c] text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">My Announcements</h1>
      </header>
      <div className="p-8 mt-6 bg-white rounded-xl shadow-lg">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {props.userAnnoucement.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200"
            >
              <img src={announcement.imageUrl} alt="Announcement" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold mb-2">{announcement.title}</h3>
              <p className="text-lg mb-2">{announcement.description}</p>
              <NavLink to='/user-announcement-detail'>
              <button
                className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]"
                onClick={()=>props.oneAnnouc(announcement)}
              > 
                View Details
              </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAnnouncement;
