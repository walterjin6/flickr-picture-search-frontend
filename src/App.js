import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import PicturesGallery from './features/pictures/PicturesGallery'
import Login from './features/auth/Login'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PicturesGallery />} />
        <Route path='login' element={<Login />} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App
