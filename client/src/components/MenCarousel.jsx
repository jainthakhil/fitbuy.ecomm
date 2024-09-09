import React, {useState, useEffect} from 'react'
import ItemCard from './ItemCard'
import axiosInstance from '../axiosInstance'

const MenCarousel = () => {
    const [menData, setMenData] = useState([]);
    useEffect(() => {

        const fetchMenProducts = async () => {
          try {
            const response = await axiosInstance.get('/men');
            setMenData(response.data);
            console.log(response.data);
          } catch (err) {
            setError(err.message || 'An error occurred')
          }
        }
        fetchMenProducts();
    
      }, [])
    

  return (
    <div className=' w-full p-6'>
      <h1 className='uppercase font-bold text-2xl mt-8 mb-4 text-gray-600 text-center'>Men</h1>
      <div className="wrapper flex flex-wrap items-center justify-evenly">
        {menData.map((product) => (
          <ItemCard
            key={product._id}
            id={product._id}
            img={product.imageUrl}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}

      </div>
    </div>
  )
}

export default MenCarousel