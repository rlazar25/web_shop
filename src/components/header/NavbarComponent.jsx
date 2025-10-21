import { useState } from "react";
// logo
import logo from "../../assets/logo.png"
// react-router
import { Link } from "react-router";
// icons
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
// redux
import { useDispatch, useSelector } from "react-redux";
import { handleSearchAction } from "../../store/productsSlice";
import { logoutUser } from "../../store/userSlice";


const NavbarComponent = () => {

    const { cartProducts } = useSelector(state => state.cartStore)
    const { favoriteCounter } = useSelector(state => state.favoriteStore)
    const { isLogged, user } = useSelector(state => state.userStore)
    const [userMenu, setUserMenu] = useState(false)

    const dispatch = useDispatch()

    // show user menu
    const handleUser = () => {
        setUserMenu(!userMenu)
    }

    // logout
    const handleLogout = () => {
        dispatch(logoutUser())
        setUserMenu(false)
    }

    return (
        <div className="bg-darkBlue text-lightBlue">
            <div className="wrapper py-6 flex flex-col justify-between gap-6 items-center lg:flex-row">
                {/* logo and search */}
                <div className="flex flex-col items-center lg:flex-row gap-10">
                    <Link to={'/'}>
                        <img src={logo} alt="logo" className="mx-auto" />
                    </Link>

                    {/* search */}
                    <input
                        type="text"
                        className="bg-lightBlue rounded-2xl px-6 py-2 text-darkBlue placeholder:text-darkBlue focus:outline-0 w-fit"
                        placeholder="Search products"
                        onChange={(e) => dispatch(handleSearchAction(e.target.value))}
                    />
                </div>

                {/* navigation */}
                <nav className="flex-centar-between gap-8 relative">
                    {/* cart */}
                    <div className="flex-centar-between gap-1"><Link className="flex-centar-between gap-1" to={'/cart'}>< FaShoppingCart size={20} /> Cart</Link><span className="bg-orange px-1 rounded-2xl text-darkBlue">{cartProducts.length}</span></div>
                    {/* favorite */}
                    <div className="flex-centar-between gap-1"><Link className="flex-centar-between gap-1" to={'/favorite'}>< FaHeart size={20} /> Favorite</Link><span className="bg-orange px-1 rounded-2xl text-darkBlue">{favoriteCounter}</span></div>
                    {/* profile */}
                    <div className="flex-centar-between gap-1">< IoPersonSharp size={20} />
                        {isLogged ?
                            <div className="">
                                <p onClick={handleUser} className="cursor-pointer">{user.firstName}</p> 
                                <div className={userMenu ? "bg-midBlue cardShadow absolute text-darkBlue flex flex-col items-center rounded-lg p-3 min-w-[280px] lg:min-w-[150px] left-0 right-0 ": "hidden"}>
                                    <Link to={'/userPage'} onClick={() => setUserMenu(false)} className="hover:scale-105">User Page</Link>
                                    <button className="hover:scale-105 text-red cursor-pointer" onClick={handleLogout} >Log Out</button>
                                </div>
                            </div>:
                            <> <Link to={'/login'}>Profile</Link></>
                        }
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavbarComponent
