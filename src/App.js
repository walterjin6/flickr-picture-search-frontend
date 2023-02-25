import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import PicturesGallery from './features/pictures/PicturesGallery'
import Login from './features/auth/Login'
import PersistLogin from './features/auth/PersistLogin'
import useTitle from './hooks/useTitle'

function App() {
  useTitle('Flickr Picture Search')
  
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route element={<PersistLogin />}>
          <Route index element={<PicturesGallery />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App
