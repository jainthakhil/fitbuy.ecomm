import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removeItem, addItem, removeSingleItem } from '../redux/features/cartSlice'
import deleteIcon from '../assets/images/deleteicon.png'
import { setExactProduct } from '../redux/features/exactProductSlice'

const CartCard = (product) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleClick = () =>{
        dispatch(setExactProduct(product))
        navigate(`/product/${product.id}`);
        console.log(product)
      }

    const handleRemoveItem = (e) => {
        e.preventDefault()
        dispatch(removeItem(product))
    }
    const handleIncreaseNumOfItem = (e) => {
        e.preventDefault()
        dispatch(addItem(product)); 
      }

    const handleDecreaseNumOfItem = (e) => {
        e.preventDefault()
        dispatch(removeItem(product))
        dispatch(removeSingleItem(product))
      }

      

    return (
        <div className="w-full h-64 flex items-center justify-between py-2 ">

            <div className="cartcard-body h-full w-full flex relative">

                <div className="img-detail h-full w-1/2 flex items-center ">
                    <div className="card-img h-full ">
                        <img src={product.imageUrl} alt="" className='h-full object-cover aspect-[2/3] object-top' onClick={handleClick}/>
                    </div>
                    <div className="card-detail h-full flex flex-grow flex-col items-start justify-center pl-6">
                        <h3 className='text-lg font-normal'>{product.description}</h3>
                        <p>Color: <span className='font-semibold'>{product.color}</span> </p>
                        <p>Size: <span className='font-semibold'> {product.size}</span></p>
                    </div>
                </div>

                <div className="price-quant-total h-full w-1/2 flex items-center justify-center">
                    <div className="price h-full w-1/3 flex flex-col items-start justify-center">
                        <h3 className='text-lg font-bold'>Rs. {product.price}</h3>
                    </div>
                    <div className="quantity h-full w-1/2 flex items-center font-normal text-lg ">
                        <button onClick={handleDecreaseNumOfItem} className='w-8 h-8 bg-[#f5f5f5] hover:bg-[#ced4da] disabled:cursor-not-allowed'
                        >-</button>
                        <input type="number" value={product.quantity} className='w-1/2 bg-inherit text-center text-[#fca311] h-8 bg-[#f5f5f5] mx-1' />
                        <button onClick={handleIncreaseNumOfItem} className='w-8 h-8 bg-[#f5f5f5] hover:bg-[#ced4da]'>+</button>
                    </div>
                    <div className="total h-full flex flex-grow items-center justify-end font-semibold">
                        <p>Rs. {product.price*product.quantity}</p>
                    </div>
                </div>
                <div className="cancel-btn absolute top-0 right-0">
                    <button onClick={handleRemoveItem}>
                        <img src={deleteIcon} alt="cancel" className='w-4' />

                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartCard