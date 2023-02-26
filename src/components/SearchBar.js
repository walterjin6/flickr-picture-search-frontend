import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTag } from '../features/pictures/picturesSlice'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const [inputWord, setTagWord] = useState('')
  const handleChange = (e) => setTagWord(e.target.value)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') search()
  }
  const search = () => {
    if (!isLoggedIn) {
      navigate('/login')
      if (inputWord) {
        dispatch(setTag(inputWord))
      }
    } else if (inputWord) {
      dispatch(setTag(inputWord))
    } else {
      alert('Please input search tag keyword')
    }
  }

  return (
    <div className='w-full'>
      <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300'>
        Search
      </label>
      <div className='relative'>
        <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className='block p-4 pl-10 w-full text-base font-bold text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder=' Type  search  tag  keyword  here ...'
          value={inputWord}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type='submit'
          className='text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={search}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
