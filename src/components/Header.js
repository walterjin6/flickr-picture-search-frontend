import useAuth from '../hooks/useAuth'
import SearchBar from './SearchBar'
import { FaUser } from 'react-icons/fa'

const Header = () => {
  const { username } = useAuth()

  const content = (
    <header className='flex justify-between items-center text-center  gap-4 px-4 py-2 h-20'>
      <svg
        className='w-1/12 h-full item-center text-center '
        xmlns='http://www.w3.org/2000/svg'
        height='800'
        width='1200'
        version='1.0'
        overflow='visible'
        viewBox='-84.73395 -42.771 734.3609 256.626'
      >
        <path
          d='M22.622 81.122H0V53.269h23.262V46.2C23.262 11.937 38.84 0 69.572 0c8.323 0 14.725 1.326 19.632 2.212L86.858 29.62c-3.2-1.105-6.402-1.77-12.164-1.77-9.816 0-13.658 7.074-13.658 18.349v7.072h27.316v27.852H61.036v87.307H22.622zM108.41 2.653h38.413v165.775H108.41zm71.278 2.652h38.414v29.177h-38.414zm0 47.965h38.414v115.157h-38.414zm153.869 32.933c-7.043-4.418-14.085-6.409-23.262-6.409-16.646 0-29.45 11.936-29.45 31.83 0 18.347 14.939 30.28 31.584 30.28 8.751 0 17.502-1.987 23.903-5.524l.853 29.618c-9.604 3.318-21.127 5.086-31.37 5.086-36.709 0-64.664-22.104-64.664-60.122 0-38.24 27.955-60.342 64.663-60.342 11.525 0 21.767 1.99 30.518 6.41zm58.048 15.475h.428l32.01-48.409h42.041l-38.626 52.827 41.828 62.332h-46.524l-30.73-57.025h-.427v57.025h-38.412V2.653h38.412z'
          fill='#0063db'
        />
        <path
          d='M562.97 85.098c-4.268-1.324-8.537-1.324-13.017-1.324-17.925 0-27.957 13.481-27.957 36.028v48.626h-38.412V53.27h34.997v21.22h.428c6.614-14.59 16.218-23.872 32.865-23.872 4.478 0 9.174.663 13.019 1.325z'
          fill='#ff0084'
        />
      </svg>
      <SearchBar />
      <div className='flex gap-1 text-xl text-gray-900 justify-center items-center '>
        <FaUser />
        <span className=''>{username}</span>
      </div>
    </header>
  )
  return content
}
export default Header
