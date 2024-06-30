import React from 'react';

const RealEstate = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="text-center bg-[#ff385c] text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Real Estate</h1>
        <p className="text-xl">Explore real estate properties available for sale or rent.</p>
      </header>
      <div className="p-8 mt-6 bg-white rounded-xl shadow-lg">
        <p className="text-lg mb-6">Find your ideal property from our real estate listings.</p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
            <img src="https://cdn.realtor.ca/listing/TS638548399174800000/reb82/highres/4/c8473134_1.jpg" alt="Real Estate Property" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Property Type</h3>
            <p className="text-lg mb-2">Description of the property.</p>
            <button className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]">View Details</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
            <img src="https://cdn.realtor.ca/listing/TS638548399174800000/reb82/highres/4/c8473134_1.jpg" alt="Real Estate Property" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Property Type</h3>
            <p className="text-lg mb-2">Description of the property.</p>
            <button className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]">View Details</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
            <img src="https://cdn.realtor.ca/listing/TS638548399174800000/reb82/highres/4/c8473134_1.jpg" alt="Real Estate Property" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Property Type</h3>
            <p className="text-lg mb-2">Description of the property.</p>
            <button className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]">View Details</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
            <img src="https://cdn.realtor.ca/listing/TS638548399174800000/reb82/highres/4/c8473134_1.jpg" alt="Real Estate Property" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Property Type</h3>
            <p className="text-lg mb-2">Description of the property.</p>
            <button className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;


