// icons
import { FaHeart, FaRegHeart } from "react-icons/fa";


const ProductComponent = ({ product }) => {
    return (
        <div className="text-center flex flex-col justify-between border-darkBlue border-[2px] rounded-lg p-4 ">
            <FaRegHeart className="self-end cursor-pointer absolute" />
            <img className="w-[70%] mx-auto " src={product.thumbnail} alt={product.title} />
            <div>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <div className="flex justify-between font-semibold">
                    <button className="duration-200 mt-4 cursor-pointer border-[2px] border-darkBlue py-2 px-5 rounded-lg hover:bg-darkBlue hover:text-lightBlue ">View More</button>
                    <button className="duration-200 mt-4 cursor-pointer border-[2px] border-orange py-2 px-5 rounded-lg hover:bg-orange hover:text-lightBlue ">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent
