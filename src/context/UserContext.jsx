import React, { createContext, useState } from 'react'
import { food_items } from '../food'

// Step 1: Create the context
export const dataContext = createContext(null)

// Step 2: Create a provider component
function UserContext({ children }) {

    // to manage search value
    let [input, setInput] = useState("")
    // filteredFood deafult valye is all data
    let [filterFood, setFilterFood] = useState(food_items)
    // for displaying and hiding cart
    let [showCart, setShowCart] = useState(false)


    let data = {
        input,
        setInput,
        filterFood,
        setFilterFood,
        showCart,
        setShowCart
    }

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    )
}

export default UserContext
