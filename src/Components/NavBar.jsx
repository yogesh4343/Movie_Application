import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { sortProductReducer } from '../Store/Slice/CoursesSlice';


const NavBar = () => {
  // const dispatch = useDispatch();
  // const [input , setInput] = useState("");

  // const handleChange = (v)=> {
  //   setInput(v);
  //     dispatch(sortProductReducer(v))
  // }


  return (


    <div className="shadow-custom">
    <div className="container pt-5 pb-2 px-4 m-auto flex justify-between cursor-pointer  font-[font-Coolvetica] sm:text-xl  ">

      {/* left nav */}
      <div className="left font-[font-Coolvetica] text-purple-700 font-bold">
        Movie's App➦
      </div>

      {/* right nav */}
      <div className="right flex  flex-row gap-3 list-none sm:gap-5 ">
        <NavLink to="/" className="hover:text-purple-600 hover:font-bold"> Home  </NavLink>
        <NavLink to="/movies"  className="hover:text-purple-600 hover:font-bold ">  Movies </NavLink>
        <NavLink to="/cart"  className="hover:text-purple-600 text-2xl hover:font-bold">  🛒 </NavLink>
      </div>
    </div>
<hr />


    {/* // bottom  */}

    <div className="bottom  px-6 py-2  container   m-auto flex justify-between cursor-pointer  font-[font-Coolvetica] sm:text-xl ">
    <div className="left text-blue-800">
    <NavLink to="/" > 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>
   </NavLink>
    </div>

    {/* <form>
      <input type="text" placeholder="search" value={input} onChange={(e)=> handleChange(e.target.value)}/>
    </form> */}
</div>
</div>
  )
}

export default NavBar
