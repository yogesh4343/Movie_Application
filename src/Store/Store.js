import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./Slice/CoursesSlice";

const store = configureStore({
    reducer: {
        Movies : MovieSlice,
    },
  });
  
  export default store;