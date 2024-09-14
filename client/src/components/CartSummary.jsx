import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
// import { setItemsInCart } from '../redux/features/cartSlice'

const CartSummary = () => {
    const cart = useSelector((state) => state.cart.items)
    const total = useSelector(state=>state.cart.totalPrice)
    console.log("total price = ", total)
    const dispatch = useDispatch()
    const number = useSelector((state) => state.cart.itemsInCart)
    // console.log("cart items are: ",cart)
    // cart.map((item)=>{
    //     totalPrice += item.price
    // })
    // console.log(totalPrice,"is total price")
    return (
        <div className=' w-1/2 h-3/4 flex flex-col items-center justify-around my-4 px-6 text-lg '>

            <div className='w-full grid grid-rows-2 gap-2 font-semibold mt-8'>
                <div className="grid grid-cols-2">
                    <span className='font-thin'>Items: </span>
                    <span className='justify-self-end'>{cart.length}</span>
                </div>
                <div className='grid grid-cols-2 '>
                    <span>Total Amount:</span>
                    <span className='justify-self-end'>Rs. {total}</span>
                </div>
            </div>

            <div className="w-full flex items-center justify-center mt-8">
                <Link to='/checkout' className=' w-64 rounded-xl text-center text-brandColor bg-[#fca311] p-4 uppercase font-bold text-sm'>
                    Checkout
                </Link>

            </div>

        </div>
    )
}

export default CartSummary