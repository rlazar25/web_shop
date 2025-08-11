import { useEffect } from "react"
// components
import CategoriesComponent from "../components/header/CategoriesComponent"
import productsServices from "../services/productsServices"
import AllProductsComponents from "../components/AllProductsComponent"
// redux
import { useDispatch } from "react-redux"
import { saveAllProductsAction } from "../store/productsSlice"

const HomePage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    productsServices.getAllProductsService()
      .then(res => dispatch(saveAllProductsAction(res.data.products)))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <CategoriesComponent />
      <AllProductsComponents />
    </div>
  )
}

export default HomePage
