import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/user.png'
import cartImg from '../assets/images/cart.png'
import brandImg from '../assets/images/brandimg.jpg'
import { useSelector } from 'react-redux';


const Navbar = () => {
  var cartItemNum = useSelector((state) => state.cart.items)
  var cartItemNo = cartItemNum.length 
  return (
    <nav className="wrapper w-full h-16 flex flex-row items-center justify-between bg-[#E4E4E4]">
      
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
              <span className='h-5 w-5 absolute top-3 right-0 text-sm font-normal text-white bg-[#545454] flex items-center justify-center rounded-full'>{cartItemNo>9 ? cartItemNo = '9+' : cartItemNo = cartItemNo}</span>
            </NavLink>
          </li>

          <li className="nav-link h-full mx-2 md:mx-4 ">
            <details className="relative text-brandColor h-full animation transition ease-in-out duration-300 hover:scale-110">
              <summary className="cursor-pointer h-full w-12 flex items-center justify-center "><img src={logo} alt="" className='w-3/5 ' /></summary>
              <ul className="absolute right-0 mt-2 bg-white shadow-md rounded-lg p-2 text-black w-max">
                <li className="py-1 px-3 hover:bg-gray-100"><Link to="/signin">Sign In</Link></li>
                <li className="py-1 px-3 hover:bg-gray-100"><Link to="/signup">Sign Up</Link></li>
                <li className="py-1 px-3 hover:bg-gray-100"><Link to="/logout">Logout</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
