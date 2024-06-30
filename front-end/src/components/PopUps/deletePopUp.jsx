import React from 'react'

const DeletePopUp = () => {
  return (
    <div id="myModal" class="fixed inset-0  items-center justify-center bg-black bg-opacity-50 ">
    <div class="bg-white rounded-lg shadow-lg w-80 p-6 relative">
      <h2 class="text-xl font-semibold mb-4">Popup Title</h2>
      <p class="text-gray-600 mb-4">This is the content of the popup. You can add any information here.</p>
      <div class="flex justify-end">
        <button id="closeModalBtn2" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-md mr-2">
          Cancel
        </button>
        <button class="px-4 py-2 bg-blue-500 text-white rounded-md">
          Confirm
        </button>
      </div>
    </div>
  </div>
  )
}

export default DeletePopUp