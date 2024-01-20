import {HelloWorld} from '@src/features/HelloWorld'
import {Route, Routes} from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HelloWorld />} />
    </Routes>
  )
}
