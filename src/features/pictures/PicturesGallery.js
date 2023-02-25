import useTitle from '../../hooks/useTitle'
import { useSelector } from 'react-redux'
import PicturesListPrivate from './PicturesListPrivate'
import PicturesListPublic from './PicturesListPublic'

const PicturesGallery = () => {
  useTitle('Search Pictures')
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  return isLoggedIn ? <PicturesListPrivate /> : <PicturesListPublic />
}
export default PicturesGallery
