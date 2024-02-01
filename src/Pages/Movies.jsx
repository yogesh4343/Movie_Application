import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Assests/Cards'
import NavBar from '../Components/NavBar'
import { movieReducer } from '../Store/Slice/CoursesSlice'
import Footer from './Footer'

const Movies = () => {

    const [state, setState] = useState([])
    
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch( movieReducer() )
      },[dispatch])

    const {movies  } = useSelector((state) => state.Movies) 
  return (
    <>
      <NavBar />
    <div className="my-10">

      <div className="movies  flex flex-wrap justify-center gap-4 h-auto">
                {
                    movies && movies.map((curEl, ind) => {
                        {/* console.log(curEl) */ }
                        return <Cards key={ind} ele={curEl} />
                    })
                }
            </div>



    </div>
      <Footer />
    </>
  )
}

export default Movies
