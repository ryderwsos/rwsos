import AppRouter from './router'
import './App.css'
import { Navbar } from './components/Navbar'

export const App = () => {

  return (
    <>
      <div>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='main-page'>
          <AppRouter />
        </div>
      </div>
    </>
  )
}

export default App
