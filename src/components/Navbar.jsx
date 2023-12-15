import './Navbar.css'
import { ForgeIcon } from '../assets/ForgeIcon'
import { HomeIcon } from '../assets/HomeIcon'
import { CodeIcon } from '../assets/CodeIcon'
import { EmailIcon } from '../assets/EmailIcon'
import { useParams } from 'react-router-dom'

export const Navbar = () => {

  console.log(useParams())
  return (
    <>
    <div>
      <nav className='navbar'>
        <ul className='navlist'>
          <li className='navitem'>
            <span className='tooltiptext'>Home</span>
            <a href='/'>
              <HomeIcon/>
            </a>
          </li>

          <li className='navitem'>
            <span className='tooltiptext'>Projects</span>
            <a href='/projects'>
              <CodeIcon />
            </a>
          </li>

          <li className='navitem'>
            <span className='tooltiptext'>Resume</span>
            <a href='/resume'>
              <ForgeIcon />
            </a>
          </li>

          <li className='navitem'>
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
