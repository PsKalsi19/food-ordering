import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { MenuContext } from "../context/MenuProvider"
const Navbar=()=>{
    // eslint-disable-next-line no-unused-vars
    const {cartItems,_}=useContext(MenuContext)
    return(
        <nav>
        <NavLink className="nav-links" to="/">Home</NavLink>
        <NavLink className="nav-links" to="menu">Menu</NavLink>
        <NavLink className="nav-links" to="cart">Cart ({cartItems.length})</NavLink>
      </nav>
    )
}
export default Navbar