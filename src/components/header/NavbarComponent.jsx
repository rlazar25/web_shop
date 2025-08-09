import logo from "../../../public/logo.png"
// react-router
import { Link } from "react-router";
// icons
import { FaShoppingCart, FaHeart  } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const NavbarComponent = () => {
    return (
        <div className="bg-darkBlue text-lightBlue">
            <div className="wrapper py-6 flex flex-col justify-between gap-6 items-center lg:flex-row">
                {/* logo and search */}
                <div className="flex flex-col items-center lg:flex-row gap-10">
                    <img src={logo} alt="logo" className="w-[200px] mx-auto" />

                    {/* search */}
                    <div className="bg-lightBlue text-darkBlue rounded-2xl ">
                        <input type="text" className="px-6 py-2.5 placeholder:text-darkBlue focus:outline-0" placeholder="Search products" />
                        <button className="px-6 py-2.5 bg-orange rounded-r-2xl text-darkBlue font-semibold cursor-pointer">Search</button>
                    </div>
                </div>

                {/* navigation */}
                <nav className="flex-centar-between gap-8">
                    <div className="flex-centar-between gap-1"><Link className="flex-centar-between gap-1">< FaShoppingCart size={20} /> Cart</Link><span className="bg-orange px-1 rounded-2xl text-darkBlue">0</span></div>
                    <div className="flex-centar-between gap-1"><Link className="flex-centar-between gap-1">< FaHeart size={20}/> Favorite</Link><span className="bg-orange px-1 rounded-2xl text-darkBlue">0</span></div>
                    <div className="flex-centar-between gap-1">< IoPersonSharp size={20}/> <Link>Profile</Link></div>
                </nav>
            </div>
        </div>
    )
}

export default NavbarComponent
