// components
import CategoriesComponent from "../components/header/CategoriesComponent"
import AllProductsComponents from "../components/AllProductsComponent"
// custome hook
import useTopLoad from "../hooks/useTopLoad"

const HomePage = () => {
  // load page at top
  useTopLoad()

  return (
    <div>
      <CategoriesComponent />
      <AllProductsComponents />
    </div>
  )
}

export default HomePage
