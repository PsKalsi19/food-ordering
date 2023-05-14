import { useContext } from "react"
import { MenuContext } from "../context/MenuProvider"
import MenuCard from "./MenuCard"
import { useNavigate } from "react-router-dom";
const Cart = () => {
    const { cartItems, discountApplied, applyDiscount } = useContext(MenuContext);
    const navigate = useNavigate()

    let { totalAmount, totalTime } = getTotalTimeAndAmount(cartItems);

    totalAmount = discountApplied ? totalAmount - 5 : totalAmount;

    return (
        <section>
            <h3 className="component-heading">Cart</h3>
            {cartItems && cartItems.length > 0 && <> <div className="details-container">
                {totalTime && <p><span>Total Delivery Time:</span> <strong>{totalTime} Mins </strong></p>}
                {totalAmount && <p><span> Total Amount:</span> <strong>${totalAmount}</strong> </p>}
            </div>
                <button disabled={discountApplied} onClick={() => applyDiscount(true)} className="btn btn-primary">{discountApplied ? 'Applied Discount' : 'Add Discount'}</button>
                <h3>Menu</h3>
                <div className="menu-cards">{cartItems && cartItems.length > 0 && cartItems.map(item => <MenuCard key={item.id} showActionButtons={false} menuItem={item} />)}</div></>}
            {cartItems.length===0 && <>
                <p>Please add items to the cart</p>
                <button className="btn btn-secondary" onClick={()=>navigate('/menu')} >Go to Menu</button>
            </>}
        </section>
    )
}

const getTotalTimeAndAmount = cartData => cartData.reduce((totalDetails, { delivery_time, price }) => ({ totalTime: totalDetails.totalTime + delivery_time, totalAmount: totalDetails.totalAmount + price }), { totalTime: 0, totalAmount: 0 })

export default Cart