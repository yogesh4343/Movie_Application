import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import Footer from '../Pages/Footer'
import { cartReducer, singleMovieReducer } from '../Store/Slice/CoursesSlice'
import Buttons from './Buttons'

const Form = () => {

    const params = useParams();
    const param = params.id


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch( singleMovieReducer(param) )
      },[dispatch])

    const {singleMovieDetail  } = useSelector((state) => state.Movies) 
    // console.log(singleMovieDetail);
      const {score , show} = {...singleMovieDetail[0]}
      const {id , name , genres, image , language  , rating , summary ,   schedule} = {...show}
    // console.log("score", score , "show" , show);
    // console.log(schedule , schedule)

    const {average} = {...rating}


    const BookTicketFunc = (param)=>{
        console.log("BookTicketFunc");
        let price = 1000;
        dispatch( cartReducer(param , price) );
    }


  return (
    <>
    <NavBar />
    <div className="flex justify-center items-center bg-[#1f2937]">


<section class="relative flex flex-wrap lg:h-screen lg:items-center lg:w-[65%]     ">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg ">
      <h1 class="text-2xl  text-white font-bold sm:text-3xl">Get started today!</h1>

      <p class="mt-4 text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>

      <div className="cont m-5 text-white   ">
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Name : </span>      <span className="text-gray-300"> {name}</span></div>
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Rating : </span>        <span className="text-gray-300"> {average} </span></div>
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Language : </span>        <span className="text-gray-300" > {language}</span></div>
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Summary : </span>        <span className="text-gray-300"> {summary}</span></div>
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Genres : </span>        <span className="text-gray-300"> {genres + " ,"}</span></div>

      </div>
    </div>
      <div className="btn flex justify-center">   <NavLink to="/cart" > <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 p-12 hover:bg-blue-600" onClick={()=>BookTicketFunc(param)}>Check out</button>   </NavLink> </div>


  </div>

  <div class="relative  w-full lg:w-1/2 flex justify-center">
    <img className='h-[36rem]'
      alt="Welcome"
      src="https://static.tvmaze.com/uploads/images/original_untouched/494/1235114.jpg"
    />
  </div>

 
</section>


    </div>
{/* <Footer /> */}
    <Footer />
    </>

  )
}

export default Form
