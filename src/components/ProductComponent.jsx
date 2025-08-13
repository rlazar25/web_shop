import { Rating } from "@mui/material"
// icons
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router";


const ProductComponent = ({ product }) => {
    return (
        <div className="flex flex-col justify-between cardShadow rounded-lg p-4 ">
            <FaRegHeart className="self-end cursor-pointer absolute" size={20} />

            {/* product img */}
            <img className="w-[70%] mx-auto " src={product.thumbnail} alt={product.title} />

            {/* product info */}
            <div className="border-t-[2px] font-semibold">
                <h2 className="truncate" title={product.title}>{product.title}</h2>
                <div className="flex justify-between items-center">
                    <p>${product.price}</p>
                    <Rating value={product.rating} size="small" readOnly />
                </div>  

                {/* buttons */}
                <div className="flex justify-between mt-2 gap-3">
                    <Link to={`/singlePage/${product.id}`} className="duration-300 text-center w-full cursor-pointer border-[2px] border-darkBlue py-2 px-5 rounded-lg hover:bg-darkBlue hover:text-lightBlue ">View More</Link>
                    <div className="translate duration-300 cursor-pointer border-[2px] border-orange py-2 px-3 rounded-lg hover:bg-orange hover:text-lightBlue flex items-center justify-center">
                        <FaShoppingCart size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
