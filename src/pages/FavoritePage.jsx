// redux
import { useSelector } from "react-redux"
// react router dom
import { Link } from "react-router"
// components
import ProductComponent from "../components/ProductComponent"

const FavoritePage = () => {

    const { favoriteProducts } = useSelector(state => state.favoriteStore)
    const { isLogged } = useSelector(state => state.userStore)

    return (
        <div className="py-[40px]">
            {/* map products */}
            {
                isLogged ?
                    (favoriteProducts.length > 0 ?
                        <div className="wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-0 py-6 gap-4" >
                            {favoriteProducts.map(product => {
                                return <ProductComponent key={product.id} product={product} />
                            })}</div> :
                        // if favorite is empty
                        <div className=" flex flex-col justify-center items-center text-center py-[50px]">
                            <h2 className="text-4xl text-red">Still don't have any favorite product</h2>
                            <p className="mb-4">Please add a product</p>
                            <Link to="/" className="text-darkBlue underline text-lg ">Continue shopping</Link>
                        </div>) :
                    <div className="wrapper flex flex-col justify-center items-center text-center py-[50px]">
                        <h2 className="text-4xl text-red">You must log in to view your favorite products</h2>
                        <p className="mb-4">Please log in first</p>
                        <Link to="/login" className="text-darkBlue underline text-lg">Go to Login</Link>
                    </div>
            }
        </div>
    )
}

export default FavoritePage
