import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState('login')
    const onlineststus = useOnlineStatus()
    const { loggedInUser } = useContext(UserContext)
    console.log(loggedInUser)
    // subscriong to the store by usig  selector
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    return (
        <div className="flex justify-between bg-pink-300 shadow-xl sm:bg-amber-300 xl:bg-gray-500">
            <div className="w-30">
                <img src={LOGO_URL} className="logo" />

            </div>
            <div className="flex">
                <ul className="flex items-center p-2 m-2">
                    <li className="p-2 m-2">OnlineStatus : {onlineststus ? '🟢' : '🔴'}</li>
                    <li className="p-2 m-2"><Link to='/'>Home</Link></li>
                    <li className="p-2 m-2"><Link to='/about'>About</Link></li>
                    <li className="p-2 m-2"><Link to='/contact'>Contact</Link></li>
                    <li className="p-4 m-2 "><Link to='/grocery'>Grocery</Link></li>
                    <li className="p-4 m-2 "><Link to='/cart'>Cart-({cartItems.length}items)</Link></li>
                    <button className="login-btn" onClick={() => {
                        return btnNameReact === 'login' ? setbtnNameReact('Logout') : setbtnNameReact('login')

                    }}>{btnNameReact}</button>
                    <li className="p-2 m-2"><Link to='/contact'>{loggedInUser}</Link></li>

                </ul>





            </div>


        </div>
    )
};

export default Header;