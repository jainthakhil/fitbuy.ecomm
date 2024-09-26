import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInstance'
import {useDispatch} from 'react-redux'
import { setUserName, setUserEmail } from '../redux/features/loginSlice'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        email:'',
        password:''
    })
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const handleChange = (e)=>{
       const {name, value} = e.target;
        setUserData({...userData, [name]:value })
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(userData);
        try{
            const response = await axiosInstance.post('/signin', userData);
            setSuccess(response.data.message);
            setError(null);
            console.log(response.data.message);
            setUserData({email:'', password:''})
            dispatch(setUserName(response.data.loggedInUserName)) //sending username to the store
            dispatch(setUserEmail(userData.email)) //sending user email to the store
            navigate('/')
        } catch(err){
            setError(err.response?.data?.error );
            console.log(err.response?.data?.error);
            setSuccess(null);
        }
    }
    return (
        <div className="loginpage w-full h-full flex items-center justify-center m-10">
            <div className="relative flex flex-col text-gray-700 bg-transparent shadow-none rounded-xl border border-slate-200">
                <div className="relative m-2.5 items-center flex justify-center text-white h-24 rounded-md bg-brandColor">
                    <h3 className="text-2xl">
                        Sign In
                    </h3>
                </div>
                <form onSubmit={handleSubmit} className="max-w-screen-lg my-2 w-80 sm:w-96 p-6">
                    <div className="flex flex-col gap-6 mb-1">

                        <h6
                            className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Your Email
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input placeholder="name@mail.com"
                                onChange={handleChange}
                                name='email'
                                value={userData.email}
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                        </div>
                        <h6
                            className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                            Password
                        </h6>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input type="password" placeholder="********"
                                onChange={handleChange}
                                name='password'
                                value={userData.password}
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
                        </div>
                    </div>

                    <button
                       
                        className="mt-6 block w-full select-none rounded-lg bg-brandColor py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="submit">
                        Sign In
                    </button>
                    <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
                        Don't have an account?
                        <Link to='/signup' className="font-medium text-gray-900">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Login