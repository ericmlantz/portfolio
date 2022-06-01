import Modal from '../components/Modal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  let navigate = useNavigate()
  const [show, setShow] = useState(false)

  let allprojects = [
    {
      "id": 1,
      "name": "Dinr",
      "description": "This is a tinder-styled restaurant finding app.",
      "image": "https://i.imgur.com/NKnXLAy.png",
      "github_repo": "https://github.com/ericmlantz/dinr",
      "deployed_link": "https://i.imgur.com/qCTSviW.png",
      "className": "dinr-class"
    },
    {
      "id": 2,
      "name": "Set - The Card Game",
      "description": "The SET Card Game - A one player, find all you can version of the card game, SET.",
      "image": "https://i.imgur.com/ZmDT7gz.jpg",
      "github_repo": "https://github.com/ericmlantz/erics_set_game",
      "deployed_link": "https://readyset.surge.sh/",
      "className": "set-class"
    },
    {
      "id": 3,
      "name": "Out and About 5",
      "description": "A scavenger hunt dedicated to a person’s local area. Receive a list of 5 different locations from a variety of categories including restaurants, local parks, etc and get points for going to these locations!",
      "image": "https://i.imgur.com/hftMcPf.jpg",
      "github_repo": "https://github.com/ericmlantz/out-n-about-5-front-end",
      "deployed_link": "https://out-n-about-5-front-end.herokuapp.com/",
      "className": "third-class"
    }
    ]
  return (
    <div className='projects-setup' onClick={() => navigate('/')}>
      <div className='modal-wrapper'>
      {allprojects.map((project) => (
      <Modal key={project.id} name={project.name} description={project.description} github_repo={project.github_repo} image={project.image} deployed_link={project.deployed_link} show={show} setShow={setShow}/>
      ))}
      </div>
    </div>
  )
}

export default Projects