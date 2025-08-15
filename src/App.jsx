import { Outlet } from 'react-router'
// components
import HeaderComponent from './components/header/HeaderComponent'
// axios
import axios from 'axios'
import FooterComponent from './components/header/FooterComponent'

// base URL
axios.defaults.baseURL = "https://dummyjson.com"

const App = () => {
  return (
    <div className='bg-lightBlue text-darkBlue'>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  )
}

export default App
