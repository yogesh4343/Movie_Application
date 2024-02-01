import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const MovieSlice = createSlice({
    name:"Movies",
    initialState:{
        movies :[],
        singleMovieDetail:{},
        cartDetails:{
            cartItems: localStorage.getItem("movieCart") ? JSON.parse(localStorage.getItem("movieCart")) : []
        },
        searchMovie:[],

    },
    status: STATUS.IDLE,



    reducers:{
        getStatus(state,action){
            state.status = action.payload
        },

        getMovies(state,action){
            state.movies = action.payload
        },
        getSingleMovies(state,action){
            state.singleMovieDetail = action.payload
        },
        getCartMovies(state,action){
            state.cartDetails.cartItems.push(action.payload);
        },
        getRemoveMovies(state, action){
            state.cartDetails.cartItems = action.payload;
        },
        getSearchtMovies(state,action){
            state.searchMovie.push(action.payload);
        }
       
    }
})


export default MovieSlice.reducer;

export const {getStatus,getMovies , getSingleMovies , getCartMovies , getRemoveMovies , getSearchtMovies } = MovieSlice.actions


export  function movieReducer(){
    return async function movieThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        try{
            let link = `https://api.tvmaze.com/search/shows?q=all`
                const {data} = await axios.get(link);

               
            dispatch(getStatus(STATUS.IDLE));
            dispatch(getMovies(data))
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}


export  function singleMovieReducer(idx){
    return async function singleMovieThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        
        try{
            let link = `https://api.tvmaze.com/search/shows?q=all`
            const {data} = await axios.get(link)

            const flt = data && data.filter((curEl,inx)=>{
                if(curEl.show.id == idx){
                    // console.log(curEl)
                    return curEl
                }
            })


            dispatch(getStatus(STATUS.IDLE));
            dispatch(getSingleMovies(flt))
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}



// cart 

export  function cartReducer(idx , price){
    // console.log('redux',idx)
    return async function cartThunk(dispatch , getState){
        dispatch(getStatus(STATUS.LOADING))

        
        try{
            let link = `https://api.tvmaze.com/search/shows?q=all`
            const {data} = await axios.get(link)

            const flt = data && data.filter((curEl,inx)=>{
                // console.log(curEl)
                if(curEl.show.id == idx){
                    // console.log(curEl)
                    return curEl
                }
            })


            
            
            dispatch(getStatus(STATUS.IDLE));
            dispatch(getCartMovies({flt, price}))
            localStorage.setItem('movieCart' , JSON.stringify(getState().Movies.cartDetails.cartItems))
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}



// remove 

export  function removeCartReducer(idx){
    return async function removeCartThunk(dispatch , getState){
        dispatch(getStatus(STATUS.LOADING))


        let arrayPro = getState().Movies.cartDetails.cartItems

            const flt = arrayPro && arrayPro.filter((curEl,inx)=>{
                const {flt} = {...curEl}
                const {show} = {...flt[0]}
                const {id} = {...show}
                // console.log(id );
                    return id != idx;
            })

            console.log(flt);


            
            
            dispatch(getStatus(STATUS.IDLE));
            dispatch(getRemoveMovies(flt));
            localStorage.setItem('movieCart' , JSON.stringify(getState().Movies.cartDetails.cartItems))

    }

}


// sorting


export  function sortProductReducer(v){
    console.log(v);
    return async function sortProductThunk(dispatch , getState){
        dispatch(getStatus(STATUS.LOADING))


        try{
            let link = `https://api.tvmaze.com/search/shows?q=all`
            const {data} = await axios.get(link)

            const flt = data && data.filter((curEl,inx)=>{
                console.log(curEl.show.name)
                    return v && curEl.show.name    && curEl.show.name   && curEl.show.name.toLowerCase().includes(v)  

            })
            // console.log(flt);


          
            dispatch(getStatus(STATUS.IDLE));
            dispatch(getSearchtMovies({flt}))
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}
