import React from 'react'
import CommentCard from '../Assests/CommentCard'
import Heading from '../Assests/Heading'

const UserThaughts = () => {
  return (
    <div>
      <div className="main ">
      <Heading heading="User Thaughts"  className="mb-5" /> 


      <div className="comments flex flex-wrap justify-center items-center gap-5 my-7">
        <CommentCard />
        <CommentCard />
      </div>
      </div>
    </div>
  )
}

export default UserThaughts
