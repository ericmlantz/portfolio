import Modal from '../components/Modal'
import {useState} from 'react'

const Projects = () => {
  
  const [show, setShow] = useState(false)

  return (
    <div className='projects-container'>
       <Modal
          setShow={setShow}
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
  )
}

export default Projects