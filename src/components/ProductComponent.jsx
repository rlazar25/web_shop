// icons
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";


const ProductComponent = ({ product }) => {
    return (
        <div className="flex flex-col justify-between border-darkBlue border-[2px] rounded-lg p-4 ">
            <FaRegHeart className="self-end cursor-pointer absolute" size={20} />

            {/* product img */}
            <img className="w-[70%] mx-auto " src={product.thumbnail} alt={product.title} />

            {/* product info */}
            <div className="border-t-[2px] font-semibold">
                <h2 className="truncate" title={product.title}>{product.title}</h2>
                <p>${product.price}</p>

                {/* buttons */}
                <div className="flex justify-between mt-2 gap-3">
                    <button className="duration-300 w-full cursor-pointer border-[2px] border-darkBlue py-2 px-5 rounded-lg hover:bg-darkBlue hover:text-lightBlue ">View More</button>
                    <div className="translate duration-300 cursor-pointer border-[2px] border-orange py-2 px-3 rounded-lg hover:bg-orange hover:text-lightBlue flex items-center justify-center">
                        <FaShoppingCart size={20} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
