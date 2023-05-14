import { useContext } from "react"
import { MenuContext } from "../context/MenuProvider"
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const MenuCard = ({ menuItem,showActionButtons }) => {
    const { addToCartHandler } = useContext(MenuContext);
    const navigate = useNavigate()
    const { name, description, price, image, delivery_time, is_spicy, is_vegetarian, is_added } = menuItem
    return (
        <div className="card">
            <header className="img-header"> <img height="250px" width='272px' src={image} alt={name} /> </header>
            <span className="dish-name">{name}</span>
            <p><strong>Description:</strong> {description}</p>
            <div className="icons-container">
                {is_vegetarian && <span className="icons veg">&#128994;</span>}
                {!is_vegetarian && <span className="icons nonveg">&#128308;</span>}
                {is_spicy && <span className="icons">&#127798;</span>}
            </div>
            <footer>
                <p>${price}</p>
                <p>Delivery Time: {delivery_time} mins</p>
                {showActionButtons && <div className="btn-container"><button type="button" onClick={is_added ? () => navigate('/cart') : () => addToCartHandler(menuItem)} className="btn btn-primary">{is_added ? 'Go to Cart' : 'Add to Cart'}</button></div>}
            </footer>
        </div>
    )
}

export default MenuCard