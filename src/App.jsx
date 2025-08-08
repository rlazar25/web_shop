import { Outlet } from 'react-router'
import HeaderComponent from './components/header/HeaderComponent'

const App = () => {
  return (
    <div className='bg-lightBlue h-screen'>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

export default App
