import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../content/productlist'

const ItemCard = (product) => {
  return (
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 my-4 ">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56">
          <img
            // src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
            src={product.img}
            alt="card-image" className="object-cover w-full h-full animation transition ease-in-out duration-300 hover:scale-110" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="block font-sans text-sm antialiased font-medium leading-relaxed text-blue-gray-900">
              {product.name}
            </p>
            <p className="block font-sans text-sm antialiased font-medium leading-relaxed text-blue-gray-900">
              Rs. {product.price}
            </p>
          </div>
          <p className="block font-sans text-xs antialiased font-normal leading-normal text-gray-700 opacity-75">
            {product.detail}
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link
            to='/cart'
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button">
            Add to Cart
          </Link>
        </div>
      </div>

  )
}

export default ItemCard