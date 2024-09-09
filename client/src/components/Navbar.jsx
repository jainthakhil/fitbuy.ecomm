import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import cartImg from '../assets/images/cart.png'
import userImg from '../assets/images/akkii4.jpg'
import brandImg from '../assets/images/brandimg.jpg'


const Navbar = () => {
  var cartItemNo = 12;
  return (
    <nav className="wrapper w-full h-16 flex flex-row items-center justify-between bg-[#E4E4E4] text-white z-10 ">
      
      <div className="link-box w-[40%] h-full flex justify-between">
        <ul className='w-auto h-full flex items-center justify-end text-sm md:text-base text-gray-600'>
          <li className="nav-link h-full mx-2 md:mx-4 ">
            <NavLink 
              to="/men" 
              className='animation transition ease-in-out duration-300  hover:scale-105'
            >
              Men
            </NavLink>
          </li>

          <li className="nav-link h-full  mx-2 md:mx-4 ">
            <NavLink 
              to="/women"              
              className='animation transition ease-in-out duration-300  hover:scale-105 '
            >
              Women
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="logo-box w-[20%] h-full flex items-center justify-start overflow-hidden">
      <NavLink 
        to='/'
        exact='true'
        className='h-full w-full'
      >
        <img src={brandImg} alt="Ubuy" className='h-full  animation transition ease-in-out duration-300 hover:scale-105' />
      </NavLink>
        
      </div>

      <div className="link-box w-[40%] h-full flex justify-end">
        <ul className='w-auto h-full flex items-center justify-end text-sm md:text-base text-gray-600'>
          <li className="nav-link h-full w-8 md:w-10  mx-2 md:mx-4 ">
            <NavLink 
              to="/cart"              
              className=' w-full animation transition ease-in-out duration-300 hover:scale-105  relative'
            >
              <img src={cartImg} alt="" className='w-3/4' />
              <span className='absolute pt-2 text-sm font-bold text-white '>{cartItemNo>9 ? cartItemNo = '9+' : cartItemNo = cartItemNo}</span>
            </NavLink>
          </li>

          {/* <li className="nav-link h-full mx-2 md:mx-4 ">
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
          </li> */}

          <li className="nav-link h-full mx-2 md:mx-4 ">
            <details className="relative text-brandColor h-full animation transition ease-in-out duration-300 hover:scale-110">
              <summary className="cursor-pointer h-full w-12 flex items-center justify-center "><img src={userImg} alt="" className='w-3/4 rounded-full' /></summary>
              <ul className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-2 text-black w-max">
                <li className="py-1 px-3 hover:bg-gray-100"><Link to="/signin">Sign In</Link></li>
                <li className="py-1 px-3 hover:bg-gray-100"><Link to="/signup">Sign Up</Link></li>
                <li className="py-1 px-3 hover:bg-gray-100"><Link to="/logout">Logout</Link></li>
              </ul>
            </details>

          </li>
          

          {/* <li className="nav-link h-full w-8 md:w-10 mx-2 md:mx-4 ">
            <NavLink 
              to="/user" 
              className=' w-full animation transition ease-in-out duration-300 hover:scale-110 '         
            >
              <img src={userImg} alt="" className='w-3/4 rounded-full'/>
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
