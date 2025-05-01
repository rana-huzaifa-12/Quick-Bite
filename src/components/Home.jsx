import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Nav'
import Categories from '../category'
import Card from './Card'
import { food_items } from "../food.js"
import { dataContext } from '../context/UserContext.jsx'
import { ImCross } from "react-icons/im";
import CardCart from './CardCart.jsx'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import Footer from './Footer.jsx'




function Home() {



    let { filterFood, setFilterFood, input, showCart, setShowCart } = useContext(dataContext)

    // function to filter category onclick

    function filteredItems(category) {
        if (category === "All") {
            setFilterFood(food_items);
        } else {
            let newList = food_items.filter(
                (item) => item.food_category.toLowerCase() === category.toLowerCase()
            );
            setFilterFood(newList);
        }
    }

    let [deliveryFee, setdeliveryFee] = useState(0)

    let items = useSelector(state => state.cart)
    let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
    let taxes = subtotal * 0.5 / 100
    let grandTotal = Math.floor(subtotal + deliveryFee + taxes)

    // delivery fee management

    useEffect(() => {
        if (subtotal > 0) {
            setdeliveryFee(20);
        } else {
            setdeliveryFee(0);
        }
    }, [subtotal]);


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    return (
        <div className='w-full min-h-screen bg-slate-200'>
            {/* navbar component */}
            <Navbar />

            {/* text */}

            <div className='w-full flex justify-center py-5'>
                <TypeAnimation className='font-bold text-3xl md:text-5xl text-red-800 text-center '
                    sequence={[
                        'Welcome to Quick Bite !',
                        2000,  // Wait 2 seconds after the first string
                        'Best Food Delivery App !',
                        2000,
                        'Have a great day!',
                        2000,
                    ]}
                    speed={50} // Typing speed
                    repeat={Infinity} // Infinite loop
                />
            </div>

            {/* categories */}
            <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] py-6' data-aos="zoom-in" >

                {Categories.map((item) => {
                    return <div className='w-[140px] h-[150px]  bg-white flex flex-col items-center justify-center text-[20px] font-bold text-gray-600 rounded-lg shadow-lg hover:translate-y-1.5 hover:bg-red-200 cursor-pointer transition-all transition-duration-800' onClick={() => filteredItems(item.name)}>
                        <div>{item.image}</div>
                        <div>{item.name}</div>
                    </div>
                })}

            </div>
            {/* cards in hero*/}
            <div className='flex w-full flex-wrap justify-center gap-5 px-5 '  >
                {filterFood.length > 1 ?
                    filterFood.map((item) => {
                        return (
                            <div data-aos="fade-up" key={item.id}>
                                <Card
                                    name={item.food_name}
                                    image={item.food_image}
                                    price={item.price}
                                    id={item.id}
                                    type={item.food_type}
                                />
                            </div>
                        );
                    })
                    : <div className='text-2xl sm:text-3xl md:text-5xl p-8 text-center'>Sorry! No Results For This Search</div>}

            </div>

            {/* cart */}

            <div className={` w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-2xl p-6 transition-all duration-500 ease-in-out cursor-pointer overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`} >
                <header className='w-full flex justify-between items-center'>
                    <span className='text-red-500 text-[18px] font-bold'>Order Items</span>
                    <ImCross className='text-red-500 text-[18px] font-bold w-[30px] h-[20px] cursor-pointer hover:text-gray-400 ' onClick={() => setShowCart(false)} />
                </header>

                {/* inner content of cart */}

                {items.length > 0 ? <div>

                    <div className='w-full mt-9 flex flex-col gap-8 '>
                        {items.map((item) => (
                            <CardCart name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                        ))}
                    </div>


                    <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>

                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-red-600 font-bold'>Subtotal</span>
                            <span className='text-lg text-red-600 font-bold'>Rs {subtotal}/-</span>
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-red-600 font-bold'>Delivery Fee</span>
                            <span className='text-lg text-red-600 font-bold'>Rs {deliveryFee}/-</span>
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-red-600 font-bold'>Taxes</span>
                            <span className='text-lg text-red-600 font-bold'>Rs {taxes}/-</span>
                        </div>

                    </div>

                    <div>
                        <div className='w-full flex justify-between items-center p-4 md:p-8'>
                            <span className='text-2xl text-red-600 font-bold'>Grand Total</span>
                            <span className='text-2xl text-red-600 font-bold'>Rs {grandTotal}/-</span>
                        </div>

                        <button className='w-full rounded-lg p-3 bg-red-500 font-bold text-white hover:bg-red-200 hover:text-gray-900 transition-all transition-duration-500' onClick={() => toast.success("Order Placed Successfully!")}>Place Order</button>

                    </div>

                </div> : <div className='w-full text-center py-8 mt-5 text-white bg-red-700 font-bold text-3xl'>Empty Cart</div>}


                {/* <div>

                    <div className='w-full mt-9 flex flex-col gap-8 '>
                        {items.map((item) => (
                            <CardCart name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                        ))}
                    </div>


                    <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>

                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-red-600 font-bold'>Subtotal</span>
                            <span className='text-lg text-red-600 font-bold'>Rs {subtotal}/-</span>
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-red-600 font-bold'>Delivery Fee</span>
                            <span className='text-lg text-red-600 font-bold'>Rs {deliveryFee}/-</span>
                        </div>

                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg text-red-600 font-bold'>Taxes</span>
                            <span className='text-lg text-red-600 font-bold'>Rs {taxes}/-</span>
                        </div>

                    </div>

                    <div>
                        <div className='w-full flex justify-between items-center p-8'>
                            <span className='text-2xl text-red-600 font-bold'>Grand Total</span>
                            <span className='text-2xl text-red-600 font-bold'>Rs {grandTotal}/-</span>
                        </div>

                        <button className='w-full rounded-lg p-3 bg-red-500 font-bold text-white hover:bg-red-200 hover:text-gray-900 transition-all transition-duration-500'>Place Order</button>

                    </div>

                </div> */}

            </div>

            {/* footer */}

            <Footer />

        </div >
    )
}

export default Home
