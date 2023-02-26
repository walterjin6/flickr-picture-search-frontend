import { Outlet } from 'react-router-dom'
import Header from './Header'
const Layout = () => {
  return (
    <div className=' max-w-screen-lg  flex justify-center'>
      <div className='mx-auto'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
export default Layout
