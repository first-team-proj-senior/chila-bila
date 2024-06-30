import React from 'react';

const Electronics = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="text-center bg-[#ff385c] text-white p-8 rounded-xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Electronics</h1>
        <p className="text-xl">Discover the latest electronics and gadgets available.</p>
      </header>
      <div className="p-8 mt-6 bg-white rounded-xl shadow-lg">
        <p className="text-lg mb-6">Explore a wide range of electronics and gadgets.</p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
            <img src="https://benmusic.ma/bundles/ST/backoffice/images/uploads_produits_thumbs/2c9cf55b3366f8a3085434a79f22f9ec_thumb.png" alt="Electronic Item" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Electronic Item</h3>
            <p className="text-lg mb-2">Description of the electronic item.</p>
            <button className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]">View Details</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
            <img src="https://benmusic.ma/bundles/ST/backoffice/images/uploads_produits_thumbs/2c9cf55b3366f8a3085434a79f22f9ec_thumb.png" alt="Electronic Item" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Electronic Item</h3>
            <p className="text-lg mb-2">Description of the electronic item.</p>
            <button className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]">View Details</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
            <img src="https://benmusic.ma/bundles/ST/backoffice/images/uploads_produits_thumbs/2c9cf55b3366f8a3085434a79f22f9ec_thumb.png" alt="Electronic Item" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Electronic Item</h3>
            <p className="text-lg mb-2">Description of the electronic item.</p>
            <button className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]">View Details</button>
          </div>
          <div className="bg-gray-100 p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
            <img src="https://benmusic.ma/bundles/ST/backoffice/images/uploads_produits_thumbs/2c9cf55b3366f8a3085434a79f22f9ec_thumb.png" alt="Electronic Item" className="w-full h-48 object-cover rounded-md mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Electronic Item</h3>
            <p className="text-lg mb-2">Description of the electronic item.</p>
            <button className="bg-[#ff385c] text-white p-2 rounded-md hover:bg-[#fe4869]">View Details</button>
          </div>
          
    
        </div>
      </div>
    </div>
  );
};

export default Electronics;
