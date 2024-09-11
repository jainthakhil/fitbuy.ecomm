import React,{useState} from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
// import { setItemsInCart } from '../redux/features/cartSlice'

const CartSummary = () => {
    const cart =  useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    const number = useSelector((state)=>state.cart.itemsInCart)
  return (
    <div className=' w-full h-3/4 flex flex-col items-center justify-around border-grey-600 rounded-xl my-4 px-6 text-lg '>

    <div className='w-full grid grid-rows-3 gap-2  font-semibold mt-8'>

        <div className="grid grid-cols-2">
            <span className='font-thin'>Items: </span>
            <span className='justify-self-end'>{number}</span>

        </div>
        <div className="grid grid-cols-2">
            <span className='font-thin'>Products:</span>
            <span className='justify-self-end'>Rs. {'totalPrice'}</span>
        </div>

        <div className="grid grid-cols-2">
        <span className='font-thin'>Shipping: </span>
        <span className='justify-self-end'>{'Standard'}</span>
            
        </div>
    </div>
    <div className='w-full grid grid-cols-2 '>
        <span>Total Amount:</span>
        <span className='justify-self-end'>{'total Price'}</span>
    </div>
    <div className="w-full flex items-center justify-center">
    <Link to='/checkout' className=' w-3/4 rounded-xl text-center bg-[#e7e7e9] p-4 uppercase font-bold text-sm'>
        Checkout
    </Link>

    </div>

    </div>
  )
}

export default CartSummary