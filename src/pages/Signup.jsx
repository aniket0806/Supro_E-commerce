import React, { useState } from 'react'
import { useFormik } from 'formik'
import { signUpSchema } from '../schemas/Schemas'
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';




const Signup = () => {
  const initialValues ={
    name:"",
    email:"",
    password:"",
    confirm_password:"",
  } ; 

  
  const handleRegister =async(values, action)=>{
    try {
      const response =await axios.post('https://669e4fad9a1bda3680062fa1.mockapi.io/login/register/login', values);
   

      
      console.log('Registration response: ', response.data)
      console.log(values)
      toast.success("Registration Sucess",{
        position:"top-center",
      });
      action.resetForm();
    } catch (error) {
      console.error('Error registering user:',error);
      toast.error('Registration failed. Please try again.');
    }
  }
  const {values, handleBlur, handleChange, handleSubmit, errors, touched} =
  useFormik({
    initialValues,
    validationSchema: signUpSchema,
    validateOnChange:true,
    validateOnBlur:false,
    onSubmit: handleRegister,
    
  })
  console.log(onsubmit)



  return (
    <>
       
<div className="flex items-center justify-center h-screen bg-gray-100">


<div className="bg-white p-6 rounded shadow-md w-full max-w-md">
    <h1 className="text-2xl font-bold mb-4 text-center">Welcome!</h1>
    <form onSubmit={handleSubmit} className="space-y-4" >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          autoComplete="off"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {touched.name && errors.name ? (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        ) : null}
      </div>
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
      <div>
        <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          autoComplete="off"
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
          value={values.confirm_password}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {touched.confirm_password && errors.confirm_password ? (
          <p className="mt-1 text-sm text-red-600">{errors.confirm_password}</p>
        ) : null}
      </div>
      <button  type="submit"   className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Registration
      </button>
      <ToastContainer />
    </form>
    <p className="mt-4 text-center">
            Already have an account? <Link to={'/login'} className="text-blue-600 hover:text-blue-800">Sign In Now</Link>
          </p>
  </div>
  </div>
   
     </>
  )
}

export default Signup