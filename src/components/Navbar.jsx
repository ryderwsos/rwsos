import './Navbar.css'
import { ForgeIcon } from './ForgeIcon'
import { HomeIcon } from './HomeIcon'

//todo

export const Navbar = () => {
  return (
    <>
    <div>
      <nav className='navbar'>
        <ul className='navlist'>
          <li className='navitem'><span className='tooltiptext'>Home</span><a href='/'><HomeIcon/></a></li>
          <li className='navitem'><span className='tooltiptext'>Resume</span><a href='/resume'><ForgeIcon /></a></li>
        </ul>
      </nav>
    </div>
    </>
  )
}
