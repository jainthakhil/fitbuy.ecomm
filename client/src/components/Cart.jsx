import React from 'react'
import ItemCard from './ItemCard'
import CartCard from './CartCard'
import CartSummary from './CartSummary'
import { useSelector } from 'react-redux'
import { products } from '../content/productlist'

const Cart = () => {
  const cart = useSelector((state) => state.cart.items)
  cart.map((item) => {
    // console.log(item);
  })
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
              totalArticle={1}
            />
            {index < cart.length - 1 && <hr className="my-4 border-t " />}
          </div> 
        ))}
       

        </div>

      </form>
      <div className="summary w-full flex items-center justify-end">
        <CartSummary />
      </div>
    </div>




  )
}

export default Cart