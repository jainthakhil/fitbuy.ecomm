import React from 'react'
import { Link } from 'react-router-dom'
import CartCard from './CartCard'
import CartSummary from './CartSummary'
import { useSelector } from 'react-redux'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  console.log("virtual cart: ",cart);
  const actualCart = useSelector((state)=>state.cart.actualCart)
  console.log("actual cart: ",actualCart)
  
  
  return (
    <div className="cartbox text-[#545454] font-medium p-12">
      <h1 className='text-[2rem] font-bold mb-6'>
        Cart
      </h1>

      <form action="" method=''>
        <div className="cart-header w-full py-4 flex items-center justify-between">

          <div className="detail w-1/2 h-full flex items-center">
            <div className="product">
              Product
            </div>
          </div>
          <div className="quant w-1/2 h-full flex items-center justify-between">
            <div className="product w-1/3">
              Price
            </div>
            <div className="product w-1/2">
              Quantity
            </div>
            <div className="product flex-grow flex justify-end">
              Total
            </div>
          </div>
        </div>
        <hr className="mb-6 border-t" />
        <div className="cart-items w-full h-full  ">
        {cart.length>0 ? ( 
        cart.map((product, index) => (        
          <div key={product.id}>
            <CartCard
              id={product.id}
              img={product.imageUrl}
              name={product.name}
              price={product.price}
              color={product.color}
              size={product.size}
              description={product.description}
              quantity={product.quantity}
            />
            {index < cart.length - 1 && <hr className="my-4 border-t " />}
          </div> 
        ))) : (<h3 className='font-bold text-[2rem] text-center'>Your cart is empty <Link to='/' className='text-[#FCA311]'>shop now!</Link></h3>)}
        </div>
      </form>
      <hr className="my-4 border-t " />
      <div className="summary w-full flex items-center justify-end">
        <CartSummary />
      </div>
    </div>
  )
}
export default Cart