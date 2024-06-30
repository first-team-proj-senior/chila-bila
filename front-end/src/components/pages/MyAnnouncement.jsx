import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyAnnouncement = () => {
  const navigate = useNavigate();
  const announcements = [
    {
      id: 1,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2024/oem/2024_ford_f-150_crew-cab-pickup_lariat_fq_oem_1_1600.jpg',
      title: 'Car Model',
      description: "The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort, and capability. Add to that a huge range of configurations and options, and you've got a highly appealing light-duty pickup.",
    },
    {
      id: 2,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2024/oem/2024_ford_f-150_crew-cab-pickup_platinum_fq_oem_2_815x543.jpg',
      title: 'Car Model',
      description: "The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort, and capability. Add to that a huge range of configurations and options, and you've got a highly appealing light-duty pickup.",
    },
    {
      id: 3,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2024/oem/2024_ford_f-150_crew-cab-pickup_tremor_fq_oem_1_815x543.jpg',
      title: 'Car Model',
      description: "The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort, and capability. Add to that a huge range of configurations and options, and you've got a highly appealing light-duty pickup.",
    },
    {
      id: 4,
      image: 'https://media.ed.edmunds-media.com/ford/f-150/2024/oem/2024_ford_f-150_crew-cab-pickup_raptor_fq_oem_1_815x543.jpg',
      title: 'Car Model',
      description: "The Ford F-150 offers the best attributes of a modern pickup: power, efficiency, comfort, and capability. Add to that a huge range of configurations and options, and you've got a highly appealing light-duty pickup.",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="text-center bg-[#ff385c] text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">My Announcements</h1>
      </header>
      <div className="p-8 mt-6 bg-white rounded-xl shadow-lg">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200"
            >
              <img src={announcement.image} alt="Announcement" className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-bold mb-2">{announcement.title}</h3>
              <p className="text-lg mb-2">{announcement.description}</p>
              <button
                className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]"
                onClick={() => navigate('/user-announcement-detail', { state: { announcementId: announcement.id } })}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAnnouncement;
