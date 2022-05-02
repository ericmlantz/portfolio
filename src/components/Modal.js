import React from 'react'
import {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Modal = (props) => {
  let navigate = useNavigate()

return (
    <div className='modal' onClick={() => navigate('/')}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
          <img className='modal-image' src={props.image}/>
          <h4 className="modal-title">{props.name}</h4>
          {props.description}
        </div>
      </div>
  )
}

export default Modal

// To Close a Modal with an 'X': 
{/* <button className="modal-x" onClick={navigate('/')}>
&times;
</button> */}