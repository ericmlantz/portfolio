import React from 'react'
import {useEffect} from 'react'


const Modal = (show) => {
  if (!show.show) {
  return null
  }

return (
    <div className='modal'>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-x" onClick={show.onClose}>
          &times;
        </button>
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">
          This is modal-content
        </div>
      </div>
    </div>
  )
}

export default Modal