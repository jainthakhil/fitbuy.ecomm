import React, {useState} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { removeItem, decreaseItemsInCart } from '../redux/features/cartSlice'
import deleteIcon from '../assets/images/deleteicon.png'


const CartCard = (product) => {
    console.log(product)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch();

    const handleRemoveItem = ()=>{
        dispatch(removeItem({id:product.id}))
        dispatch(decreaseItemsInCart())

    }
    const handleIncreaseNumOfItem = ()=>{
        setCount(prevValue=> prevValue+1)

    }
    const handleDecreaseNumOfItem = ()=>{
        setCount(prevValue=> prevValue-1)

    }
  return (
    <div className="flex w-full h-52 flex items-center justify-between my-4 border-grey-600 rounded-xl p-4">

        <div className="card-img h-full w-auto">
            <div className='rounded-lg h-full overflow-hidden'>
                <img src={product.img} alt=""  className='h-full object-cover aspect-[2/3] object-top'/>
            </div>
        </div>

        <div className="card-detail h-full w-1/4 flex flex-col items-start justify-center">
            <h3 className='text-lg font-bold'>{product.name}</h3>
            <p>Color: <span className='font-semibold'>{product.color}</span> </p>
            <p>Size: <span className='font-semibold'> {product.size}</span></p>

        </div>
        <div className="quantity  h-full w-1/5 flex items-center justify-center">
            <button onClick={handleDecreaseNumOfItem}>-</button>
            <input type="number" value={count} className='w-1/5 bg-inherit text-center'/>
            <button onClick={handleIncreaseNumOfItem}>+</button>

        </div>
        <div className="price  h-full w-1/6 flex flex-col items-center justify-center">
            <h3 className='text-lg font-bold'>Rs. {product.price}</h3>

        </div>
        <div className="delete h-full w-1/12 flex flex-col items-end">
            <button onClick={handleRemoveItem}><img src={deleteIcon} alt="" className=' h-4' /></button>

        </div>
       
    </div>
  )
}

export default CartCard