import Dock from 'react-osx-dock'
import {useNavigate} from "react-router-dom";

const MyDock = () => {
  const navigate = useNavigate()
  const dockItems = [
    {
      name: 'Eric Lantz',
      icon: 'https://i.imgur.com/5ynrCwa.png',
      url: '/'
    },
    {
      name: 'Projects',
      icon: 'https://i.imgur.com/2K1KuWZ.png',
      url: '/projects'
    },
    {
      name: 'Projects',
      icon: 'https://i.imgur.com/TnhHaCq.png?1',
      url: '/resume'
    }
  ]
  return (
    <Dock debug width={800} magnification={1} magnifyDirection="up">
      {dockItems.map((item, index) => (
        <Dock.Item className='dockt-item' key={index} onClick={() => navigate(`${item.url}`)}>
          <img className='dock-image' src={`${item.icon}.png`} alt='dock-icon'/>
        </Dock.Item>
      ))}
    </Dock>
  )
}

export default MyDock