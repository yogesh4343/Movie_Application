import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom'
import NavBar from '../Components/NavBar';
import { cartReducer, movieReducer, singleMovieReducer } from '../Store/Slice/CoursesSlice';
import Footer from './Footer';

const SinglePage = () => {
    const params = useParams();
    const param = params.id


    const [state, setState] = useState([])

    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch( singleMovieReducer(param) )
        
      },[dispatch])

    const {singleMovieDetail  } = useSelector((state) => state.Movies) 
    const {score , show} = {...singleMovieDetail[0]}
      const {id , name , genres, image , language  , rating , summary} = {...show}
    const {average} = {...rating}



  return (
    <div>
    <NavBar />


{/* sinfle prod  */}

<div className={`product z-0 key=${id}`}>
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4 items-center">
                <div className="w-full px-4 md:w-1/2 z-0 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 sm:h-full ">
                            <img src={image == null ? "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcReMhtSntFv59ZpCW6AorVsvAsreKdqdZmqtknZeR1uOeWR60Yd" : image.original} alt=""
                                className="object-cover w-full lg:h-full " />
                        </div>
                       
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20 ">
                        <div className="mb-8 flex flex-col justify-center">
                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                {name}</h2>
                         
                                 <p className="max-w-md mb-8 text-gray-400  dark:text-grey-400 flex gap-2 font-bold">
                            <p className="max-w-md  text-gray-700 dark:text-red-400"> {average != null ? average : 5} </p>
                            Rating  
                            </p>

                            <p className="max-w-md mb-8 text-gray-700 font-bold dark:text-gray-400">
                           Language :  {language}
                            </p>

                            <p key={id} className="max-w-md mb-8 text-gray-700 font-bold dark:text-gray-400">
                            Genres :  {genres && genres.map((gner,ind)=>{
                                    return (  gner + "   " + "  ")
                                    
                                })}                           
                            </p>

                            <p className="max-w-md mb-8 text-gray-700 font-bold dark:text-gray-400">
                               Summary : {summary}
                            </p>

                            <NavLink to={`/form/${param}`}>
                            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Book Movie Ticket</button>
                            

</NavLink>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </section> 
        </div>
  
  <Footer />
    </div>
  )
}

export default SinglePage
