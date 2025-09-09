import { useEffect } from "react";
// redux
import { useDispatch, useSelector } from "react-redux"
import { loadMoreAction, saveAllProductsAction } from "../store/productsSlice";
// componenets
import ProductComponent from "./ProductComponent";
// services
import productsServices from "../services/productsServices";
import categoriesServices from "../services/categoriesServices";

const AllProductsComponents = () => {

  const { allProducts, productsLoad, loadMore } = useSelector(state => state.productsStore);
  const { currentCategory } = useSelector(state => state.categoriesStore)
  const dispatch = useDispatch();

  // load and category select 
  useEffect(() => {
    if (currentCategory) {
      categoriesServices.getCategoryService(currentCategory)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    } else {
      productsServices.getAllProductsService(loadMore)
        .then(res => dispatch(saveAllProductsAction(res.data.products)))
        .catch(err => console.log(err))
    }
  }, [loadMore, currentCategory])

  return (
    <div>
      {/* products */}
      <div className=" wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 lg:px-0 py-6 gap-4">
        {productsLoad ? allProducts.map(product => {
          return <ProductComponent key={product.id} product={product} />
        }) : <>Loading...</>}
      </div>
      {/* load more products button */}
      {!currentCategory && <div className="flex justify-center">
        <button onClick={() => dispatch(loadMoreAction())} className="btn text-lightBlue hover:text-darkBlue px-[30px]">Load More</button>
      </div>
      }
    </div>
  )
}

export default AllProductsComponents;
