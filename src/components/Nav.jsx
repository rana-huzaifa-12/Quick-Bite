import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Navbar() {

    let { input, setInput, filterFood, setFilterFood, showCart, setShowCart } = useContext(dataContext);

    useEffect(() => {
        let newList = food_items.filter((item) => item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
        setFilterFood(newList)
    }, [input])


    let items = useSelector(state => state.cart)


    return (
        <div className='w-full h-[100px] bg-red-500 flex justify-between items-center px-1 md:px-8'>

            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-[30px] h-[30px] text-red-500' />
            </div>

            <form className='w-[45%] h-[60px] md:w-[60%] bg-white flex items-center px-5 gap-2 md:gap-5 rounded-md shadow-lg'
                onSubmit={(e) => e.preventDefault()}>
                <FaSearch className=' text-red-500 w-[20px] h-[20px] ' />
                <input type="text" placeholder='Search Items...' className='w-[100%] outline-none text-[16px] md:text-[20px]'
                    onChange={(e) => setInput(e.target.value)} value={input} />
            </form>

            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative cursor-pointer'
                onClick={() => setShowCart(true)}>
                <span className='absolute top-0 right-2 text-red-500 font-bold text-[18px]'>{items.length}</span>
                <GiShoppingBag className='w-[30px] h-[30px] text-red-500' />
            </div>

        </div>
    )
}

export default Navbar
