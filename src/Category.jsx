import { MdOutlineBorderAll } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { TbSoupFilled } from "react-icons/tb";
import { PiBowlFoodBold } from "react-icons/pi";
import { MdDinnerDining } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";

const Categories = [
    {
        id: 1,
        name: "All",
        image: <MdOutlineBorderAll className='w-[50px] h-[50px] text-red-500' />
    },
    {
        id: 2,
        name: "Breakfast",
        image: <MdFreeBreakfast className='w-[50px] h-[50px] text-red-500' />
    },
    {
        id: 3,
        name: "Soup",
        image: <TbSoupFilled className='w-[50px] h-[50px] text-red-500' />
    },
    {
        id: 4,
        name: "Pasta",
        image: <PiBowlFoodBold className='w-[50px] h-[50px] text-red-500' />
    },
    {
        id: 5,
        name: "Main Course",
        image: <MdDinnerDining className='w-[50px] h-[50px] text-red-500' />
    },
    {
        id: 6,
        name: "Pizza",
        image: <FaPizzaSlice className='w-[50px] h-[50px] text-red-500' />
    },
    {
        id: 7,
        name: "Burger",
        image: <GiHamburger className='w-[50px] h-[50px] text-red-500' />
    },
]

export default Categories