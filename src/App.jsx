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

// base URL
axios.defaults.baseURL = "https://dummyjson.com"

const App = () => {

  const dispatch = useDispatch()
  
  useEffect(() => {
    if (localStorage.hasOwnProperty('user')) {
      let USER = JSON.parse(localStorage.getItem('user'));
      dispatch(restoreUser(USER))
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
