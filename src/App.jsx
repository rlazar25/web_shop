import { Outlet } from 'react-router'
import HeaderComponent from './components/header/HeaderComponent'

const App = () => {
  return (
    <div className='bg-background container mx-auto max-w-[1200px]'>
      <HeaderComponent />
      <Outlet />
    </div>
  )
}

export default App
