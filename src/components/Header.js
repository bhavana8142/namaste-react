import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [btnNameReact, setbtnNameReact] = useState('login')

    return (
        <div className="header">
            <div className="logo-con">
                <img src={LOGO_URL} className="logo" />

            </div>
            <div className="nav-items">
                <ul className="list-items">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        return btnNameReact === 'login' ? setbtnNameReact('Logout') : setbtnNameReact('login')

                    }}>{btnNameReact}</button>

                </ul>





            </div>


        </div>
    )
};

export default Header;