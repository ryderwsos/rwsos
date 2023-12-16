import { Modal } from "@mui/material"
import { Folder } from "../components/Folder"
import './Projects.css'
import { useState } from "react"

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

const projects = [
  {
    name: 'Spotify Duplicated Song Remover',
    url: 'https://github.com/ryderwsos/spotify_dup',
    stack: 'sdwa, dwadaw, dwasd',
    description: 'This is a description',
    id:'0'
  },
  {
    name: 'Blinker Puzzle',
    url: 'https://github.com/ryderwsos/Blink-Detector-Puzzel',
    stack: 'sdwa, dwadaw, dwasd',
    description: 'Blinker Puzzle description',
    id:'1'
  },
  {
    name: 'Discord Promotion Bot',
    url: 'https://github.com/ryderwsos/discord_promotion_bot',
    stack: 'sdwa, dwadaw, dwasd',
    description: 'djaiwdhasidhawidshgaidgbaiof',
    id:'2'
  },
  {
    name: 'Discord Promotion ',
    url: 'https://github.com/ryderwsos/discord_promotion_bot',
    stack: 'sdwa, dwadaw, dwasd',
    description: 'djaiwdhasidhawidshgaidgbaiof',
    id:'3'
  },
  {
    name: 'Discord Bot',
    url: 'https://github.com/ryderwsos/discord_promotion_bot',
    stack: 'sdwa, dwadaw, dwasd',
    description: 'djaiwdhasidhawidshgaidgbaiof',
    id:'4'
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
      <div className="title">
        <h1>My Projects</h1>
      </div>

      <div className="grid-container">
        {projects.map((props) => {
          return(
            <div className="grid-item" key={props.id}>
              <div onClick={(e) => setModal(props)} >
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
          <p>Description: {currentProject.description}</p>
          <button onClick={(e) => routeChange(e)}>Link to Project</button>
        </Box>
      </Modal>

    </div>
    </>
  )
}
