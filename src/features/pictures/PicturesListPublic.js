import useTitle from '../../hooks/useTitle'
import { useGetPicturesPublicQuery } from './picturesApiSlice'
import PulseLoader from 'react-spinners/PulseLoader'
import Picture from './Picture'

const PicturesListPublic = () => {
  const {
    data: pictures,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPicturesPublicQuery('PicturesListPublic', {
    pollingInterval: 7000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })

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

  if (isSuccess) content = <Picture pictures={pictures} description={'random pictures'} />

  return content
}
export default PicturesListPublic
