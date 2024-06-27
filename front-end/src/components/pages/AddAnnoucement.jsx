
import React, { useState } from 'react';
import PopUp from '../PopUps/SignUpPop.jsx'
const AddAnnouncement = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(''); 
  const [error, setError] = useState('');
  const [allowed, setAllowed] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !category || !price) { 
      setError('Please fill in all fields');
      return;
    }
    setError('');
  };

  return (
  
    <div className="flex justify-center items-center bg-gray-100 p-6" >
    {!allowed && <PopUp allowed={setAllowed}/> }  
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 ">
        <div className="container p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Announcement</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
            >
              <option value="">Select category</option>
              <option value="real-estate">Real Estate</option>
              <option value="cars">Cars</option>
              <option value="electronics">Electronics</option>
              <option value="hobbies">Hobbies</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your price"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-700">Image:</label>
            <input
              type="file"
              onChange={""}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
            />
          </div>
          <button type="submit" className="w-full bg-[#ff385c] text-white p-2 rounded hover:bg-[#fe4869]">
            Submit
          </button>

        </form>
      </div>
        </div>
        
    </div>
  );
};


export default AddAnnouncement;

