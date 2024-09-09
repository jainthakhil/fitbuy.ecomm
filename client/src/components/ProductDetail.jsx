import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
const color = 'Blue'
const size = 'xl'


const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState([]);
    useEffect(() => {
        // Fetch product details from the backend
        axiosInstance.get(`/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product details:', error));
            console.log(product)
    }, [id]);


    return (
        <div className="w-full flex items-center justify-center">
            <div className='w-2/3 gap-6 md:gap-8 grid p-4 md:p-6 lg:p-8 border-none grid-cols-1 md:grid-cols-2  '>
                <div className="product-img col-span-1">
                    <img src={product.imageUrl} alt="" className='w-full max-w-full h-auto 
                object-cover object-top aspect-[4/5]' />

                </div>

                <div className="product-detail w-full col-span-1 uppercase text-sm py-4">
                    <div className="flex flex-col gap-2">
                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid justify-item-start"><p className='font-black'>{product.name}</p> </div>
                            <div className="grid justify-items-end"> <p className='text-xs'> Rs. {product.price}</p> </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid justify-items-start"> <p>color</p> </div>
                            <div className="grid justify-items-end"><p>{product.color}</p> </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="grid justify-items-start"><p> Size</p></div>
                            <div className="grid justify-items-end"><p>{product.size}</p> </div>
                        </div>

                        <div className="cart-form my-4">
                            <form action="">
                                <input type="hidden" name="" />
                                <button className='bg-brandColor text-white p-2 px-4 rounded-lg uppercase font-bold '>Add To Cart</button>
                            </form>
                        </div>

                        <div className="details-box">
                            <div className="flex flex-col gap-2">
                                <h2 className='font-black '>Details</h2>
                                <div className="details text-xs">
                                    <h3>{product.description}</h3>
                                    <p>{product.gender}</p>
                                    <p>100% Nylon</p>
                                    <p>Fully lined</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default ProductDetail