// material UI
import { Rating } from "@mui/material"
// icons
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
// router
import { Link } from "react-router";
// redux and slices
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../store/cartSlice";
import { handleFavoriteAction } from "../store/favoriteSlice";
// toastify
import { showToast } from "../utils/toastifyHelper";
import { toastifyMessages } from "../utils/toastifyMessages";

const ProductComponent = ({ product }) => {
    const dispatch = useDispatch();

    const { isLogged } = useSelector(state => state.userStore)

    // add/remove favorite
    const { favoriteProducts } = useSelector(state => state.favoriteStore)
    const favoriteItem = favoriteProducts.find(prod => prod.id === product.id)

    const handleFavorite = (product) => {
        if (isLogged) {
            dispatch(handleFavoriteAction(product));
            if (favoriteItem) {
                showToast.error(toastifyMessages.favorites.removed);
            } else {
                showToast.success(toastifyMessages.favorites.added);
            }
        } else {
            showToast.error(toastifyMessages.favorites.log);
        }
    }

    // add to cart
    const { cartProducts } = useSelector(state => state.cartStore)
    const cartItem = cartProducts.find(prod => prod.id === product.id)

    const handleCart = (product) => {
        if (cartItem && cartItem.quantity < product.stock) {
            dispatch(addToCartAction(product))
        } else if (!cartItem) {
            dispatch(addToCartAction(product))
        }
    }

    return (
        <div className="flex flex-col justify-between cardShadow rounded-lg p-4 ">
            {/* favorite button */}
            <div className="self-end cursor-pointer absolute" onClick={() => handleFavorite(product)}>
                {favoriteItem ?
                    <FaHeart size={25} /> :
                    <FaRegHeart size={25} />
                }
            </div>

            {/* product img */}
            <Link to={`/singleProduct/${product.id}`} >
                <img className="w-[70%] mx-auto " src={product.thumbnail} alt={product.title} />
            </Link>

            {/* product info */}
            <div className="border-t-[2px] font-semibold">
                <Link to={`/singleProduct/${product.id}`}>
                    <h2 className="truncate" title={product.title}>{product.title}</h2>
                </Link>
                <div className="flex justify-between items-center">
                    <p>${product.price}</p>
                    <Rating value={product.rating} size="small" readOnly />
                </div>

                {/* buttons */}
                <div className="flex justify-between mt-2 gap-3">
                    <Link to={`/singleProduct/${product.id}`} className="duration-300 text-center w-full cursor-pointer border-[2px] border-darkBlue py-2 px-5 rounded-lg hover:bg-darkBlue hover:text-lightBlue ">View More</Link>
                    <div className="translate duration-300 cursor-pointer border-[2px] border-orange py-2 px-3 rounded-lg hover:bg-orange hover:text-lightBlue flex items-center justify-center">
                        <FaShoppingCart onClick={() => handleCart(product)} size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
