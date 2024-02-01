import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavBar from '../Components/NavBar'
import { removeCartReducer } from '../Store/Slice/CoursesSlice';
import NotFound from './NotFound';

const Cart = () => {

  const dispatch = useDispatch();
  const { cartDetails } = useSelector((state) => state.Movies)
  const { cartItems } = { ...cartDetails }
  // console.log(cartItems);

  // totl
  let totalPrice = 0;

  cartItems.forEach(item => {
    totalPrice += item.price;
  })


   {/* delete func  */ }
   const deleteFunc = (id) => {
    console.log("deleteFunc", id);
    dispatch(removeCartReducer(id));
  }
  return (

    <div>

        {cartItems.length == 0 ? <NotFound/> :
      <div className="main">

      <NavBar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h1 className="text-2xl font-bold my-4">Movie Cart</h1>
            <NavLink to="/movies"> <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Explore More Movies
            </button>  </NavLink>
          </div>

          {/* map  */}

          {cartItems && cartItems.map((curEl, ind) => {
            {/* console.log(curEl); */}
            const { flt, price , Obj } = { ...curEl }
            const { show } = { ...flt[0] };
            const { id, name, genres, image, language, rating, summary } = { ...show };
            const {firstName, lastName} = {...Obj}
            console.log(firstName , lastName);
               

            return (
              <div key={ind} className="mt-8">
                <div className="flex  md:flex-row border-b border-gray-400 py-4 justify-between flex-row m-7">
                  <div className="flex-shrink-0 flex  justify-between flex-col w-fit sm:flex-row ">
                    <img src={image.original} alt="Product image" className="w-32 h-32 object-cover" />

                    <div className="mt-4 md:mt-0 md:ml-6 ">
                      <h2 className="text-lg font-bold text-[#9333e9] ">{name}</h2>
                      {/* <p className="mt-2 text-gray-600">{cont}...</p> */}
                      <div className="mt-4 flex items-center">
                        <span className="mr-2 font-bold">Quantity: 1 </span>
                      </div>
                      <div className="mt-4 flex items-center">
                        <span className="ml-auto font-bold">Language : {language}</span>
                      </div>
                      <div className="mt-4 flex items-center">
                        <span className=" font-bold">Price : {price}</span>
                      </div>
                      <div className="mt-4 flex items-center">
                        <span className=" font-bold">Name : {firstName}  {lastName}</span>
                      </div>
                    </div>
                  </div>
                  <div className="delete cursor-pointer text-2xl" onClick={() => deleteFunc(id)}>🗑️</div>
                </div>
              </div>
            )
          })}

          <div className="flex justify-end items-center mt-8 flex-col float-end gap-2 mb-12">
            <span className="text-gray-600 mr-4">Subtotal:</span>
            <span className="text-xl font-bold"> ₹{totalPrice}</span>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
              Checkout
            </button> 
          </div>
        </div>
      </div>

        }

       
    </div>
  )
}

export default Cart
