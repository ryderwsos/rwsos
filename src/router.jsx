import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ResumeReq } from './pages/ResumeReq'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route index path = "/" element={<Home />} />
            <Route path = "/resume" element={<ResumeReq />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter;