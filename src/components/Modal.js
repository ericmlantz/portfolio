import React from 'react'
import { useNavigate } from 'react-router-dom'


const Modal = (props) => {
  let navigate = useNavigate()

return (
    <div className='modal' onClick={() => navigate('/')}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
          <img className='modal-image' src={props.image} alt="modal"/>
          <h4 className="modal-title">{props.name}</h4>
          {props.description}
        </div>
      </div>
  )
}

export default Modal