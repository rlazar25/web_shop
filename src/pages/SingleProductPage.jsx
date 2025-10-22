import { useEffect, useState } from "react"
// router
import { useParams } from "react-router"
// services
import productsServices from "../services/productsServices"
// material UI
import { Rating } from "@mui/material";
// icons
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
// redux and slices
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "../store/cartSlice";
import { handleFavoriteAction } from "../store/favoriteSlice";
import { setProduct } from "../store/singleProductSlice";
// components
import AddCommentComponent from "../components/forms/AddCommentComponent";
import LoaderComponent from "../components/LoaderComponent";
// custome hook
import useTopLoad from "../hooks/useTopLoad";
// toastify
import { showToast } from "../utils/toastifyHelper";
import { toastifyMessages } from "../utils/toastifyMessages";

const SingleProductPage = () => {

  const { product } = useSelector(state => state.singleProductStore)
  const { isLogged } = useSelector(state => state.userStore)

  const [productLoad, setProductLoad] = useState(false);
  const [currentImage, setCurrentImage] = useState(0)
  const { id } = useParams();

  // favorite
  const { favoriteProducts } = useSelector(state => state.favoriteStore)
  const favoriteItem = favoriteProducts.find(prod => prod.id === product.id)

  // cart
  const { cartProducts } = useSelector(state => state.cartStore)
  const cartItem = cartProducts.find(prod => prod.id === product.id)

  const dispatch = useDispatch();

  useEffect(() => {
    productsServices.getSingleProductService(id)
      .then(res => {
        dispatch(setProduct(res.data))
        setProductLoad(true)
      })
      .catch(err => console.log(err))
  }, [])


  // add/remove favorite
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
  const handleCart = (product) => {
    if (cartItem && cartItem.quantity < product.stock) {
      dispatch(addToCartAction(product))
    } else if (!cartItem) {
      dispatch(addToCartAction(product))
    }
  }

  // availability
  const getAvailabilityText = () => {
    if (product.stock > 0) {
      return cartItem && cartItem.quantity >= product.stock
        ? <span className="text-red">Out of Stock</span>
        : <span className="text-green">In Stock</span>;
    }
    return <span className="text-red">Out of Stock</span>;
  }

  // load page at top
  useTopLoad()

  return (
    productLoad ? <div className="wrapper px-4 lg:px-0">
      <div className="flex flex-col items-center lg:flex-row py-6">

        {/* left side */}
        <div className="lg:w-[50%] flex flex-col items-center">
          <img src={product.images[currentImage]} alt={product.title} className="w-[400px]" />
          <div className="flex flex-wrap gap-3">
            {product.images.map((img, index) => {
              return <div key={index} className="w-[70px] border border-darkBlue rounded-lg cursor-pointer overflow-hidden" onClick={() => setCurrentImage(index)}><img src={img} className="hover:scale-110 duration-300" /></div>
            })}
          </div>
        </div>

        {/* right side */}
        <div className="lg:w-[50%]">
          {/* product info */}
          <div className="flex flex-col gap-2 border-b-[2px] py-6">
            <h1 className="text-4xl font-semibold">{product.title}</h1>
            <p className="text-2xl">${product.price}</p>
            <Rating value={product.rating} readOnly />
            <p>Availability: {getAvailabilityText()}
            </p>
            <p>Hurry up! only <span className="font-semibold">{cartItem ? product.stock - cartItem.quantity : product.stock}</span> product left in stock!</p>
            <p>{product.description}</p>

            {/* tags */}
            <div className="flex gap-2.5">
              {product.tags.map((tag, index) => {
                return <p className="text-[14px] italic" key={index}> #{tag}</p>
              })}
            </div>
          </div>

          {/* total price and buttons */}
          <div className="py-6 flex flex-col  border-b-[2px]">
            <p>Quantity: <span className="font-semibold">{cartItem ? cartItem.quantity : 0}</span></p>
            <p>Total Price: <span className="font-semibold">${cartItem ? (cartItem.productPriceTotal * cartItem.quantity).toFixed(2) : 0}</span></p>

            {/* interaction buttons */}
            <div className="flex gap-6 items-center mt-3 " >
              <button onClick={() => handleCart(product)} className="btn text-lightBlue hover:text-darkBlue flex  items-center gap-2">Add To Cart <FaShoppingCart /></button>
              <div className="cursor-pointer" onClick={() => handleFavorite(product)}>
                {favoriteItem ?
                  <FaHeart size={30} /> :
                  <FaRegHeart size={30} className="cursor-pointer" />
                }
              </div>
            </div>
          </div>

          {/* policy, warranty,shipping */}
          <div className="py-6 text-[14px]">
            <p>Shipping Information: {product.shippingInformation}</p>
            <p>Return Policy: {product.returnPolicy}</p>
            <p>Warranty: {product.warrantyInformation}</p>
          </div>
        </div>
      </div>

      {/* Review */}
      {/* dummy reviews */}
      <div>
        <h2 className="text-xl text-center font-semibold">Reviewers:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* commnet block */}
          {product.reviews.map((reviewer, index) => {
            return <div key={index} className="border cardShadow p-5 rounded-lg flex flex-col items-center my-3">
              {/* icon, name and rating  */}
              <div className="flex justify-between w-full">
                <div className="flex items-center gap-1">
                  <IoPersonSharp />
                  <p className="font-semibold">{reviewer.reviewerName}</p>
                </div>
                <Rating value={reviewer.rating} readOnly />
              </div>
              {/* reviewr commnet */}
              <div className="border-t w-full p-2 my-2">
                <p>{reviewer.comment}</p>
              </div>
            </div>
          })}
        </div>
      </div>
      {/* add review */}
      <div className="my-4">
        <h2 className="text-xl text-center font-semibold my-4">Add Review</h2>
        <AddCommentComponent />
      </div>
    </div> : <div className="flex justify-center my-20"> <LoaderComponent size={60} /></div>
  )
}

export default SingleProductPage
