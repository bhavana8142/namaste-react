import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"




const Cart = () => {


    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)


    const handelClear = () => {
        dispatch(clearCart())

    }


    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">cart</h1>
            <button className="p-4 m-2 runded-bg" onClick={handelClear}> cart</button>
            {cartItems.length === 0 && <h1>cart is empty please add items </h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart