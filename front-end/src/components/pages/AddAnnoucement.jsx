import React, { useState } from 'react'
import PopUpSignUp from '../PopUps/SignUpPop.jsx'

const AddAnnoucement = () => {
  const [Allowed,setAllowed]=useState(false)
  return (
    <div className=''>
      {!Allowed && <PopUpSignUp className='popup' allowed={setAllowed}/> }
      <div className="hel">
        <h1 className="text-3xl font-bold">Add Announcement</h1>
      </div>
      <div className="add-container">
        <form className="add-form">
          <label className="add-label">Title:</label>
          <input type="text" className="add-input" />
          <label className="add-label">Description:</label>
          <textarea className="add-input" rows="4" cols="50"></textarea>
          <label className="add-label">Date:</label>
          <input type="date" className="add-input" />
        </form>
      </div>
    </div>
  )
}

export default AddAnnoucement