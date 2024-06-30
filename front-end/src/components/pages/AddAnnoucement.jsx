
import React, { useState } from 'react';
import PopUp from '../PopUps/SignUpPop.jsx'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const AddAnnouncement = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [location,setLocation]=useState("")
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(''); 
  const [error, setError] = useState('');
  const [allowed, setAllowed] = useState(false);
  const [phoneNumber,setPhoneNumber]=useState("")
  const [imageUrl,setImageUrl]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !category || !price) { 
      setError('Please fill in all fields');
      return;
    }
    setError('');
  };
   
  const uploadImage = async () => {
    const form = new FormData();
    form.append('file', image);
    form.append('upload_preset', 'chila-bila');

    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dh3m2vb3x/upload', form);
      setImageUrl(res.data.url);
      return res.data.url; // Return the URL for further chaining
    } catch (err) {
      console.log(err);
      return null; // Return null if there was an error
    }
  };
 
 
  const addAnn = async () => {
    const url = await uploadImage(); // Wait for the image to be uploaded and get the URL
    console.log(url);
    if (url) {
      const announcement = {
        title: title,
        description: description,
        category: category,
        location: location,
        price: price,
        imageUrl: url, // Use the returned URL
        phone: phoneNumber,
        users_id: props.userId,
      };

      axios.post('http://localhost:3000/api/announce', announcement)
        .then((res) => console.log('added successfully'))
        .catch((err) => console.log(err));
    }
  };
  return (
  
    <div className="flex justify-center items-center bg-gray-100 p-6" >
    {allowed && <PopUp allowed={setAllowed}/> }  
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
            <label htmlFor="location" className="block text-gray-700">Location:</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full  p-2 border border-gray-300 rounded-xl bg-gray-100"
            >
              <option value="">Select Location</option>
              <option value="Tunis">Tunis</option>
              <option value="Sfax">Sfax</option>
              <option value="Sousse">Sousse</option>
              <option value="Kairouane">kairouane</option>
              <option value="Gabes">Gabes</option>
              <option value="Bizert">Bizert</option>
              <option value="Ariana">Ariana</option>
              <option value="Beja">Beja</option>
              <option value="Monastir">Monastir</option>
              <option value="Tataouine">Tataouine</option>
              <option value="Hammamet">Hammamet</option>
              <option value="Elkef">ElKef</option>
              <option value="Ben Arous">Ben Arous</option>
              <option value="Kasserine">Kasserine</option>
              <option value="Gafsa">Gafsa</option>
              <option value="Mahdia">Mahdia</option>
              <option value="Mannouba">Mannouba</option>
              <option value="Mednine">Mednine</option>
              <option value="Nabel">Nabel</option>
              <option value="Selyena">Selyena</option>
              <option value="Tozer">Tozer</option>
              <option value="Zaghouane">Zaghouan</option>
              <option value="Sidi Bouzid">Sidi Bouzid</option>
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

              onChange={(e)=>setImage(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Phone Number" className="block text-gray-700">Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your Phone Number"
            />
          </div>
          <NavLink to="/" >
          <span onClick={()=>{
          setTimeout(()=>{
            addAnn() 
          },3500)
          }} type="submit" className="flex items-center justify-center cursor-pointer w-full bg-[#ff385c] text-white p-2 rounded hover:bg-[#fe4869]">
            Submit
          </span>
          </NavLink>
        </form>
      </div>
        </div>
        
    </div>
  );
};


export default AddAnnouncement;

