import React from 'react'
import Alert from '../../image/alert.png'
import { NavLink } from 'react-router-dom';


const DeletePopUp = (props) => {
    
  return (
    <div id="myModal" class="fixed inset-0  items-center justify-center bg-black bg-opacity-50 ">
    <div class=" alertPop bg-white rounded-lg shadow-lg w-80 p-6 relative flex flex-col items-center">
        <img src ={Alert} className='w-14 m-2'></img>
      <h2 class="text-xl font-semibold mb-4">Delete Annoucement !</h2>
      <div class="flex justify-end">
        <NavLink to='/user-announcement-detail'>
        <button id="closeModalBtn2" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">
          Cancel
        </button>
        </NavLink>
        <NavLink to='/my-announcement'>

        <button onClick={()=>{props.handleDelete()}} class="px-4 py-2 bg-[#ff055d] text-white rounded-md">
          Confirm
        </button>
        </NavLink>
      </div>
    </div>
  </div>
  )
}

export default DeletePopUp