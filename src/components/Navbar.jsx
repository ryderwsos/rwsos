import './Navbar.css'
import { ForgeIcon } from '../assets/ForgeIcon'
import { HomeIcon } from '../assets/HomeIcon'
import { CodeIcon } from '../assets/CodeIcon'
import { EmailIcon } from '../assets/EmailIcon'
import { useLocation } from 'react-router-dom'

export const Navbar = () => {

  const location = useLocation().pathname

  const isActivePath = (e) => {
    if (e === location){
      return {opacity: 1, width: '2.5rem', height: '2.5rem'};
    }else{
      return
    }
  }

  return (
    <>
    <div>
      <nav className='navbar'>
        <ul className='navlist'>
          <li className='navitem' style={isActivePath('/')}>
            <span className='tooltiptext'>Home</span>
            <a href='/'>
              <HomeIcon/>
            </a>
          </li>

          <li className='navitem' style={isActivePath('/projects')}>
            <span className='tooltiptext'>Projects</span>
            <a href='/projects'>
              <CodeIcon />
            </a>
          </li>

          <li className='navitem' style={isActivePath('/resume')}>
            <span className='tooltiptext'>Resume</span>
            <a href='/resume'>
              <ForgeIcon />
            </a>
          </li>

          <li className='navitem' style={isActivePath('/contact')}>
            <span className='tooltiptext'>Contact</span>
            <a href='/contact'>
              <EmailIcon />
            </a>
          </li>
          
        </ul>
      </nav>
    </div>
    </>
  )
}
