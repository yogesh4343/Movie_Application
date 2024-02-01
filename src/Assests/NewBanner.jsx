import React from 'react'
import { NavLink } from 'react-router-dom'
import Buttons from './Buttons'
import TypeWriter from './TypeWriter'

const NewBanner = () => {
  return (
    <div>
      <div className="  flex justify-center gap-12 flex-col w-screen   h-screen bg-[url('https://www.justwatch.com/appassets/img/home/global-home-bg-comp.png')] mb-14 ">
        <div className="main    ">
        <div className="   flex flex-col h-full justify-center ">
                <div className="heading flex text-4xl lg:text-[60px] font-bold   text-white justify-center items-center  text-center align-middle "> Your streaming guide for  </div>
                
                <div className=' mt-5 flex text-4xl lg:text-[60px] font-bold  justify-center items-center  text-center align-middle  text-purple-900 dark:text-purple-600 '>  <TypeWriter />   </div>
                </div>
        </div>

        <div className="para  text-gray-300 text-[20px]  flex justify-center items-center text-center">
        Find where to stream new, popular & upcoming entertainment with JustWatch.
        </div>


                        <div className="flex justify-center">

        <NavLink to="/movies" >   <Buttons className="bts" btn="Free Movies" clr="black" /> </NavLink>
                        </div>
      
      </div>
    </div>
  )
}

export default NewBanner