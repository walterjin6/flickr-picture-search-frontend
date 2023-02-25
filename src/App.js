import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import PicturesGallery from './features/pictures/PicturesGallery'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<PicturesGallery />} />
      </Route>
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}

export default App
