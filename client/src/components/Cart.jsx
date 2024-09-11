import React from 'react'
import ItemCard from './ItemCard'
import CartCard from './CartCard'
import CartSummary from './CartSummary'
import { useSelector } from 'react-redux'
import { products } from '../content/productlist'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  cart.map((item) => {
    console.log(item);
  })
  return (

    <div className="cartbox bg-[#005f73] text-white">

      <div className="cart w-full h-full grid grid-cols-1 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12  ">

        {/* Left side (3/4 width) with a single column */}
        <div className="col-span-1 sm:col-span-4 md:col-span-6 lg:col-span-8 flex flex-col gap-6 p-4 h-dvh overflow-y-scroll custom-scrollbar ">
          <h1 className='text-lg font-bold'>Shopping Cart</h1>
          {cart.map((product, index) => (
            <div key={product.id}>
              <CartCard
                id={product.id}
                img={product.imageUrl}
                name={product.name}
                price={product.price}
                color={product.color}
                size={product.size}
                description={product.description}
              />
              {/* Render <hr> after each CartCard except the last one */}
              {index < cart.length - 1 && <hr className="my-4 border-t border-slate-400" />}
            </div>
          ))}
          <hr className="my-4 border-t border-gray-300" />
        </div>

        {/* Right side (1/4 width) */}
        <div className="h-full flex flex-col summary col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-4 p-4  ">
        <h3 className='font-bold w-full text-left text-lg'>Summary</h3>
          <CartSummary />
        </div>



      </div>
    </div>




  )
}

export default Cart