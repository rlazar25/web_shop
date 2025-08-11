import { Outlet } from 'react-router'
// components
import HeaderComponent from './components/header/HeaderComponent'
// axios
import axios from 'axios'

// base URL
axios.defaults.baseURL = "https://dummyjson.com"

const App = () => {
  return (
    <div className='bg-lightBlue text-darkBlue'>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

export default App
