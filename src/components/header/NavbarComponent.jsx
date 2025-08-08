import logo from "../../../public/logo.png"
// react-router
import { Link } from "react-router";
// icons
import { FaShoppingCart, FaHeart  } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const NavbarComponent = () => {
    return (
        <div className="bg-darkBlue text-lightBlue">
            <div className="wrapper h-[100px] flex-centar-between">
                <div className="flex-centar-between gap-7">
                    <img src={logo} alt="logo" />
                    <div className="bg-lightBlue text-darkBlue rounded-3xl ">
                        <input type="text" className="px-6 py-2.5 placeholder:text-darkBlue focus:outline-0" placeholder="Search products" />
                        <button className="px-6 py-2.5 bg-orange rounded-3xl font-semibold cursor-pointer">Search</button>
                    </div>
                </div>
                <nav className="flex-centar-between gap-8">
                    <div className="flex-centar-between gap-1">< FaShoppingCart /> <Link>Cart</Link></div>
                    <div className="flex-centar-between gap-1">< FaHeart/> <Link>Favorite</Link></div>
                    <div className="flex-centar-between gap-1">< IoPersonSharp/> <Link>Profile</Link></div>
                </nav>
            </div>
        </div>
    )
}

export default NavbarComponent
