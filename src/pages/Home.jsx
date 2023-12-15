import './Home.css'
import { GithubIcon } from '../assets/GithubIcon'
import { LinkedInIcon } from '../assets/LinkedInIcon'

export const Home = () => {

  return (
    <>
        <div className='main-info'>
            <h1 className='title' style={{opacity:0.9}}>Ryder Wang</h1>

            <div className='about-me'>
                <p className='section-header' style={{opacity:0.8}}>About me:</p> 
                <p className='section-content' style={{opacity:0.5}}>I'm currently a student attending the University of Waterloo on my 2A term studying Electrical Engineering. </p>
            </div>
            <div 
              className='icon'
            >
              <a href='https://github.com/ryderwsos' target="_blank"  rel="noopener noreferrer" className='socialItem'><GithubIcon /></a>
              <a href='https://www.linkedin.com/in/ryderwang' target="_blank"  rel="noopener noreferrer" className='socialItem'><LinkedInIcon /></a>
            </div>
        </div>
    </>
  )
}
