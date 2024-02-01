import React from 'react'

const Buttons = ({btn}) => {
  
  return (
    <div>
      <button type="button" className="text-white text-xl p-12 bg-black  focus:ring-3 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 me-2 mb-2   focus:outline-none"> {btn} </button>
    </div>
  )
}

export default Buttons
