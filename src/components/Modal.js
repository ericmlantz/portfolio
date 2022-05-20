import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProjectCard from './ProjectCard'

const Modal = (props) => {
  let navigate = useNavigate()

return (
    <div className='mymodal' onClick={() => navigate('/')}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
          <img className='modal-image' src={props.image} alt="modal"/>
          <h4 className="modal-title">{props.name}</h4>
          <p className='modal-description'>{props.description}</p>
          <a className='modal-links' href={props.deployed_link}>Link to Deployed Site</a>
          <a className='modal-links' href={props.github_repo}>Link to Github Repository</a>
        </div>
      </div>
  )
}

export default Modal