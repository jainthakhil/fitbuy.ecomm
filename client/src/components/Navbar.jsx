import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import cartImg from '../assets/images/cart.png'
import userImg from '../assets/images/akkii4.jpg'
import brandImg from '../assets/images/brandimg.png'


const Navbar = () => {
  var cartItemNo = 12;
  return (
    <nav className="wrapper w-[98.5%] h-12 flex flex-row items-center justify-between  backdrop-blur-md rounded-lg text-white z-10 m-[0.75%]  ">
      <div className="logo-box w-[10%] h-full flex items-center justify-start">

      <NavLink 
        to='/'
        exact='true'
        className='h-full'
      >
        <img src={brandImg} alt="Ubuy" className='h-full aspect-video pl-4 animation transition ease-in-out duration-300 hover:-translate-y-[1.5px] hover:scale-105' />
      </NavLink>
        
      </div>
      <div className="link-box w-[90%] h-full flex justify-between">

        <ul className='w-auto h-full flex items-center justify-end text-sm md:text-base text-gray-600'>
          <li className="nav-link h-full mx-2 md:mx-4 ">
            <NavLink 
              to="/men" 
              className='animation transition ease-in-out duration-300 hover:-translate-y-0.5 hover:scale-105'
            >
              Men
            </NavLink>
          </li>

          <li className="nav-link h-full  mx-2 md:mx-4 ">
            <NavLink 
              to="/women"              
              className='animation transition ease-in-out duration-300 hover:-translate-y-0.5 hover:scale-105 '
            >
              Women
            </NavLink>
          </li>
        </ul>


        <ul className='w-auto h-full flex items-center justify-end text-sm md:text-base text-gray-600'>
          <li className="nav-link h-full w-8 md:w-10  mx-2 md:mx-4 ">
            <NavLink 
              to="/cart"              
              className=' w-full animation transition ease-in-out duration-300 hover:-translate-y-0.5 hover:scale-105  relative'
            >
              <img src={cartImg} alt="" className='w-3/4' />
              <span className='absolute pt-2 text-sm font-bold text-white '>{cartItemNo>9 ? cartItemNo = '9+' : cartItemNo = cartItemNo}</span>
            </NavLink>
          </li>

          <li className="nav-link h-full mx-2 md:mx-4 ">
            <NavLink 
              to="/signin"            
              className='animation transition ease-in-out duration-300 hover:-translate-y-0.5 hover:scale-105 '
            >
              Login
            </NavLink>
          </li>

          <li className="nav-link h-full mx-2 md:mx-4 ">
            <NavLink 
              to="/signup"            
              className='animation transition ease-in-out duration-300 hover:-translate-y-0.5 hover:scale-105 '
            >
              Signup
            </NavLink>
          </li>

          <li className="nav-link h-full w-8 md:w-10 mx-2 md:mx-4 ">
            <NavLink 
              to="/user" 
              className=' w-full animation transition ease-in-out duration-300 hover:-translate-y-0.5 hover:scale-105 '         
            >
              <img src={userImg} alt="" className='w-3/4 rounded-full'/>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
