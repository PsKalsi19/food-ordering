/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const MenuContext = createContext()
const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState();
    const [cartItems,setCart]=useState([]);
    const addToCartHandler=(item)=>{
        setMenu(menu.map(ele=>ele.id===Number(item.id)?{...ele,is_added:true}:ele))
        setCart([...cartItems,item])
    }
    return (
        <MenuContext.Provider value={{menu,setMenu,cartItems,setCart,addToCartHandler}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider