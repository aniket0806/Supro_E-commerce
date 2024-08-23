import{createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'


export const registerUser = createAsyncThunk('auth/register',async(userData)=>{
  
    const response =await axios.post('https://669e4fad9a1bda3680062fa1.mockapi.io/login/register/login', values);

    return response.data;
})
export const loginUser = createAsyncThunk('auth/login', async (userData) => {

    const response =await axios.get('https://669e4fad9a1bda3680062fa1.mockapi.io/login/register/login', values);
    return response.data;
});
//  export const isLoggedIn = useSelector(data)((state)=> state.auth.isLoggedIn) 
const authSlice =createSlice({
    name: 'auth',
    initialState:{
        user:null, status: 'idle', error:null , isLoggedIn:false,
    },
    reducers:{
        logoutUser: (state) =>{
            state.user =null;
            state.isLoggedIn=false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
})

export const {logoutUser} = authSlice.actions
export default authSlice.reducer;