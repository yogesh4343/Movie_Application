// import './App.css';

import Axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Assests/Form";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import PageNotFound from "./Pages/PageNotFound";
import SinglePage from "./Pages/SinglePage";

function App() {



 


  return (
    <div>


        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:id" element={<SinglePage />} />
            <Route path="/form/:id" element={<Form />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
