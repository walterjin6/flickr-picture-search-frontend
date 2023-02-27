import useTitle from '../../hooks/useTitle'
import { useGetPicturesPrivateQuery } from './picturesApiSlice'
import { useSelector } from 'react-redux'
import PulseLoader from 'react-spinners/PulseLoader'
import Picture from './Picture'

const PicturesListPrivate = () => {
  const tag = useSelector((state) => state.pictures.tag)
  const {
    data: pictures,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetPicturesPrivateQuery(tag)

  let content
  useTitle('Search Pictures')

  if (isLoading) {
    content = (
      <div className='w-full h-screen flex justify-center items-center '>
        <PulseLoader color={'#808080'} size={100} />
      </div>
    )
  }

  if (isError) {
    content = (
      <div className='w-full h-screen flex justify-center items-center '>
        <p className='errmsg'>{error?.data?.message}</p>
      </div>
    )
  }

    if (isSuccess)
      content = (
        <>
          <Picture pictures={pictures} description={tag} />
          <button
            type='submit'
            className='fixed  bottom-0  left-1/2 transform -translate-x-1/2 -translate-y-1/2  z-50 text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={() => refetch()}
          >
            Show more pictures ....
          </button>
        </>
      )

  return content
}
export default PicturesListPrivate
