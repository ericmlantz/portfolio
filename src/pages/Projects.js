import Modal from '../components/Modal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  let navigate = useNavigate()
  const [show, setShow] = useState(false)

  let allprojects = [
    {
      "id": 1,
      "name": "Dinr",
      "description": "This is a tinder-styled restaurant finding app.",
      "image": "https://i.imgur.com/8N6Z99R.png",
      "github_repo": "https://github.com/ericmlantz/dinr",
      "deployed_link": "https://rhubarb-cupcake-82292.herokuapp.com/",
      "className": "dinr-class"
    },
    {
      "id": 2,
      "name": "Set - The Card Game",
      "description": "The SET Card Game - A one player, find all you can version of the card game, SET.",
      "image": "set",
      "github_repo": "set",
      "deployed_link": "set",
      "className": "set-class"
    },
    {
      "id": 3,
      "name": "Project 3",
      "description": "Project 3 Description",
      "image": "set",
      "github_repo": "set",
      "deployed_link": "set",
      "className": "third-class"
    }
    ]

  return (
    <div className='projects-area' onClick={() => navigate('/')}>
      <div className='modal-wrapper'>
      {allprojects.map((project) => (
      <Modal key={project.id} name={project.name} description={project.description} github_repo={project.github_repo} image={project.image} deployed_link={project.deployed_link} show={show} setShow={setShow}/>
      ))}
      </div>
    </div>
  )
}

export default Projects