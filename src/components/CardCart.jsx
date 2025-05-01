import React from 'react'
import img1 from "../assets/image1.avif"
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

function CardCart({ name, id, price, image, qty }) {


    let dispatch = useDispatch()

    return (
        <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
            <div className='w-[60%] h-full flex gap-5'>
                <div className='w-[60%] h-full overflow-hidden rounded-xl'>
                    <img src={image} alt="" className='object-cover' />
                </div>
                <div className='w-[40%] h-full flex flex-col gap-3'>
                    <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                    <div className='w-[110px] h-[50px] bg-slate-500 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-red-500 text-xl'>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-red-500 hover:text-gray-400 hover:bg-red-200' onClick={() => {
                            if (qty > 1) dispatch(DecrementQty(id));
                        }}
                            disabled={qty === 1}>-</button>
                        <span className='w-[40%] h-full bg-slate-200 hover:bg-slate-300 flex justify-center items-center text-red-500'>{qty}</span>
                        <button className='w-[30%] h-full bg-white flex justify-center items-center text-red-500 hover:text-gray-400 hover:bg-red-200' onClick={() => dispatch(IncrementQty(id))}>+</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-start items-end gap-6'>
                <span className='text-xl text-red-500 font-semibold'>RS {price}/-</span>
                <FaRegTrashAlt className='w-[30px] h-[30px] text-red-800 hover:text-red-400' onClick={() => dispatch(RemoveItem(id))} />
            </div>
        </div>
    )
}

export default CardCart
