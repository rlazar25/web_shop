import { useEffect, useState } from "react";
// redux
import { useDispatch, useSelector } from "react-redux"
import { saveAllProductsAction } from "../store/productsSlice";
// componenets
import ProductComponent from "./ProductComponent";
import productsServices from "../services/productsServices";

const AllProductsComponents = () => {

  const { allProducts, productsLoad } = useSelector(state => state.productsStore);
  const [loadMore, setLoadMore] = useState(20);
  const dispatch = useDispatch();

  useEffect(() => {
    productsServices.getAllProductsService(loadMore)
    .then(res => dispatch(saveAllProductsAction(res.data.products)))
    .catch(err => console.log(err))
  }, [loadMore])

  return (
    <div>
      <div className=" wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-0 py-6 gap-4">
        {productsLoad ? allProducts.map(product => {
          return <ProductComponent key={product.id} product={product} />
        }) : <>Loading...</>}
      </div>
      <div className="flex justify-center">
        <button onClick={() => setLoadMore(loadMore + 20)} className="btn text-lightBlue hover:text-darkBlue px-[30px]">Load More</button>
      </div>
    </div>
  )
}

export default AllProductsComponents;
