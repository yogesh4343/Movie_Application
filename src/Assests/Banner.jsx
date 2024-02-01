
import React from 'react'
import Buttons from "./Buttons"
// import imageIcon from "../Images/lapt.jpeg"
import { NavLink } from 'react-router-dom'
import TypeWriter from './TypeWriter'

const Banner = () => {

  

  return (
    <div >
      <div className="container flex justify-between  m-12">
        <div className="left w-full flex text-center justify-center flex-col p-8 lg:w-[50%] lg:text-left">
          <div className="welcomeHeading flex flex-row m-auto lg:m-0">
            <div className="welcome text-5xl font-bold text-black flex flex-col xl:flex-row xl:text-5xl  "> <span className="pr-3">Welcome To</span>  <span className="span text-purple-700 dark:text-purple-600"> Movie's App</span></div>
          </div>

          <div className="lang justify-center  text-2xl font-bold text-gray-800  flex  gap-2 lg:justify-start mt-3 md:text-3xl ">
            Watch
            <span className="text-purple-700 dark:text-purple-600 ">  <TypeWriter /></span>
          </div>

          <div className="para text-sm  text-gray-800 md:text-xl  my-7 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est distinctio rem quidem quae voluptas cumque repudiandae nobis veniam, hic atque ipsum, ipsam minima accusamus reprehenderit, deleniti ut voluptatem earum magnam molestiae et laudantium quod ipsa! Sint id possimus illum labore.
          </div>

          <NavLink to="/movies" >   <Buttons className="bts" btn="Free Movies" clr="black" /> </NavLink>
        
        </div>

        <div className="right w-[45%] hidden bg-cover lg:flex">
          <img className="" src="https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=800" alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Banner
