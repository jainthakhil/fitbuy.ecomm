import React from 'react'
import ItemCard from '../ItemCard'
import { products } from '../../content/productlist'

const Carousel = () => {
  return (
    <div className=' w-full p-6'>
        <h1 className='uppercase font-bold text-2xl mt-8 mb-4 text-gray-600 text-center'>Top Picks</h1>
       <div className="wrapper flex flex-wrap items-center justify-evenly">
       {products.map((product) => (
        <ItemCard
          key={product.id}
          img={product.img}
          name={product.name}
          price={product.price}
          detail={product.detail}
        />
       ))}
          
       </div>
    </div>
  )
}

export default Carousel