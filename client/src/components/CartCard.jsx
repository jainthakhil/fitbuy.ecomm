import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, decreaseItemsInCart, increaseItemsInCart, addItem, increaseTotalPrice, decreaseTotalPrice } from '../redux/features/cartSlice'
import deleteIcon from '../assets/images/deleteicon.png'


const CartCard = (product) => {
    const [count, setCount] = useState(1)
    const [totalPriceOfProduct, setTotalPriceOfProduct] = useState(product.price)
    let isDisabled = false
    if (count <= 1) {
        isDisabled = true
    }
    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart.items)

    const handleRemoveItem = (e) => {
        e.preventDefault()
        dispatch(removeItem({ id: product.id }))
        setTotalPriceOfProduct(prev=> prev-product.price*count)
        dispatch(decreaseItemsInCart())
    }
    const handleIncreaseNumOfItem = (e) => {
        e.preventDefault()
        console.log("added from cartcard", product)
        setCount(prevValue => prevValue + 1)
        console.log(cart)
        // setTotalPriceOfProduct(prev=> prev+product.price*count)
        dispatch(increaseTotalPrice({price:product.price}))
        const result = dispatch(addItem({ name: product.name, id: product.id, price: product.price, imageUrl: product.imageUrl, description: product.description, size: product.size, color: product.color}));
        console.log(result)
    }

    const handleDecreaseNumOfItem = (e) => {
        e.preventDefault()
        setCount(prevValue => prevValue - 1)
        console.log(cart)
        dispatch(increaseTotalPrice({price:product.price}))
        dispatch(removeItem({ id: product.id }))
        console.log("remove from cartcard")

    }
    const handleChange = (e)=>{
        e.preventDefault()
        setCount(e.target.value)
    }
    return (
        <div className="w-full h-64 flex items-center justify-between py-2 ">

            <div className="cartcard-body h-full w-full flex relative">

                <div className="img-detail h-full w-1/2 flex items-center ">
                    <div className="card-img h-full ">
                        <img src={product.img} alt="" className='h-full object-cover aspect-[2/3] object-top' />
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
                            disabled={isDisabled}>-</button>
                        <input type="number" value={count} onChange={handleChange} className='w-1/2 bg-inherit text-center text-[#fca311] h-8 bg-[#f5f5f5] mx-1' />
                        <button onClick={handleIncreaseNumOfItem} className='w-8 h-8 bg-[#f5f5f5] hover:bg-[#ced4da]'>+</button>
                    </div>
                    <div className="total h-full flex flex-grow items-center justify-end font-semibold">
                        <p>Rs. {product.price*count}</p>
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