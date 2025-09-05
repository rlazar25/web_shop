import { useSelector } from "react-redux"
import { Link } from "react-router"
import ProductComponent from "../components/ProductComponent"

const FavoritePage = () => {

    const { favoriteProducts } = useSelector(state => state.favoriteStore)

    return (
        <div className="min-h-[230px]">
            {/* map products */}
            {favoriteProducts.length > 0 ?
            <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-0 py-6 gap-4" >
                {favoriteProducts.map(product => {
                    return <ProductComponent key={product.id} product={product} />
                })}</div> :
                // if favorite is empty
                <div className=" flex flex-col justify-center items-center py-[50px]">
                    <h2 className="text-4xl text-red">Still don't have any favorite product</h2>
                    <p className="mb-4 mt-2">Please add a product</p>
                    <Link to="/" className="text-darkBlue underline text-lg ">Continue shopping</Link>
                </div>}
        </div>
    )
}

export default FavoritePage
