import React from 'react'
import heroImg from '../../assets/images/heroimg.jpg'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Hero = () => {
  const { name, email } = useSelector((state) => state.user) //accessing the store data

  return (
    <>
      <div className="w-full min-h-dvh flex bg-cover bg-no-repeat"  style={{ backgroundImage: `url(${heroImg})` }} >

      <div className="w-1/2 h-dvh flex items-center justify-start mt-32 ml-14">
        <h2 className='text-[2rem] font-black text-white leading-none'>Strength in <br />
       Every stitch</h2>
      </div>

      <div className="w-1/2 h-dvh flex flex-col items-end mr-20 mt-20 justify-center">
        <h1 className='text-[3rem] font-black text-white leading-none'>Wear Your <br /> Motivation</h1>
        <Link to='/shop' className='w-24 h-12 border-2 text-white border-white flex items-center justify-center my-4 animation transition ease-in-out duration-300 hover:bg-white hover:text-brandColor hover:scale-105'>
        Shop Now

      </Link>
      </div>

      

      </div>
    </>
  )
}

export default Hero