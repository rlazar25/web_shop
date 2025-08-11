import { useSelector } from "react-redux"
import ProductComponent from "./ProductComponent";

const AllProductsComponents = () => {

    const {allProducts, productsLoad} = useSelector(state => state.productsStore);

  return (
    <div className=" wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
      {productsLoad ? allProducts.map(product => {
        return <ProductComponent key={product.id} product={product} />
      }): <>Loading...</>}
    </div>
  )
}

export default AllProductsComponents;
