import React, { useEffect, useState } from 'react'
import ItemCard from '../ItemCard'
import { products } from '../../content/productlist'
import axiosInstance from '../../axiosInstance'
import { useSelector } from 'react-redux'

const Carousel = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {

    const fetchFeaturedProducts = async () => {
      try {
        const response = await axiosInstance.get('/');
        setData(response.data);
        // console.log(response.data);
      } catch (err) {
        setError(err.message || 'An error occurred')
      }
    }
    fetchFeaturedProducts();

  }, [])
  // console.log(data)


  return (
    <div className=' w-full p-6'>
      <h1 className='uppercase font-bold text-2xl mt-8 mb-4 text-gray-600 text-center'>Top Picks</h1>
      <div className="wrapper flex flex-wrap items-center justify-evenly">
        {data.map((product) => (
          <ItemCard
            key={product._id}
            id={product._id}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
            color={product.color}
            size={product.size}
            description={product.description}
          />
        ))}

      </div>
    </div>
  )
}

export default Carousel