import React from 'react'
import { useNavigate } from 'react-router-dom'
import MenuBar from '../components/MenuBar'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div>
      <MenuBar />
      <main className='wrapper'>
        
      </main>
    </div>
  )
}

export default Home