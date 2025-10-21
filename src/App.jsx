import { useEffect } from 'react'
// react router dom
import { Outlet } from 'react-router'
// components
import HeaderComponent from './components/header/HeaderComponent'
import FooterComponent from './components/header/FooterComponent'
// axios
import axios from 'axios'
// redux and slices
import { useDispatch } from 'react-redux'
import { restoreUser } from './store/userSlice'
import { restoreFavoriteAction } from './store/favoriteSlice'
import { restoreCartAction } from './store/cartSlice'

// base URL
axios.defaults.baseURL = "https://dummyjson.com"

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.hasOwnProperty('user')) {
      let USER = JSON.parse(localStorage.getItem('user'));
      dispatch(restoreUser(USER))
    }

    if (localStorage.hasOwnProperty('favoriteItems')) {
      let FAVORITE = JSON.parse(localStorage.getItem('favoriteItems'))
      dispatch(restoreFavoriteAction(FAVORITE))
    }

    if (localStorage.hasOwnProperty('cart')) {
      let CART = JSON.parse(localStorage.getItem('cart'))
      dispatch(restoreCartAction(CART))
    }
  }, [])

  return (
    <div className='bg-lightBlue text-darkBlue'>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App
