import React, {useState, useEffect} from 'react'
import ItemCard from './ItemCard'
import axiosInstance from '../axiosInstance'

const WomenCarousel = () => {
    const [womenData, setWomenData] = useState([]);
    useEffect(() => {

        const fetchWomenProducts = async () => {
          try {
            const response = await axiosInstance.get('/women');
            setWomenData(response.data);
            // console.log(response.data);
          } catch (err) {
            setError(err.message || 'An error occurred')
          }
        }
        fetchWomenProducts();
    
      }, [])
    

  return (
    <div className=' w-full p-12'>
      <h1 className='uppercase font-medium text-2xl mt-8 mb-4 text-gray-600 text-center'>Women</h1>
      <div className="wrapper flex flex-wrap items-center justify-evenly">
        {womenData.map((product) => (
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

export default WomenCarousel