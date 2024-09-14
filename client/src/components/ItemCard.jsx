import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { products } from '../content/productlist'
import {useDispatch, useSelector} from 'react-redux'
import { setExactProduct } from '../redux/features/exactProductSlice'
import {addItem, increaseItemsInCart, increaseTotalPrice} from '../redux/features/cartSlice'

const ItemCard = (product) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const number = useSelector((state)=>state.cart.itemsInCart)
  
  // console.log(number);
  // const {id, img, name, price, description} = product;
  const handleClick = () =>{
    dispatch(setExactProduct(product))
    console.log(product)
    navigate(`/product/${product.id}`);
  }

  const handleAddToCart = () =>{
    console.log('add to cart clicked') 
    dispatch(increaseTotalPrice({price:product.price}))
    dispatch(addItem({ name: product.name, id: product.id, price: product.price, imageUrl: product.imageUrl, description: product.description, size: product.size, color:product.color, totalArticle:1}));
    // dispatch(increaseItemsInCart())
    console.log("itemcard details: ",product.totalArticle)
  }

  return (
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-72 my-4 ">
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-56 cursor-pointer" onClick={handleClick}>
          <img
            src={product.imageUrl}
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
            {product.description}
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            onClick={handleAddToCart}
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button">
            Add to Cart
          </button>
        </div>
      </div>
  )
}

export default ItemCard