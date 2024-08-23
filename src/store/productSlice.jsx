import { createSlice } from "@reduxjs/toolkit";
export const STATUSES = Object.freeze(
    {
        SUCCESS: 'SUCCESS',
        ERROR: 'error',
        Loading:'LOADING',

    }
)

const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.SUCCESS,
    },
    reducers:{
        setProduct(state,action){
            state.data= action.payload
        },
        setStatus(state,action){
            state.status=action.payload;
        }
    }
})

export const {setProduct, setStatus} = productSlice.actions
export default productSlice.reducer;

export function fetchproduct(){
    return async function fetchproductThunk(dispatch){
        dispatch(setStatus(STATUSES.Loading))
        try {
            const res = await fetch("https://fakestoreapi.com/products/")
            const data =await res.json();
            dispatch(setProduct(data))
            dispatch(setStatus(STATUSES.SUCCESS))
        } catch (error) {
            console.log(error)
        }
    }
}