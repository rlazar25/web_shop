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
import { addToFavoriteAction } from "../store/favoriteSlice";

const SingleProductPage = () => {

  const [product, setProduct] = useState({});
  const [productLoad, setProductLoad] = useState(false);
  const [currentImage, setCurrentImage] = useState(0)
  const { id } = useParams();

  const [isFavorite, setIsFavorite] = useState(false)

  const dispatch = useDispatch();

  useEffect(() => {
    productsServices.getSingleProductService(id)
      .then(res => {
        setProduct(res.data)
        setProductLoad(true)
      })
      .catch(err => console.log(err))
  }, [])


  const handleFavorite = (product) => {
    dispatch(addToFavoriteAction(product))
    setIsFavorite(!isFavorite)
  }

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
            <p>Availability: {product.availabilityStatus === "In Stock" ?
              <span className="text-green font-semibold">{product.availabilityStatus}</span> :
              <span className="text-red font-semibold">{product.availabilityStatus}</span>}
            </p>
            <p>Hurry up! only <span className="font-semibold">{product.stock}</span> product left in stock!</p>
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
            <p>Quantity: { }</p>
            <p>Total Price: $ { }</p>
            {/* interaction buttons */}
            <div className="flex gap-6 items-center mt-3 " >
              <button onClick={() => dispatch(addToCartAction(product))} className="btn text-lightBlue hover:text-darkBlue flex  items-center gap-2">Add To Cart <FaShoppingCart /></button>
              <div className="cursor-pointer" onClick={() => handleFavorite(product)}>
                {isFavorite ?
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
      {/* comments */}
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
    </div> : <>Loading...</>
  )
}

export default SingleProductPage
