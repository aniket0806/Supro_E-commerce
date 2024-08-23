import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegHeart } from "react-icons/fa";
import { LiaUserSolid } from "react-icons/lia";
import { PiShoppingCartLight } from "react-icons/pi";
import { logoutUser} from '../store/authSlice'
const Navbar = () => {
 const items =useSelector((state)=>state.cart.items) || []
  const isLoggedIn =useSelector((state) =>state.auth.isLoggedIn);
  const navigate =useNavigate();
  const dispatch = useDispatch()
  const handleLogout = () =>{
    dispatch(logoutUser());
    navigate('/')
  }
  return (
    <div className ="w-full  h-20 sticky top-0 flex justify-between items-center px-8 shadow-md" >
        <div className='flex items-center '>
        <h1 className='text-3xl md:text-4xl font-bold '>
          Supro.
          </h1>
        <Link to={"/"} className='font-semibold ml-8 text-lg'>
        Home
        </Link>
        </div>

        <div className='flex items-center space-x-6 text-lg' >
        <Link to={"/wishlist"} >
        < FaRegHeart  className='text-xl md:text-2xl'/></Link>
        

        <Link to={"/cart"} className='relative'>
        <PiShoppingCartLight className='text-xl md:text-2xl' />
        
        <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2'>
          { items.reduce((accumulator, currentItem) => accumulator + currentItem.quantity, 0)}
          
          </span>
          </Link >
        
        <Link to={"/signup"}>
        <LiaUserSolid  className='text-xl md:text-2xl'/>
        </Link>
      
         
        {/* <Link to={""}> */}
        {/* <button onClick={handleLogout} className='bg-red-500 text-white px-4 py-2 rounded-md' >Log out</button> */}
        {/* </Link> */}
        
        
        
        
        </div>
    </div>
  )
}

export default Navbar


