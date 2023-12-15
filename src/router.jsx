import {  Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ResumeReq } from './pages/ResumeReq'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'

const AppRouter = () => {
  return (
        <Routes>
            <Route index path = "/" element={<Home />} />
            <Route path = "/resume" element={<ResumeReq />} />
            <Route path = "/projects" element={<Projects />} />
            <Route path = "/contact" element={<Contact />} />
        </Routes>
  )
}

export default AppRouter;