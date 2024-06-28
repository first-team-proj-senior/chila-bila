

import React from "react";

const DetailAnnoucement = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 bg-white shadow-lg rounded-lg max-w-md">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHs16ee2A966p-QCzhb_Nk4BzkBm5qTm1r6SvaImj5-4osoLl2gpZCzFtIhR-SjddETA&usqp=CAU"
          alt="no image"
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <h1 className="text-xl font-bold text-[rgb(255,56,92)] mt-4">Title</h1>
        <div className="mt-4">
        <p className="text-lg font-semibold text-[rgb(255,56,92)]">Description:</p>
          <h4 className="text-lg font-semibold text-[rgb(255,56,92)]">Price:</h4>
          <h4 className="text-lg font-semibold text-[rgb(255,56,92)]">Category:</h4>
          <h4 className="text-lg font-semibold text-[rgb(255,56,92)]">Location:</h4>
        </div>
      </div>
    </div>
  );
};

export default DetailAnnoucement;

