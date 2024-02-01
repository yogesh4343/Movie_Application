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
    console.log(singleMovieDetail);
      const {score , show} = {...singleMovieDetail[0]}
      const {id , name , genres, image , language  , rating , summary ,   schedule} = {...show}
    // console.log("score", score , "show" , show);
    // console.log(schedule , schedule)

    const {average} = {...rating}


    // const [movieName , setMoviename] = useState(name);
  // const [newLanguage , setNewLanguage] = useState(language);
  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  // const [newSummary , setNewSummary] = useState(summary);
  const [phone , setPhone] = useState("");
  // const [newGenres , setNewGenres] = useState(genres);

  // console.log(name , movieName);

  
  let price = 1000;
  let Obj = {
    firstName:firstName,
    lastName : lastName,
    phone : phone,
  }
    const BookTicketFunc = (param)=>{
        console.log("BookTicketFunc");
        dispatch( cartReducer(param , price , Obj ) );
        // console.log(firstName , lastName , phone)
    }



  return (
    <>
    <NavBar />
    <div className="flex justify-center items-center bg-[#1f2937]">


<section class="relative flex flex-wrap lg:h-screen lg:items-center lg:w-[75%]     ">
  <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-lg ">
      <h1 class="text-2xl  text-white font-bold sm:text-3xl">Get started today!</h1>

      <p class="mt-4 text-gray-300 my-6">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
        ipsa culpa autem, at itaque nostrum!
      </p>

      {/* <div className="cont m-5 text-white   ">
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Name : </span>      <span className="text-gray-300"> {name}</span></div>
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Rating : </span>        <span className="text-gray-300"> {average} </span></div>
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Language : </span>        <span className="text-gray-300" > {language}</span></div>
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Summary : </span>        <span className="text-gray-300"> {summary}</span></div>
      <div className="p "> <span className="text-lg font-bold sm:text-xl"> Genres : </span>        <span className="text-gray-300"> {genres + " ,"}</span></div>

      </div> */}




      <form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input readonly="readonly"  type="text" name="floating_text" id="floating_text" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required   value={name} />
      <label for="floating_text" class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Movie Name</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input readonly="readonly" type="text" name="floating_Language" id="floating_Language" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={language}  />
      <label for="floating_Language" text-white class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Language</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <textarea  readonly="readonly" type="text" name="repeat_summary" id="floating_repeat_summary" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required value={summary}  />
      <label for="floating_repeat_summary" text-white class="peer-focus:font-medium absolute text-sm text-white    dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Summary</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_Genres" id="floating_Genres" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-700 appearance-none dark:text-red-800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>setFirstName(e.target.value)} value={firstName} required />
        <label for="floating_Genres " text-white class="peer-focus:font-medium absolute text-sm text-red-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your First Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-red-700 appearance-none dark:text-gray dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  onChange={(e)=>setLastName(e.target.value)} value={lastName} required />
        <label for="floating_last_name" text-white class="peer-focus:font-medium absolute text-sm text-red-700  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Your Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={(e)=>setPhone(e.target.value)}  value={"₹" + price} required />
        <label for="floating_phone" text-white class="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input readonly="readonly" type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " required value={genres}/>
        <label for="floating_company"  class="peer-focus:font-medium  text-white absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Genres </label>
    </div>
  </div>
  {/* <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button> */}
</form>





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
