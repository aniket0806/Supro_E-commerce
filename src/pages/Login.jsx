import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux';
// import { signUpSchema } from '../schemas/Schemas'
import * as Yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import {loginUser} from '../store/authSlice'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const initialValues ={
    email:"",
    password:"",
  
  } ; 

const dispatch = useDispatch();
const navigate = useNavigate();
  const handleLogin = async (values)=>{
    try {
      const response =await axios.get('https://669e4fad9a1bda3680062fa1.mockapi.io/login/register/login', values);

      console.log('Login response: ', response.data)
      const user =response.data.find(user => user.email === values.email && user.password === values.password

      )

      // const user =response.data;
      // const user =user.find(user => user.email === values.email && user.password === values.password)
      if(user){
        dispatch(loginUser(user))
        toast.success("Login successful",{
          position:'top-center',
          
        })
        // navigate('/')
      }else{
        toast.error('Invalid error or password');
      }
    } catch (error) {
      console.error('Error logging in :', error);
      toast.error('Login failed .  Please try again. ')
    }
  }


  const {values, handleBlur, handleChange, handleSubmit, errors, touched} =
  useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    validateOnChange:true,
    validateOnBlur:false,
    onSubmit: handleLogin,
    
  })



  return (
    <>
       
<div className="flex items-center justify-center h-screen bg-gray-100">


<div className="bg-white p-6 rounded shadow-md w-full max-w-md">
    <h1 className="text-2xl font-bold mb-4 text-center">Welcome to Login!</h1>
    <form onSubmit={handleSubmit} className="space-y-4" >
     
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          autoComplete="off"
          name="email"
          id="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {touched.email && errors.email ? (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        ) : null}
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          autoComplete="off"
          name="password"
          id="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {touched.password && errors.password ? (
          <p className="mt-1 text-sm text-red-600">{errors.password}</p>
        ) : null}
      </div>

      <button  type="submit"  className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Login 
      </button>
   
      <ToastContainer />
    </form>
    {/* <p className="mt-4 text-center">Already have an account?  <div className="text-blue-600 hover:text-blue-800">Sign In Now</div></p> */}
  </div>
  </div>
   
     </>
  )
}


export default Login

