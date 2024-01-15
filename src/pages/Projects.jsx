import { Modal } from "@mui/material"
import { Folder } from "../components/Folder"
import './Projects.css'
import { useState } from "react"
import Box from '@mui/material/Box';

const projects = [
  {
    name: 'Spotify Duplicated Song Remover',
    url: 'https://github.com/ryderwsos/spotify_dup',
    stack: 'Python, Tkinter, Spotify API',
    description: 'Utlising Spotify API to return given spotify playlist, along with thoughtout algorithms to return all duplicated song in a playlist.',
    id:'0'
  },
  {
    name: 'Blinker Puzzle',
    url: 'https://github.com/ryderwsos/Blink-Detector-Puzzel',
    stack: 'C, Python, OpenCV, STM32, NVIDIA Jetson',
    description: 'Combining powerful microcontrollers of STM32 and NVIDIA Jetson to colloborate on a unique puzzle solution, involving the user blinking as a morse code.',
    id:'1'
  },
  {
    name: 'Discord Promotion Bot',
    url: 'https://github.com/ryderwsos/discord_promotion_bot',
    stack: 'Python, BeautifulSoup Discord.py',
    description: 'Using Discord.py API, as well as BeautifulSoup to scrape data off of merchant website, returning current promotions from choosen merchant store.',
    id:'2'
  },
]





export const Projects = () => {

  const [open, setOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState({})

  const setModal = (e) => {
    setOpen(true);
    setCurrentProject(e)
    console.log(open, currentProject)
  }

  const routeChange = () => {
    window.open(currentProject.url)
  }


  return (
    <>
    <div className="project-main">
      <div className="project-page-title">
        <h1>My Projects</h1>
      </div>

      <div className="grid-container">
        {projects.map((props) => {
          return(
            <div className="grid-item" key={props.id}>
              <div onClick={() => setModal(props)} >
                <Folder name={props.name}/>
              </div>
            </div> 
          )
        })}

      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        style={{backgroundColor: 'transparent'}}
      >
        <Box className='modal' >
          <h1 className="project-title">{currentProject.name}</h1>
          <p className="project-desc">Description: {currentProject.description}</p>
          <button className='project-link' onClick={(e) => routeChange(e)}>Link to Project</button>
        </Box>
      </Modal>

    </div>
    </>
  )
}
