import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Banner from '../Assests/Banner'
import Buttons from '../Assests/Buttons'
import Cards from '../Assests/Cards'
import Heading from '../Assests/Heading'
import NewBanner from '../Assests/NewBanner'
import NavBar from '../Components/NavBar'
import UserThaughts from '../Components/UserThaughts'
import { movieReducer } from '../Store/Slice/CoursesSlice'
import Footer from './Footer'

const Home = () => {

    const [state, setState] = useState([])
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(movieReducer())
    }, [dispatch])

    const { movies } = useSelector((state) => state.Movies)

    return (
        <div>

            <NavBar />

            <NewBanner />

            <div>
                <Heading heading="Recommanded Movies" />
                <div className="movies  flex flex-wrap justify-center gap-4 h-auto my-5">
                    {
                        movies && movies.map((curEl, ind) => {
                            if (ind < 4) {
                                return <Cards  key={ind} ele={curEl} />
                            }
                        })
                    }
                </div>
            
                <div className="btn flex justify-center">   <NavLink to="/movies" >   <Buttons className="bts" btn="Explore More Movies" clr="black" /> </NavLink> </div>
            </div>

            <div className="my-16">
                <UserThaughts />
            </div>
            
            <Footer />
        </div>
    )
}

export default Home
