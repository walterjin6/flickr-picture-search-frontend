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

  if (isSuccess) content = <Picture pictures={pictures} description={tag} />

  return content
}
export default PicturesListPrivate