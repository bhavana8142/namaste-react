import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
                </ul>




            </div>

        </div>
    )
};

export default Header;