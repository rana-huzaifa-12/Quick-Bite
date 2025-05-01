import React from 'react'
import Img1 from "../assets/image1.avif"
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';

function Card({ name, image, id, price, type }) {

    let dispatch = useDispatch()

    return (
        <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:translate-y-1.5  hover:border-2 cursor-pointer border-red-400 transition-all '>
            <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
                <img src={image} alt="" className='object-cover' />
            </div>
            <div className='text-2xl font-semibold'>
                {name}
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-red-500'>RS {price}/-</div>
                <div className='flex justify-center items-center gap-2 text-red-500 text-lg font-bold'>{type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />} <span>{type}</span></div>
            </div>

            <button className='w-full rounded-lg p-3 bg-red-500 font-bold text-white hover:bg-red-300 hover:text-gray-700 transition-all transition-duration- transition-ease-in-out' onClick={() => { dispatch(AddItem({ id: id, name: name, price: price, image: image, qty: 1 })); toast.success("Added to cart successfully") }}>ADD TO CART</button>
        </div >
    )
}

export default Card
