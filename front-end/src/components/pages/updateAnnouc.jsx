import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const UpdateAnnounce = (props) => {

  const [newTitle, setNewTitle] = useState(props.oneAnnouc.title);
  const [newDescription, setNewDescription] = useState(props.oneAnnouc.description);
  const [newCategory, setNewCategory] = useState(props.oneAnnouc.category);
  const [newLocation, setNewLocation] = useState(props.oneAnnouc.location);
  const [newPrice, setNewPrice] = useState(props.oneAnnouc.price);
  const [newPhoneNumber, setNewPhoneNumber] = useState(props.oneAnnouc.phone);
  

  const Annoucement = {
    title: newTitle,
    description: newDescription,
    category: newCategory,
    location: newLocation,
    price: newPrice,
    imageUrl: props.oneAnnouc.imageUrl,
    phone: newPhoneNumber,
    users_id: props.userId
  }

  const updateTheAnnounce = () => {
    axios.put(`http://localhost:3000/api/announce/${props.oneAnnouc.id}`, Annoucement)
      .then((res) => {
        console.log("updated successfully");
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="container p-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Update your Announce</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title:</label>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700">Description:</label>
            <textarea
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">Category:</label>
            <select
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
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
              value={newLocation}
              onChange={(e) => setNewLocation(e.target.value)}
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
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your price"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="image" className="block text-gray-700">Image:</label>
            <input
              type="file"
              onChange={(e) => setNewImage(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Phone Number" className="block text-gray-700">Phone Number:</label>
            <input
              type="text"
              value={newPhoneNumber}
              onChange={(e) => setNewPhoneNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-xl bg-gray-100"
              placeholder="Enter your Phone Number"
            />
          </div>
          <NavLink to="/my-announcement">
            <span onClick={() => {updateTheAnnounce(); }} type="submit" className="flex items-center justify-center cursor-pointer w-full bg-[#ff385c] text-white p-2 rounded hover:bg-[#fe4869]">
              Update
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UpdateAnnounce;