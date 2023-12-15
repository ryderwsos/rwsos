import { Modal } from "@mui/material"
import { Folder } from "../components/Folder"
import './Projects.css'

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
              <a href={props.url}>
                <Folder name={props.name}/>
              </a>
            </div> 
          )
        })}

      </div>
    </div>
    </>
  )
}
